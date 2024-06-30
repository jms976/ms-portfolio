import { Box, Avatar, Typography, useMediaQuery, useTheme, Button, Divider } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { MailOutline } from '@mui/icons-material';

import { HeaderData } from '../../mockData/header/data';
import { tokens } from '../../styles/tokens';
import styles from './Header.module.css';

const Header = () => {
  const theme = useTheme();
  const isTop = useMediaQuery(theme.breakpoints.down('md'));

  const potfolioId = useOutletContext();
  const data = HeaderData.find((item) => item.id === Number(potfolioId));

  if (!data) {
    return <>error</>;
  }

  return (
    <Box
      className={`${styles.root} ${isTop && styles.topRoot}`}
      sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: { xs: '.5em', md: '2em' } }}
    >
      <Box className={styles.avatarWrapper} sx={{ gap: { xs: '.5em', md: '1em' } }}>
        <Avatar
          sx={{
            width: { xs: '80px', md: '120px' },
            height: { xs: '80px', md: '120px' },
            bgcolor: tokens.color.polarGreen7,
          }}
          {...(data.avatar && { src: data.avatar })}
          {...(data.name && { children: data.name })}
        />
        <Typography className={styles.customBedge}>{data?.bedgeText}</Typography>
      </Box>
      <Box>
        <Typography className={styles.about} component="pre" variant="h6">
          {data.mainTitle}
        </Typography>
        {!isTop && (
          <>
            <Divider sx={{ margin: '2em 1em 2em 0' }} />
            <Typography className={styles.subTitle} variant="h6">
              ABOUT
            </Typography>
            <Typography variant="body2" sx={{ margin: '10px 0' }}>
              {data.about}
            </Typography>
          </>
        )}
        <Divider sx={{ margin: { xs: '10px 0', md: '2em 1em 2em 0' } }} />
        {!isTop && (
          <Typography className={styles.subTitle} variant="h6">
            CONTACT
          </Typography>
        )}
        <Button
          LinkComponent={'a'}
          href="mailto:myungujang@gmail.com"
          tabIndex={-1}
          size="small"
          color="inherit"
          startIcon={<MailOutline />}
        >
          <span style={{ fontSize: '10px' }}>{data.email}</span>
        </Button>
        {!isTop && (
          <>
            <Typography variant="body2" sx={{ margin: '10px 0' }}>
              {data.bottomMessage1}
            </Typography>
            <Typography variant="body2" sx={{ margin: '10px 0' }}>
              {data.bottomMessage2}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
