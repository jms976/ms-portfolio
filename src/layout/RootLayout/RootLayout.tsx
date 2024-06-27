import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Box, Toolbar } from '@mui/material';

import { Navigation } from '../Navigation';
import styles from './RootLayout.module.css';
import { Header } from '../../components/Header';

type RootLayoutProps = {
  children?: ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | 명수 Frontened Developer" defaultTitle="명수 포폴" defer={false}>
        {pathname && <title>{pathname.split('/').at(1)}</title>}
      </Helmet>
      <Box component="div" className={styles.wrapper}>
        <Navigation />
        <Toolbar />
        <Box
          component="main"
          className={styles.mainWrapper}
          sx={{ p: 3, display: { xs: 'block', md: 'flex' }, gap: { md: '40px' } }}
        >
          <Box component="section">
            <Header />
          </Box>
          <Box className={styles.main} sx={{ width: { xs: 'auto', sm: '100%' }, margin: { xs: '0 -24px', sm: '0' } }}>
            {children}
          </Box>
        </Box>
      </Box>
    </HelmetProvider>
  );
};

export default RootLayout;
