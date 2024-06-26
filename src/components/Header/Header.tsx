import { Box, Avatar, Typography, useMediaQuery, useTheme, Button, Divider } from '@mui/material';
import { MailOutline } from '@mui/icons-material';

import { tokens } from '../../styles/tokens';
import styles from './Header.module.css';

const Header = () => {
  const theme = useTheme();
  const isTop = useMediaQuery(theme.breakpoints.down('md'));

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
        >
          MS
        </Avatar>
        <Typography className={styles.customBedge}>FE Develper</Typography>
      </Box>
      <Box>
        <Typography variant="h6">
          반갑습니다 :)
          <br />
          FE 개발자 장명수 입니다
        </Typography>
        {!isTop && (
          <>
            <Divider sx={{ margin: '2em 1em 2em 0' }} />
            <Typography className={styles.subTitle} variant="h6">
              ABOUT
            </Typography>
            <Typography variant="body2" sx={{ margin: '10px 0' }}>
              이 포트폴리오 사이트는 React | MUI | VITE ... 등으로 사용하여 제작 되었습니다. 저를 더 많이 알고 싶으시면
              아래 메일로 연락 주세요. 서울 마포 근처라면 항시 커피챗 가능합니다.
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
          component="a"
          href="mailto:myungujang@gmail.com"
          tabIndex={-1}
          size="small"
          color="inherit"
          startIcon={<MailOutline />}
        >
          myungsujang89@gmail.com
        </Button>
        {!isTop && (
          <>
            <Typography variant="body2" sx={{ margin: '10px 0' }}>
              제품에 진심이고 함께 발전하고 싶습니다
            </Typography>
            <Typography variant="body2" sx={{ margin: '10px 0' }}>
              방문해 주셔서 감사합니다 :)
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
