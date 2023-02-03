import styles from './Tile.module.css';

type Props = {
  icon: string,
  text: string,
}

export default function Tile({ icon, text }: Props) {
  return (
    <div className={styles.wrapper}>
      <img src={icon} alt="Elect Common Sense" />
      <div>{text}</div>
    </div>
  );
}
