
import { faqs } from "/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/shared/FAQ.js"
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </ul>
  );
};

export default Accordion;