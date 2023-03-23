import { SyntheticEvent } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): any => {
    event.preventDefault();
  };

  return (
    <div className="page">
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <label>
          First Name
          <input type="text" />
        </label>
        <br />

        <label>
          Last Name
          <input type="text" />
        </label>
        <br />

        <label>
          Email
          <input type="text" />
        </label>
        <br />

        <label>
          ZIP
          <input type="text" />
        </label>
        <br />

        <label>
          Mobile
          <input type="text" />
        </label>
        <br />

        <div className="checkbox-wrapper">
          <input id="contact-checkbox" type="checkbox" />
          <label htmlFor="contact-checkbox">
            I would like to receive text messages from Elect Common Sense
          </label>
        </div>

        <p className={styles.disclaimer}>
          By checking this box, I expressly consent to receive calls and text messages from Elect Common sense, whether live or containing prerecorded or artificial voice, including calls and text messages made using an automatic telephone dialing system. I understand that message and data rates may apply. I understand that I may revoke this consent at any time by texting “STOP” to any mobile message sent from Elect Common Sense.
        </p>

        <label>
          Add your message
          <textarea />
        </label>
        <br />

        <input type="submit" className="submit" />
      </form>
    </div>
  );
}
