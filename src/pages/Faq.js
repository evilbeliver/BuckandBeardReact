import { Col, Row, Container, Card, CardBody, } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PartnersList from '../features/parters/PartnersList';

const FAQpage = () => {

    return (
        <Container>
            <SubHeader current='FAQ' />
            <Row className='row-content' >
                <Col sm='11'>
                    <p> At the conclusion of the 2012 deer hunting season, a group of men who had been hunting
                            together for years met to discuss a vision of forming a new hunting club.  They collectively
                            represented many years of hunting in very diverse clubs across the state and input from
                            their experiences helped set the foundation for a new club.  By the end of the meeting, it
                            was obvious that we all shared the same ideals for a FAMILY-ORIENTED hunting club and we
                            stood united to pursue our vision.  On that day in January of 2013, the BuckandBeard Hunting
                            Club became a reality and at that time, we adopted a simple, but powerful goal, where we
                            “AIM” TO RESPECT THE SPORT, THE RESOURCES AND EACH OTHER!
                    </p>
                        <p>
                            Our membership can expect, in all our undertakings, SAFETY to be at the top of our list.  In
                            all we do, before we act, we take every humanly conceivable risk out of the picture and
                            through teamwork, we get the job done.
                            We are a united group that takes great pride in our families and all participation they may
                            have in our activities.  There is nothing quite like witnessing a youngster harvesting that
                            first deer.  It is a milestone to be remembered for a lifetime and to be able to share in
                            that moment brings joy to each of us.
                        </p>
                            Members are obligated to participate in work days, which typically begin in January.  While
                            only 6 work days are required, most of our members come to as many work days as possible for
                            various reasons: to learn the land; to take advantage of the cooler days in the early
                            months; to get away from the typical, day-to-day norm;  to feel a sense of commitment to
                            their club; and FELLOWSHIP.  When we close our work days, we may be sore and exhausted, but
                            we feel good.  We have just spent quality time with friends and in the process, learned more
                            about “my hunting club”.
                        <p>
                            We currently have large tracts of hunting property of mixed terrain in Saluda and Edgefield
                            Counties of South Carolina.  Our annual membership roster is determined based on the acreage
                            of hunting property we lease, the known and projected expenses, and the maintenance of a
                            constant dues structure, while maintaining an excellent member to acre balance.  We do not
                            solicit members for the sake of paying expenses.  We seek long-term members who will commit
                            themselves to our ideals, become involved in helping us expand those ideals and get their
                            families involved.
                    </p>
                </Col>
                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody >
                            <blockquote className='blockquote'>
                                <p> “A hunt based only on trophies taken falls far short of what the ultimate goal should be.” 
                                </p>
                                <footer className='blockquote-footer'> 
                                        Fred Bear{' '}
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQpage;