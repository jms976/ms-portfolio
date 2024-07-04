import { Paper, Typography, Box } from '@mui/material';
import styles from './Project.module.css';
import { ProjectCard } from '../../components/ProjectCard';

const Project = () => {
  return (
    <Paper variant="outlined" className={styles.root}>
      <Typography gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'color.title' }}>
        PROJECT
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, minmax(200px, 1fr))',
            sm: 'repeat(2, minmax(200px, 1fr))',
            md: 'repeat(auto-fit, 280px)',
          },
          gap: '20px',
          width: '100%',
        }}
      >
        <ProjectCard
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
        />
      </Box>
    </Paper>
  );
};

export default Project;
