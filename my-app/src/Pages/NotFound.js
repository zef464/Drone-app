import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Row"
import { Link } from "react-router-dom";


export default function NotFound() {
    return(
        <Container>
            <Row xs={6} md={3}>
                <Col></Col>
                <Col><h2>Эта страница недоступна! Перейдите на <Link to='/'>Главную</Link></h2></Col>
                <Col></Col>
            </Row>
        </Container>
    
            
    );
}