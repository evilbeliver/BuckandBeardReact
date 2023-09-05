import { Col, Row, Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import Faq from 'react-faq-component';
import React, { Component } from 'react';


const FAQpage = () => {
    return (
        <Container>
            <SubHeader current='FAQ' />
            <Row className='row-content' >
                <Col sm='11'>

                </Col>
            </Row>
        </Container>
    );
};

export default FAQpage;