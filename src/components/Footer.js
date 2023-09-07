import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/directory'>Properties</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/faq'>FAQ</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='https://www.facebook.com/people/Buck-and-Beard-Hunting-Club-SC/100063697293182/' alt="Buck&Beard Public Facebook Page" target="_blank" rel="noreferrer" 
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                       
                    </Col>
                    <Col sm='4' className='text-center'>
                         <h5>Contact</h5>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:buckandbeard@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> Email@buck&beard
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;