import { Link } from 'react-router-dom';

import { routes } from '../../router/routerMap';
import styles from './Navigator.module.css';
// import Hamburger from './Hamburger';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        {routes
          .filter((l) => l.index)
          .map((l) => (
            <Link key={l.id} to={l.path ?? '/'}>
              {l.id}
            </Link>
          ))}
      </h1>
      <nav className={styles.headerLink}>
        <ul>
          {routes
            .filter((l) => !l.index && !l.hideNav)
            .map((l) => (
              <li key={l.id}>
                <Link to={l.path ?? '/'}>{l.id}</Link>
              </li>
            ))}
        </ul>
      </nav>
      {/* <Hamburger /> */}
    </header>
  );
};

export default Navigation;
