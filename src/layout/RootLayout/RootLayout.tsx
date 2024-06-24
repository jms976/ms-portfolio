import { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navigation } from '../Navigation';

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
      <div id="wrapper">
        <Navigation />
        <div id="main">{children}</div>
        {/* {props.fullPage ? null : <SideBar />} */}
      </div>
    </HelmetProvider>
  );
};

export default RootLayout;
