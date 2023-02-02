import { Slant as Hamburger } from 'hamburger-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className={`${styles.wrapper} ${styles.general}`}>
        <div className={styles.left}>
          <Link to="/">
            <img
              src={logo}
              alt="Elect Common Sense – NJ"
              className={styles.logo}
            />
          </Link>
          <Link
            to="/"
            className={
              location.pathname === '/'
                ? styles.selected
                : ''
            }
          >
            HOME
          </Link>
          <Link
            to="/mission"
            className={
              location.pathname === '/mission'
                ? styles.selected
                : ''
            }
          >
            MISSION
          </Link>
        </div>

        <div className={styles.right}>
          <a className={styles.link}>DONATE</a>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className={`${styles.mobileWrapper} ${styles.general}`}>
        <Link to="/">
          <img
              src={logo}
              alt="Elect Common Sense – NJ"
              className={styles.logo}
            />
        </Link>
        <Link to="/mission">MISSION</Link>
        <a className={styles.link}>DONATE</a>
      </nav>
    </>
  );
}
