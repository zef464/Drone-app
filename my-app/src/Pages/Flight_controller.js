import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import schema_esp32_FC from '../img/schema_esp32_FC.jpg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Flight_Controller() {
    return(
        <>
            <Container>
                <h1>
                    Полётеный контроллер <Badge bg="secondary">ESP32</Badge>
                </h1>
                <Container>
                    <Row>
                        <Col><h3><Badge pill bg="primary"><strong>Полётный контроллер</strong></Badge> - электронное устройство, управляющее полётом летательного аппарата. Термин применяется к беспилотным летательным аппаратам, в том числе и авиамоделям. Применительно к пилотируемым летательным аппаратам обычно употребляется термин автопилот. Чаще всего термин полётный контроллер относится к управляющим устройствам мультикоптеров. </h3></Col>
                    </Row>
                </Container>
                <Card>
                    <Card.Header><h2>Схема подключения устройств к ESP32 WROOM 32</h2></Card.Header>
                    <Card.Img variant="top" src={schema_esp32_FC} />
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Компоненты:{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Мозг – ESP32 WROOM 32D
                        </footer>
                        <footer className="blockquote-footer">
                            3-ёx осевой датчик – mpu6050
                        </footer>
                        <footer className="blockquote-footer">
                            GPS – GY-GPS6MV2
                        </footer>
                        <footer className="blockquote-footer">
                            Радиомодуль - nrf24l01 + адаптер питания
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Container>  
        </>
    );
}