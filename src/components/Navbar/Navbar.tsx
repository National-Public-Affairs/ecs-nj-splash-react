import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={`${styles.wrapper} ${styles.general}`}>
        <div className={styles.left}>
          <a>HOME</a>
          <a>MISSION</a>
          <a>BOARD</a>
        </div>

        <div className={styles.right}>
          <a className={styles.link}>DONATE</a>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className={styles.mobileWrapper}>
      
      </nav>
    </>
  );
}
