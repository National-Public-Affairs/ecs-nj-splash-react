import { useState, SyntheticEvent } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './Contact.module.css';

type InputType = 'firstName' | 'lastName' | 'email' | 'zip' | 'mobile' | 'textarea' | 'optIn';

export default function Contact() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [optIn, setOptIn] = useState<boolean>(false);
  const [textarea, setTextarea] = useState<string>('');

  const handleInputChange = (event:SyntheticEvent, type: InputType) => {  
    switch (type) {
      case 'firstName':
        setFirstName((event.target as HTMLInputElement).value);
        break;
      case 'lastName':
        setLastName((event.target as HTMLInputElement).value);
        break;
      case 'email':
        setEmail((event.target as HTMLInputElement).value);
        break;
      case 'zip':
        setZip((event.target as HTMLInputElement).value);
        break;
      case 'mobile':
        setMobile((event.target as HTMLInputElement).value);
        break;
      case 'textarea':
        setTextarea((event.target as HTMLInputElement).value);
        break;
      case 'optIn':
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): any => {
    event.preventDefault();
    const toastId = toast.loading('Submitting...');
    if (optIn) {
      setTimeout(() => {
        toast.success('Submitted successfully', { id: toastId });
        setFirstName('');
        setLastName('');
        setEmail('');
        setZip('');
        setMobile('');
        setTextarea('');
        setTimeout(() =>  navigate('/'), 500);
      }, 1500);
    } else {
      toast.error('You must be opted-in', { id: toastId });
    }
  };

  return (
    <div className="page">
      <Header
        redText="CONTACT"
        whiteText=""
        children={[]}
      />

      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e, 'firstName')}
          />
        </label>
        <br />

        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => handleInputChange(e, 'lastName')}
          />
        </label>
        <br />

        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => handleInputChange(e, 'email')}
          />
        </label>
        <br />

        <label>
          ZIP
          <input
            type="text"
            value={zip}
            onChange={(e) => handleInputChange(e, 'textarea')}
          />
        </label>
        <br />

        <label>
          Mobile
          <input
            type="text"
            value={mobile}
            onChange={(e) => handleInputChange(e, 'mobile')}
          />
        </label>
        <br />

        <div className="checkbox-wrapper">
          <input
            id="contact-checkbox"
            type="checkbox"
            checked={optIn}
            onClick={() => setOptIn(!optIn)}
            onChange={(e) => handleInputChange(e, 'optIn')}
          />
          <label htmlFor="contact-checkbox">
            I would like to receive text messages from Elect Common Sense
          </label>
        </div>

        <p className={styles.disclaimer}>
          By checking this box, I expressly consent to receive calls and text messages from Elect Common sense, whether live or containing prerecorded or artificial voice, including calls and text messages made using an automatic telephone dialing system. I understand that message and data rates may apply. I understand that I may revoke this consent at any time by texting “STOP” to any mobile message sent from Elect Common Sense.
        </p>

        <label>
          Add your message
          <textarea
            value={textarea}
            onChange={(e) => handleInputChange(e, 'textarea')}
          />
        </label>
        <br />

        <input type="submit" className="submit" />
      </form>
    </div>
  );
}
