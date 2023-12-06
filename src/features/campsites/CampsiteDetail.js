import { Card, CardImg, CardText, CardBody, Col, } from 'reactstrap';
//import { Link } from 'react-router-dom';

const CampsiteDetail = ( {campsite} ) => {
    const { image, name, description, directions } = campsite;

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText ><strong>{name}</strong></CardText>
                    <CardText>{description}</CardText>
                      <a role='button' className='btn btn-secondary' href={directions} alt="Google Maps Driving Directions" target="_blank" rel="noreferrer">Directions</a>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CampsiteDetail;