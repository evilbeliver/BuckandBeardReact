import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
             <SubHeader current='Home' />
                        <p>
                            Welcome to Buck & Beard and thank you for taking the time to check us out. We are a family-oriented
                            organization of men and women dedicated to constantly learning, improving and expanding our passion
                            for the outdoors and the opportunities to enjoy safe successful deer and turkey hunting. If you are
                            seeking a new experience, we encourage you to read on to determine if we offer what you are looking
                            for. For more information and to schedule a tour of our properties, e-mail us and we will get back to you.<a  role='button'z
                            className='btn btn-link' href="mailto:buckandbeard@gmail.com" alt="Button to create an e-mail to Buck and Beard">  <i className='fa fa-envelope-o' /> Email@buckandbeard </a>
                         </p>
            <DisplayList />
        </Container>
    );
};

export default HomePage;
