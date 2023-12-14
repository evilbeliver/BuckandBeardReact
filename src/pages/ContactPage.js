import { Container, Col } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us' />
            <p>Please fill out all of the fields as the submit button will not be active until you do!</p>
            <p>* Denotes a Required Field</p>
                <Col md='10'>
                    <ContactForm />
                </Col>
        </Container>
    )
};

export default ContactPage;