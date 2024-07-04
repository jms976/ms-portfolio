import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  imageUrl: string;
  title: string;
  period: string;
  company: string;
  description: string;
  detail?: {
    imageUrlList: string[];
    descriptionList: string[];
  };
};

const ProjectCard = (props: ProjectCardProps) => {
  const { imageUrl, title, company, period, description } = props;

  return (
    <Card sx={{ aspectRatio: '1/1.1' }}>
      <CardMedia sx={{ height: '50%' }} image={imageUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.5em' }}>
          <Typography variant="body1" component="div">
            {company}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1em' }}>
            {period}
          </Typography>
        </Box>
        <Typography
          className={styles.cardDescription}
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: '.7rem' }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
