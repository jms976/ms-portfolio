import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Paper, Typography, Box } from '@mui/material';

import { ProjectCard } from '../../components/ProjectCard';
import { ProjectData } from '../../mockData/project/data';
import { DialogBase } from '../../components/DialogBase';
import { ProjectCardProps } from '../../components/ProjectCard/ProjectCard';

import styles from './Project.module.css';
import { Carousel } from '../../components/Carousel';

type DetailTypes = {
  images: string[];
} & Omit<ProjectCardProps, 'onClick' | 'imgUrl'>;

const Project = () => {
  const portfoiliId = useOutletContext();
  const data = ProjectData.find((item) => item.id === portfoiliId);

  const [detailOpen, setDetailOpen] = useState(false);
  const [targetProject, setTargetProject] = useState<DetailTypes>();

  const openDetailDialog = (project: DetailTypes) => () => {
    setTargetProject(project);
    setDetailOpen(true);
  };

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
              onClick={openDetailDialog({
                images: images.map((image) => image.url),
                ...rest,
              })}
              {...rest}
            />
          ))}
      </Box>

      <DialogBase title={targetProject?.title} visable={detailOpen} onClose={() => setDetailOpen(false)} scroll="paper">
        {!!targetProject?.images.length && <Carousel images={targetProject.images} />}
        <Typography className={styles.detailContent} component="pre" sx={{ fontSize: { xs: '.8em', md: '1em' } }}>
          {targetProject?.description}
        </Typography>
      </DialogBase>
    </Paper>
  );
};

export default Project;
