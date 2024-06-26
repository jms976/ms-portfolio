import { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Box, Toolbar } from '@mui/material';

import { Navigation } from '../Navigation';
import styles from './RootLayout.module.css';

type RootLayoutProps = {
  children?: ReactNode;
  title?: string;
};

const RootLayout = (props: RootLayoutProps) => {
  const { children, title } = props;
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | 명수 Frontened Developer" defaultTitle="명수 포폴" defer={false}>
        {title && <title>{title}</title>}
      </Helmet>

      <div className={styles.wrapper}>
        <Navigation />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <div className={styles.main}>{children}</div>
        </Box>
        {/* {props.fullPage ? null : <SideBar />} */}
      </div>
    </HelmetProvider>
  );
};

export default RootLayout;
