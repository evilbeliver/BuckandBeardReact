import { Container, Card, CardBody, CardTitle, CardText, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import rules from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/Rules.pdf'
import waiver from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/waiver.pdf'
import newApp from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/newApp.docx'
//import { Link } from 'react-router-dom';
//import PartnersList from '../features/parters/PartnersList';

const ResourcePage = () => {

    return (
        <Container>
            <SubHeader current='Resource Page' />
                <Row>
                    <h2>This is a resource page for current and inquiring members</h2>
                    <Card style={{ width: '12rem' }}>
                        <CardBody >
                          <CardTitle>Rules and Regulations</CardTitle>
                            <CardText>Please click on the button below to download and view our rules and Regulations </CardText>
                          <a role='button'
                            className='btn btn-primary' href={rules} download={rules} target="_blank" rel="noreferrer">Download</a>
                        </CardBody>
                    </Card>
                    &nbsp;&nbsp;&nbsp;
                    <Card style={{ width: '12rem' }}>
                        <CardBody >
                          <CardTitle>Member/Visitor Waiver</CardTitle>
                            <CardText>Please click on the button below to download the member/visitor waiver.</CardText>
                          <a role='button'
                            className='btn btn-primary' href={waiver} download={waiver} target="_blank" rel="noreferrer">Download</a>
                        </CardBody>
                    </Card>
                    &nbsp;&nbsp;&nbsp;
                    <Card style={{ width: '12rem' }}>
                        <CardBody >
                          <CardTitle>New Member Application</CardTitle>
                            <CardText>Please click on the button below to download the New Member Application.</CardText>
                          <a role='button'
                            className='btn btn-primary' href={newApp} download={newApp} target="_blank" rel="noreferrer">Download</a>
                        </CardBody>
                    </Card>
                </Row>
        </Container>                 
    );
};

export default ResourcePage;