import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';

function Hero() {
    return(
        <>
        <div className="background"></div>
        <div className="background-texture"></div>
        <div className="main-container">
            <Container className="container-top">
                <Row>
                    <Col xs={12} md={7} lg={7} xl={{ span: 6, offset: 1 }} xxl={{ span: 6, offset: 1 }}>
                        <div className="content-outer">
                            <div className="content-inner">
                                <div className="content-headers">
                                    <h1>Let<span className="apostrophe">’</span>s talk</h1>
                                    <p>Wave is a voice-based messaging app for conversations you care about.</p>
                                </div>
                                <a className="appstore-download" href=""><img src="assets/appstore-button.svg"></img></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 5, offset: 0}} lg={4} xl={4} xxl={4}>
                        <div className="image-padder">
                            <img className="hero-image" src="/assets/iphone-ui.png"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default Hero