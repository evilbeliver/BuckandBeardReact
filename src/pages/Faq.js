import SubHeader from "../components/SubHeader";
import Accordion from "../components/Accordion";

const FAQpage = () => {
  return (
    <div className="container">
         <SubHeader current='FAQ' />
         <h2>Below is a list of commonly asked questions and the answers related to BuckandBeard Hunt Club.</h2>
         <br></br>
      <Accordion />
    </div>
  );
};

export default FAQpage;