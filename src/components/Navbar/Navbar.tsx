import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import Modal from './Modal';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
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
          <Link
            to="/advisors"
            className={
              location.pathname === '/advisors'
                ? styles.selected
                : ''
            }
          >
            ADVISORS
          </Link>
          {/* use /contact page for verification; reinstall this page once verification is complete */}
          {/* <a
            href="https://secure.winred.com/elect-common-sense/contact-us"
          >
            CONTACT
          </a> */}
          <Link
            to="/contact"
            className={
              location.pathname === '/contact'
                ? styles.selected
                : ''
            }
          >
            CONTACT
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

        {/* mobile hamburger */}
        <Hamburger toggled={open} toggle={setOpen} rounded />

        {/* mobile modal nav menu */}
        <Modal open={open} setOpen={setOpen} />
          
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
