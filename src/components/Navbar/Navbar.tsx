import { Slant as Hamburger } from 'hamburger-react';
import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={`${styles.wrapper} ${styles.general}`}>
        <div className={styles.left}>
          <a>
            <img
              src={logo}
              alt="Elect Common Sense – NJ"
              className={styles.logo}
            />
          </a>
          <a>HOME</a>
          <a>MISSION</a>
          <a>BOARD</a>
        </div>

        <div className={styles.right}>
          <a className={styles.link}>DONATE</a>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className={`${styles.mobileWrapper} ${styles.general}`}>
        <a>
          <img
              src={logo}
              alt="Elect Common Sense – NJ"
              className={styles.logo}
            />
        </a>
        <a className={styles.link}>DONATE</a>
        <Hamburger
          rounded
          color="#3a3393"
        />
      </nav>
    </>
  );
}
