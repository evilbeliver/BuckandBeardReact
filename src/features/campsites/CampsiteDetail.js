import { Card, CardImg, CardText, CardBody, Col, } from 'reactstrap';
//import { Link } from 'react-router-dom';

const CampsiteDetail = ( {campsite} ) => {
    const { image, name, description, directions } = campsite;

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                      <a href={directions} target="_blank" ><button>Driving Directions</button></a>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CampsiteDetail;