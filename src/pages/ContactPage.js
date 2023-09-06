import { Container, Col } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us' />
                <Col md='10'>
                    <ContactForm />
                </Col>
        </Container>
    )
};

export default ContactPage;