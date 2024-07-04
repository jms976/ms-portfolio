import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, useTheme, Box } from '@mui/material';
import { ContactPage, LocationOn, MailOutline, PhoneIphone } from '@mui/icons-material';

import styles from './Contact.module.css';
import { useOutletContext } from 'react-router-dom';
import { ContactData } from '../../mockData/contact/data';

const Contact = () => {
  const theme = useTheme();

  const portfolioId = useOutletContext();
  const data = ContactData.find((item) => item.id === portfolioId);

  return (
    <Paper
      variant="outlined"
      className={styles.root}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: { xs: 'calc(100vh - 236px)', sm: 'calc(100vh - 268px)', md: 'auto' },
      }}
    >
      <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'color.title' }}>CONTACT ME</Typography>
      <Box className={styles.contact} sx={{ margin: 'auto' }}>
        <List>
          <ListItem
            className={`${theme.palette.mode === 'dark' ? styles.contactDarkItem : styles.contactLightItem}`}
            component="a"
            href={`mailto:${data?.email}`}
          >
            <ListItemIcon sx={{ marginBottom: '18px', marginRight: '-10px', color: 'color.icon' }}>
              <MailOutline fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary="E-mail"
              secondary={data?.email ?? '-'}
              primaryTypographyProps={{ color: 'color.iconText', fontSize: '20px' }}
              secondaryTypographyProps={{ color: 'color.icon', fontSize: '16px' }}
            />
          </ListItem>
          <ListItem
            className={`${theme.palette.mode === 'dark' ? styles.contactDarkItem : styles.contactLightItem}`}
            component="a"
            href={`https://map.naver.com/p/search/${data?.address}`}
            target="_blank"
          >
            <ListItemIcon sx={{ marginBottom: '18px', marginRight: '-10px', color: 'color.icon' }}>
              <LocationOn fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary="Adress"
              secondary={data?.address ?? '-'}
              primaryTypographyProps={{ color: 'color.iconText', fontSize: '20px' }}
              secondaryTypographyProps={{ color: 'color.icon', fontSize: '16px' }}
            />
          </ListItem>
          <ListItem
            className={`${theme.palette.mode === 'dark' ? styles.contactDarkItem : styles.contactLightItem}`}
            component="a"
            href={`sms:${data?.cell}`}
          >
            <ListItemIcon sx={{ marginBottom: '18px', marginRight: '-10px', color: 'color.icon' }}>
              <PhoneIphone fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary="Cell"
              secondary={data?.cell ?? '-'}
              primaryTypographyProps={{ color: 'color.iconText', fontSize: '20px' }}
              secondaryTypographyProps={{ color: 'color.icon', fontSize: '16px' }}
            />
          </ListItem>
          <ListItem
            className={`${theme.palette.mode === 'dark' ? styles.contactDarkItem : styles.contactLightItem}`}
            component="a"
            href={data?.resume}
            target="_blank"
            download={`${data?.resumeName ?? 'Resume'}.pdf`}
          >
            <ListItemIcon sx={{ marginBottom: '18px', marginRight: '-10px', color: 'color.icon' }}>
              <ContactPage fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary="Resume"
              secondary={`${data?.resumeName ?? '-'}.pdf`}
              primaryTypographyProps={{ color: 'color.iconText', fontSize: '20px' }}
              secondaryTypographyProps={{ color: 'color.icon', fontSize: '16px' }}
            />
          </ListItem>
        </List>
      </Box>
    </Paper>
  );
};

export default Contact;
