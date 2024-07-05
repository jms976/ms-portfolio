import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import styles from './ProjectCard.module.css';
import { MouseEventHandler } from 'react';

type ProjectCardProps = {
  imageUrl?: string;
  title: string;
  period: string;
  company: string;
  description: string;
  onClick?: MouseEventHandler;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { imageUrl, title, company, period, description, onClick } = props;

  return (
    <Card className={styles.cardRoot} sx={{ bgcolor: 'background.card' }} onClick={onClick}>
      {imageUrl && <CardMedia className={styles.cardMedia} image={imageUrl} />}
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="inherit" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.5em' }}>
          <Typography variant="body2" component="div">
            {company}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '.7em' }}>
            {period}
          </Typography>
        </Box>
        <Typography
          className={`${styles.cardDescription} ${!imageUrl && styles.noImage}`}
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: '.8rem' }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
