import Header from "../../components/Header/Header";

function Content() {
  return (
    <>
      <p>
        With your help, New Jersey will no longer:
      </p>

      <ul>
        <li>
          Allow Trenton to overtax us, over-regulate us, spread woke culture in our schools and strip away our rights
        </li>

        <li>
          Settle for the same failed insider politicians
        </li>

        <li>
          Accept failure at the ballot box
        </li>
      </ul>

      <p>
        Together, we will:
      </p>

      <ul>
        <li>
          Engage outsiders ready to take our state back
        </li>

        <li>
          Amplify your voice to make sure the insider politicians hear us
        </li>

        <li>
          Elect Common Sense
        </li>
      </ul>
    </>
  );
}

export default function Mission() {
  return (
    <div className="page">
      <Header
        redText="OUR"
        whiteText="MISSION"
        children={[<Content />]}
      />
    </div>
  );
}
