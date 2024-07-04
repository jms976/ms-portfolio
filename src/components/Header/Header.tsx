import { Box, Avatar, Typography, useMediaQuery, useTheme, Button, Divider } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { MailOutline } from '@mui/icons-material';

import { HeaderData } from '../../mockData/header/data';
import { tokens } from '../../styles/tokens';
import styles from './Header.module.css';

const Header = () => {
  const theme = useTheme();
  const isTop = useMediaQuery(theme.breakpoints.down('md'));

  const portfolioId = useOutletContext();
  const data = HeaderData.find((item) => item.id === portfolioId);

  if (!data) {
    return <>데이터를 찾을 수 없습니다.</>;
  }

  return (
    <Box
      className={`${styles.root} ${isTop ? styles.topRoot : styles.leftRoot}`}
      sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: { xs: '.5em', md: '2em' } }}
    >
      <Box className={styles.avatarWrapper} sx={{ gap: { xs: '.5em', md: '1em' } }}>
        <Avatar
          sx={{
            margin: { xs: 'auto', md: '0' },
            width: { xs: '80px', md: '120px' },
            height: { xs: '80px', md: '120px' },
            bgcolor: tokens.color.polarGreen6,
          }}
          {...(data.avatar && { src: data.avatar })}
          {...(data.initial && { children: data.initial })}
        />
        <Typography className={styles.bedgeText}>{data?.bedgeText}</Typography>
      </Box>
      <Box>
        <Typography
          className={styles.mainTitle}
          sx={{ color: 'color.title', fontFamily: 'monospace', fontSize: '1.2rem' }}
          component="pre"
          variant="h6"
        >
          {data.mainTitle}
        </Typography>
        {!isTop && (
          <>
            <Divider sx={{ margin: '2em 1em 2em 0' }} />
            <Typography className={styles.subTitle} sx={{ color: 'color.title' }} variant="h6">
              ABOUT
            </Typography>
            <Typography variant="body2" sx={{ margin: '10px 0', color: 'color.content' }}>
              {data.about}
            </Typography>
          </>
        )}
        <Divider sx={{ margin: { xs: '10px 0', md: '2em 1em 2em 0' } }} />
        {!isTop && (
          <Typography className={styles.subTitle} sx={{ color: 'color.title' }} variant="h6">
            CONTACT
          </Typography>
        )}
        <Button
          LinkComponent={'a'}
          href={`mailto:${data.email}`}
          tabIndex={-1}
          size="small"
          sx={{ color: 'color.content' }}
          startIcon={<MailOutline />}
        >
          <Typography component="span" sx={{ fontSize: '10px', color: 'color.content' }}>
            {data.email}
          </Typography>
        </Button>
        {!isTop && (
          <>
            <Typography variant="body2" sx={{ margin: '10px 0', color: 'color.content' }}>
              {data.bottomMessage1}
            </Typography>
            <Typography variant="body2" sx={{ margin: '10px 0', color: 'color.content' }}>
              {data.bottomMessage2}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
