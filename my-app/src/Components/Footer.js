import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to='./Pages/Contacts'>Контакты</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://forms.yandex.ru/cloud/65d92361c769f1b8fb949a10/">Обратная связь</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
}