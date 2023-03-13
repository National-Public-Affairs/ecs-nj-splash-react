import styles from './AdvisorCard.module.css';

type Props = {
  img: string,
  name: string,
  title: string,
}

export default function AdvisorCard({ img, name, title }: Props) {
  console.log(img)
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.pic}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div>{name}</div>
      <div>{title}</div>
    </div>
  );
}
