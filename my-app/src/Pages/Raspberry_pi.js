import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import rpi2 from '../img/rpi2.jpg';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export default function Raspberry_pi() {
    return(
        <>
            <Container>
                <h1>
                    Raspberry Pi 
                </h1>
                <Row>
                    <Col>
                        <Stack>
                            <h3><Badge pill bg="primary"><strong>Raspberry Pi</strong></Badge> — одноплатный компьютер размером с 
                                банковскую карту, изначально разработанный
                                как бюджетная система для обучения информатике, 
                                но позже получивший более широкое применение и известность.
                                Вот я и решил использовать этот "одноплатник" в своих целях, нагрузив его приложениями для работы!
                            </h3>
                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <Image src={rpi2} rounded />              
                </Row>
            </Container>  
        </>
    );
}