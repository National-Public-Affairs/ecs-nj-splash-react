import logo from '../../assets/logo.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <img
        src={logo}
        alt="Elect Common Sense – NJ"
        className={styles.logo}
      />

      <div>®All Rights Reserved.</div>
    </div>
  );
}
