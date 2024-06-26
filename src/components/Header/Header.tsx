import { Box, Avatar, Typography, useMediaQuery, useTheme, Button, Divider, Chip } from '@mui/material';
import { MailOutline } from '@mui/icons-material';

import { tokens } from '../../styles/tokens';
import styles from './Header.module.css';

const Header = () => {
  const theme = useTheme();
  const isTop = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      className={`${styles.root} ${isTop && styles.topRoot}`}
      sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' } }}
    >
      <Box className={styles.avatarWrapper}>
        <Avatar sx={{ width: '80px', height: '80px', bgcolor: tokens.color.polarGreen7 }}>MS</Avatar>
        <Typography className={styles.customBedge}>FE Develper</Typography>
      </Box>
      <Box>
        <Typography variant="h6">
          반갑습니다 ( ͡•. •͡)
          <br />
          FE 개발자 장명수 입니다
        </Typography>
        {!isTop && (
          <>
            <Typography sx={{ margin: '10px 0' }}>
              이 포트폴리오 사이트는 <br />
              React | MUI | VITE | 등으로 <br />
              사용하여 제작 되었습니다.
            </Typography>
            <Typography sx={{ margin: '10px 0' }}>
              저를 더 많이 알고 싶으시거나
              <br />
              커피챗 요청이 있다면,
              <br />
              아래 메일로 연락 주세요.
            </Typography>
          </>
        )}
        <Divider sx={{ margin: '10px 20px' }}>
          <Chip label="mail" size="small" />
        </Divider>
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
            <Typography sx={{ margin: '10px 0' }}>제품에 진심이고 함께 발전하고 싶습니다</Typography>
            <Typography sx={{ margin: '10px 0' }}>방문해 주셔서 감사합니다 :)</Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
