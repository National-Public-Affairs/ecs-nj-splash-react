import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.left}>
        <a>HOME</a>
        <a>MISSION</a>
        <a>BOARD</a>
      </div>

      <div>
        <a className={styles.right}>DONATE</a>
      </div>
    </nav>
  );
}
