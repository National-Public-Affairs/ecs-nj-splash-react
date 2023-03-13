import Header from '../../components/Header/Header';
import AdvisorCard from '../../components/AdvisorCard/AdvisorCard';
import Crimi from '../../assets/John-Crimi.jpg';
import Dimemmo from '../../assets/Guy-Dimemmo.jpeg';
import Gill from '../../assets/Rob-Gill.jpg';
import Mabey from '../../assets/Sean-Mabey.jpg';
import Nader from '../../assets/Elizabeth-Nader.jpg';
import Nardolillo from '../../assets/Greg-Nardolillo.png';

export default function Advisors() {
  return (
    <div className="page">
      <Header
        redText="ADVISORS"
        whiteText=""
        children={[]}
      />

      <AdvisorCard
        img={Crimi}
        name="John Crimi"
        title="Owner, County Concrete Corporation"
      />
    </div>
  );
}
