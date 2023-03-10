import CloseButton from '../../assets/SVG/CloseButton';
import styles from './Popup.module.css';

type Props = {
  setPopup: Function,
}

export default function VideoPopup({ setPopup }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CloseButton setPopup={setPopup} />
        <div className={styles.embedWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/T5mKPD5wxJg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}
