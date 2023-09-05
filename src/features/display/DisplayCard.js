import { Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';

const DisplayCard = ({ item }) => {
    const { image, name, altdescription, info } = item;
    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{info}</CardTitle>
                <CardText>{altdescription}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;