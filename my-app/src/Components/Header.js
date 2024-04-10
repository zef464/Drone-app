import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = ()  => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">Drone app</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link><Link to='/'>Главная</Link></Nav.Link>\

            <Button variant="primary" onClick={handleShow}>Компоненты</Button>

            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Компоненты</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap={2}>
                        <div className="p-2"><Link to='/Flight_controller'>Полётный контроллер</Link></div>
                        <div className="p-2"><Link to='/Raspberry_pi'>Raspberry Pi</Link></div>
                    </Stack>
    
                    
                </Offcanvas.Body>
            </Offcanvas>
        </Nav>
        </Container>
        </Navbar>
    );
}

export {Header};
