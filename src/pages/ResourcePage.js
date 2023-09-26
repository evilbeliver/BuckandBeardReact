import { Col, Container, Card, CardBody, CardTitle } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import rules from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/Rules.pdf'
//import { Link } from 'react-router-dom';
//import PartnersList from '../features/parters/PartnersList';

const ResourcePage = () => {

    return (
        <Container>
            <SubHeader current='Resource Page' />
                <Col>
                    <h2>This is a resource page for current and inquiring members</h2>
                         <Card style={{ width: '18rem' }}>
                        <CardBody >
                          <CardTitle>Rules and Regulations</CardTitle>
                          <a role='button'
                            className='btn btn-primary' href={rules} download={rules} target="_blank" rel="noreferrer">Rules and Regulations</a>
                        </CardBody>
                    </Card>
                </Col>
        </Container>                 
    );
};

export default ResourcePage;