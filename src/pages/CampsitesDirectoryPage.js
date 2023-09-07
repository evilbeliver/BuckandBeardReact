import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
             <SubHeader current='Our Hunting Properties' />
                <p>Currently we have 5 different properties totaling over 3K+ acres of huntalbe land all within 15 min
                    of each other in Edgefield and Saluda Counties. Both of these counties are located in game <a
                        href="https://www.dnr.sc.gov/hunting/zones/zone2.html" target="_blank" rel="noreferrer">Zone 2 of the State</a> which consists of all properties south of the main line of the Norfolk Southern Railroad for Oconee, Pickens and Greenville counties.<br></br>
                </p>
                <p><strong>Click on the cards below to learn more about each property along with driving directions.</strong> </p>
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;