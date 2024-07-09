import { Divider, Paper, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { useOutletContext } from 'react-router-dom';

import { AboutData } from '../../mockData/about/data';
import { Skills } from '../../components/Skills';
import styles from './About.module.css';

const About = () => {
  const portfolioId = useOutletContext();
  const data = AboutData.find((item) => item.id === portfolioId);

  return (
    <Paper variant="outlined" className={styles.root}>
      <Divider sx={{ margin: '.1em 1em 2em 0', fontWeight: 'bold' }}>INTRODUCE</Divider>
      <Typography
        className={styles.introduceWrapper}
        sx={{ color: 'color.content', lineHeight: '2rem' }}
        component="pre"
      >
        {data?.introduceText}
      </Typography>
      {!!data?.skills.length && (
        <>
          <Divider sx={{ margin: '3em 1em 2em 0', fontWeight: 'bold' }}>SKILLS STACK</Divider>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr 1fr', sm: '1fr 1fr 1fr 1fr' },
              gridRowGap: { xs: '50px', sm: '60px' },
              width: '100%',
              padding: '20px 0',
            }}
          >
            {data.skills.map(({ name, imageUrl }, index) => (
              <Skills key={index} name={name} url={imageUrl} />
            ))}
          </Box>
        </>
      )}
      {!!data?.career.length && (
        <>
          <Divider sx={{ margin: '3em 1em .2em 0', fontWeight: 'bold' }}>CAREER</Divider>
          <List sx={{ maxWidth: '500px', margin: 'auto' }}>
            {data.career.map(({ company, role, period }, index) => (
              <ListItem key={index} divider>
                <ListItemText primary={company} secondary={role} primaryTypographyProps={{ color: 'color.icon' }} />
                <ListItemText sx={{ position: 'absolute', top: '.5em', right: '1em', fontSize: '.8rem' }}>
                  {period}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Paper>
  );
};

export default About;
