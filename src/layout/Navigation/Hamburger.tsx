import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import { routes } from '../../router/routerMap';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#10005;
              </div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#9776;
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback>
        <Menu right isOpen={open}>
          <ul className="hamburger-ul">
            {routes
              .filter((l) => !l.hideNav)
              .map((l, index) => (
                <li key={index}>
                  <Link to={l.path ?? '/'} onClick={() => setOpen(!open)}>
                    <h3 className={l.id && 'index-li'}>{l.id}</h3>
                  </Link>
                </li>
              ))}
          </ul>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;
