import { Col, Row, Container, Card, CardBody, } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PartnersList from '../features/parters/PartnersList';

const MemberMembershipPage = () => {

    return (
        <Container>
            <SubHeader current='Member/Membership' />
                <Col sm='11'>
                     <p>
                        This is a resource page for both existing members, and those looking for membership to Buck and Beard. Here you will find the following documents, Our Rules and Regulations, Member/Guest Waivers and other pertinent information.
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
                        <p>
                             All new perspective members, we encourage you to read our "Rules and Regulations" to best understand if we are the club you are looking
                            for. For more information and to schedule a tour of our properties,<a  role='button'
                            className='btn btn-link' href="mailto:buckandbeard@gmail.com" alt="Button to create an e-mail to Buck and Beard"> <i className='fa fa-envelope-o' /> e-mail</a>us and we will get back to you.
                        </p>
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
        </Container>
    );
};

export default MemberMembershipPage;