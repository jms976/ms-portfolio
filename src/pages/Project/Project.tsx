import { useOutletContext } from 'react-router-dom';
import { Paper, Typography, Box } from '@mui/material';

import { ProjectCard } from '../../components/ProjectCard';
import styles from './Project.module.css';
import { ProjectData } from '../../mockData/project/data';

const Project = () => {
  const portfoiliId = useOutletContext();
  const data = ProjectData.find((item) => item.id === portfoiliId);

  return (
    <Paper variant="outlined" className={styles.root}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'color.title', marginBottom: '.5em' }}>
        PROJECT
      </Typography>
      <Box
        sx={{
          display: 'grid',
          justifyContent: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, minmax(200px, 1fr))',
            sm: 'repeat(2, minmax(200px, 1fr))',
            md: 'repeat(auto-fit, minmax(250px, 1fr))',
          },
          gap: '1rem',
          width: '100%',
        }}
      >
        {data &&
          data.projects.map(({ images, ...rest }, index) => (
            <ProjectCard
              key={index}
              imageUrl={images.find((image) => image.thumbnail)?.url ?? images.at(0)?.url}
              {...rest}
            />
          ))}
        {/* <ProjectCard
          imageUrl="/assets/images/skill/react-query.webp"
          title="test"
          period="2022.01.01 - 2024.01.01"
          company="noPredict"
          description="그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거 "
        />
        <ProjectCard
          imageUrl="/assets/images/skill/express.webp"
          title="test"
          period="2022.01.01 - 2024.01.01"
          company="noPredict"
          description="그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거 "
        />
        <ProjectCard
          imageUrl="/assets/images/skill/redux.webp"
          title="test"
          period="2022.01.01 - 2024.01.01"
          company="noPredict"
          description="그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거 "
        />
        <ProjectCard
          imageUrl="/assets/images/skill/storybook.webp"
          title="test"
          period="2022.01.01 - 2024.01.01"
          company="noPredict"
          description="그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거 "
        />
        <ProjectCard
          imageUrl="/assets/images/skill/react.webp"
          title="test"
          period="2022.01.01 - 2024.01.01"
          company="noPredict"
          description="그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거그냥 할일 없어 만든거 "
        /> */}
      </Box>
    </Paper>
  );
};

export default Project;
