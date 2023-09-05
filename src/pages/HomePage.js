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
                            for. For more information and to schedule a tour of our properties, please give us a call or email
                            us.  
                         </p>
            <DisplayList />
        </Container>
    );
};

export default HomePage;
