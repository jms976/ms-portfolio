import { useOutletContext } from 'react-router-dom';
import { Paper, Typography, Box, Dialog } from '@mui/material';

import { ProjectCard } from '../../components/ProjectCard';
import styles from './Project.module.css';
import { ProjectData } from '../../mockData/project/data';
import { useState } from 'react';

const Project = () => {
  const portfoiliId = useOutletContext();
  const data = ProjectData.find((item) => item.id === portfoiliId);

  const [detailOpen, setDetailOpen] = useState(false);
  const [targetImages, setTargetImages] = useState<string[]>([]);

  const openDetailDialog = (images: { url: string; thumbnail?: boolean }[]) => () => {
    setTargetImages(images.map((item) => item.url));
    setDetailOpen(true);
  };

  const handleClose = () => {
    setDetailOpen(false);
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
              onClick={openDetailDialog(images)}
              {...rest}
            />
          ))}
      </Box>

      <Dialog open={detailOpen} onClose={handleClose} scroll="paper">
        {targetImages}
        {[...new Array(50)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      </Dialog>
    </Paper>
  );
};

export default Project;
