import SubHeader from "../components/SubHeader";
import Accordion from "../components/Accordion";

const FAQpage = () => {
  return (
    <div className="container">
         <SubHeader current='FAQ' />
         
      <Accordion />
    </div>
  );
};

export default FAQpage;