import 'bootstrap/dist/css/bootstrap.min.css';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

export default function Contacts() {
    return(
        <>
            <Container>
                <Row xs={1} md={3}>
                    <Col></Col>
                    <Col xs={1}>
                        <ListGroup >
                            <ListGroup.Item><a href='https://t.me/@zefury'>Telegram</a></ListGroup.Item>
                            <ListGroup.Item><a href='mailto:vsobakar2205@gmail.com'>Email</a></ListGroup.Item>
                            <ListGroup.Item><a href='https://github.com/zef464'>GitHub</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}