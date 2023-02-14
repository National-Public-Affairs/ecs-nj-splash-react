import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className={`${styles.wrapper} ${styles.general}`}>
        <div className={styles.left}>
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
          <a
            href="https://secure.winred.com/elect-common-sense/donate-today"
            className={styles.link}
          >
            DONATE
          </a>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className={`${styles.mobileWrapper} ${styles.general}`}>
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
        <a
          href="https://secure.winred.com/elect-common-sense/donate-today"
          className={styles.link}
        >
          DONATE
        </a>
      </nav>
    </>
  );
}
