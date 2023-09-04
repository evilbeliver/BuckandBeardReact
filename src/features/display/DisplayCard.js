import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ item }) => {
    const { image, name, description, info } = item;
    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{info}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;