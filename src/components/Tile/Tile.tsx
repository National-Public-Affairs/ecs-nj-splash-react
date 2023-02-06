import { ReactNode } from 'react';
import styles from './Tile.module.css';

type Props = {
  icon: ReactNode | string,
  text: string,
  borderColor: '#ef0b2e' | '#3a3393',
}

export default function Tile({ icon, text, borderColor }: Props) {
  return (
    <div
      className={styles.wrapper}
      style={{ border: `5px solid ${borderColor}` }}
    >
      {
        typeof icon === 'string'
          ? (
            <img
              src={icon}
              alt="Elect Common Sense"
            />
          )
          : icon
      }
      <div>{text}</div>
    </div>
  );
}
