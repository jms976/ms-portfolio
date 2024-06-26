import { forwardRef, useState, useEffect } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import { Close, Menu } from '@mui/icons-material';

import { routes } from '../../router/routerMap';
import styles from './Navigation.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkBehavior = forwardRef<any, Omit<LinkProps, 'to'>>((props, ref) => (
  <Link ref={ref} to="/" {...props} role={undefined} />
));

const Navigation = () => {
  const [Title] = routes;
  const routeList = ({ isIndex }: { isIndex?: boolean }) =>
    routes.filter(({ index, hideNav }) => !index && !(isIndex && hideNav));

  const { pathname } = useLocation();
  const [currentPathname, setCurrentPathname] = useState(pathname.split('/').at(1));

  useEffect(() => {
    setCurrentPathname(pathname.split('/').at(1));
  }, [pathname]);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => document.body : undefined;

  return (
    <>
      <AppBar component="nav" color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.headerTitle}>
            <Button component={LinkBehavior} {...(Title.path && { to: Title.path })} variant="text" color="inherit">
              {Title.id}
            </Button>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className={styles.headerLink}>
            {routeList({ isIndex: true }).map(({ id, path }) => (
              <Button
                component={LinkBehavior}
                disabled={!path}
                key={id}
                className={`${currentPathname === id && styles.active}`}
                variant="text"
                color="inherit"
                {...(path && { to: path })}
              >
                {id}
              </Button>
            ))}
          </Box>
          <Box
            className={`${styles.headerLink} ${styles.smallSize}`}
            sx={{ display: { xs: 'block', sm: 'none' }, flexGrow: { xs: 1, sm: 0 } }}
          >
            <span>{currentPathname}</span>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={handleDrawerToggle}>
              <Close />
            </IconButton>
          </Toolbar>
          <Divider />
          <List className={styles.navList}>
            {routeList({}).map(({ id, path }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  component={LinkBehavior}
                  disabled={!path}
                  key={id}
                  onClick={handleDrawerToggle}
                  {...(path && { to: path })}
                >
                  <span className={styles.navListText}>{id}</span>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </nav>
    </>
  );
};

export default Navigation;
