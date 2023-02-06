import { ReactNode } from 'react';
import styles from './Tile.module.css';

type Props = {
  icon: ReactNode | string,
  text: string,
}

export default function Tile({ icon, text }: Props) {
  return (
    <div className={styles.wrapper}>
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
