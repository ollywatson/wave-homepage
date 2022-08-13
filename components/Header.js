import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';

function Header() {
    return(
        <div className="header-container">
            <div className="header-content">
                <Container>
                    <Row>
                        <Col xs={12} lg={12} xl={{ span: 12, offset: 0 }} xxl={{ span: 12, offset: 0 }}>
                            <img className="wave-logo" src="assets/wave-logo-white.svg"></img>
                            <Link href=""><a className="support-button">Contact support</a></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Header