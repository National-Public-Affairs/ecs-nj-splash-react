import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import taxesIcon from '../../assets/icons/taxes-icon.png';
import politicsIcon from '../../assets/icons/politics-icon.png';
import votingIcon from '../../assets/icons/voting-icon.png';
import njIcon from '../../assets/icons/NJ-icon.png';
import megaphoneIcon from '../../assets/icons/megaphone-icon.png';
import ballotIcon from '../../assets/icons/ballot-icon.png';
import styles from './Mission.module.css';

function Content() {
  return (
    <div className={styles.wrapper}>
      <p className="bold">
        With your help, New Jersey will no longer:
      </p>

     <div className={styles.tileGroup}>
       <Tile
        icon={taxesIcon}
        text="Allow Trenton to overtax us, over-regulate us, spread woke culture in our schools and strip away our rights"
      />
      <Tile
        icon={politicsIcon}
        text="Settle for the same failed insider politicians"
      />
      <Tile
        icon={votingIcon}
        text="Accept failure at the ballot box"
      />
     </div>

      <p className="bold">
        Together, we will:
      </p>

      <div className={styles.tileGroup}>
        <Tile
          icon={njIcon}
          text="Engage outsiders ready to take our state back"
        />
        <Tile
          icon={megaphoneIcon}
          text="Amplify your voice to make sure the insider politicians hear us"
        />
        <Tile
          icon={ballotIcon}
          text="Elect Common Sense"
        />
      </div>
    </div>
  );
}

export default function Mission() {
  return (
    <div className="page">
      <Header
        redText="OUR"
        whiteText="MISSION"
        children={[]}
      />

      <Content />
    </div>
  );
}
