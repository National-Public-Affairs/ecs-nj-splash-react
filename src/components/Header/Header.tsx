import stars from '../../assets/stars.png';
import styles from './Header.module.css';

type Props = {
  redText: string,
  whiteText: string,
  children: any,
}

export default function Header({ redText, whiteText, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        <span className={styles.red}>{redText}</span>&nbsp;
        {whiteText}
      </h1>
      <img
        src={stars}
        alt="Elect Common Sense"
        className={styles.stars}
      />
      {...children}
    </div>
  );
}
