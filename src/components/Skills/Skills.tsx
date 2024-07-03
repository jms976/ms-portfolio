import { Box, Typography } from '@mui/material';
import styles from './Skills.module.css';

type SkillsProps = {
  url: string;
  name: string;
};

const Skills = (props: SkillsProps) => {
  const { url, name } = props;

  return (
    <Box className={styles.root} sx={{ width: { xs: '60px', md: '100px' }, height: { xs: '60px', md: '100px' } }}>
      <img className={styles.image} src={url} alt={name} loading="lazy" />
      <Typography className={styles.text}>{name}</Typography>
    </Box>
  );
};

export default Skills;
