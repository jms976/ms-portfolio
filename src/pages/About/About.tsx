import { Divider, Paper, Typography, Box } from '@mui/material';
import { useOutletContext } from 'react-router-dom';

import { AboutData } from '../../mockData/about/data';
import styles from './About.module.css';
import Skills from '../../components/Skills/Skills';

const About = () => {
  const portfolioId = useOutletContext();
  const data = AboutData.find((item) => item.id === portfolioId);

  return (
    <Paper variant="outlined" className={styles.root}>
      <Divider>INTRODUCE</Divider>
      <Typography className={styles.introduceWrapper} sx={{ fontSize: '18px' }} component="pre">
        {data?.introduceText}
      </Typography>
      <Divider sx={{ margin: { xs: '10px 0', md: '2em 1em 2em 0' } }}>SKILLS STACK</Divider>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr 1fr', sm: '1fr 1fr 1fr 1fr' },
          gridRowGap: '40px',
          width: '100%',
          padding: '20px 0',
        }}
      >
        {data?.skills.length &&
          data.skills.map(({ name, imageUrl }, index) => <Skills key={index} name={name} url={imageUrl} />)}
      </Box>
    </Paper>
  );
};

export default About;
