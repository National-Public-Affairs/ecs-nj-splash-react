import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import Bank from '../../assets/SVG/Bank';
import School from '../../assets/SVG/School';
import BallotBox from '../../assets/SVG/BallotBox';
import Megaphone from '../../assets/SVG/Megaphone';
import PiggyBank from '../../assets/SVG/PiggyBank';
import NJ from '../../assets/SVG/NJ';
import Ballot from '../../assets/SVG/Ballot';
import People from '../../assets/SVG/People';
import styles from './Mission.module.css';

function Content() {
  return (
    <div className={styles.wrapper}>
      <p className={`${styles.purpleText} bold`}>
        With your help, New Jersey will no longer:
      </p>

     <div className={styles.tileGroup}>
       <Tile
        icon={<PiggyBank fillColor="#3a3393" />}
        text="Allow Trenton to overtax us and over-regulate us"
        borderColor="#3a3393"
      />
      <Tile
        icon={<School fillColor="#3a3393" />}
        text="Spread woke culture in our schools and strip away our rights"
        borderColor="#3a3393"
      />
      <Tile
        icon={<Bank fillColor="#3a3393" />}
        text="Settle for the same failed insider politicians"
        borderColor="#3a3393"
      />
      <Tile
        icon={<BallotBox fillColor="#3a3393" />}
        text="Accept failure at the ballot box every November"
        borderColor="#3a3393"
      />
     </div>

      <p className={`${styles.purpleText} bold`}>
        Together, we will:
      </p>

      <div className={styles.tileGroup}>
        <Tile
          icon={<NJ fillColor="#ef0b2e" />}
          text="Engage outsiders ready to take our state back"
          borderColor="#ef0b2e"
        />
        <Tile
          icon={<Megaphone fillColor="#ef0b2e" />}
          text="Amplify our voices to make sure the insider politicians hear us"
          borderColor="#ef0b2e"
        />
        <Tile
          icon={<People fillColor="#ef0b2e" />}
          text="End 'business as usual' in Trenton and return power to the people"
          borderColor="#ef0b2e"
        />
        <Tile
          icon={<Ballot fillColor="#ef0b2e" />}
          text="Elect Common Sense"
          borderColor="#ef0b2e"
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
