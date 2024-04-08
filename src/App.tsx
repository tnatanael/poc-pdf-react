import React, { useRef } from 'react';
import './App.css';
import { Badge, Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import { BsClipboard2 } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { PiHouseSimple } from "react-icons/pi";

function App() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App" ref={componentRef}>
      <Row className='custom-bg-dark'>
        <Col className='d-flex top-col-1'>
          <Card className='top-card'>
            <Card.Body>
              <Button className='float-end btn-with-border' variant="light">00/00/0000</Button>
              <br></br>
              <small>Aqui está a </small>
              <h2>
                RECOMENDAÇÃO,
              </h2>
              <small>personalizada para as suas necessidades!</small>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex top-col-2'>
          <Card className='top-card'>
            <Card.Body>
              <Button className='custom-item-title' variant='light'>
                <BsClipboard2 size={"1.2em"}/>&nbsp;
                Dados do Agricultor
              </Button>
              <Row className='w-auto normal-text'>
                <Col>
                  <p><span className='black'>Nome:</span> João José da Silva</p>
                  <p><span className='black'>CPF:</span> 000.000.000-00</p>
                  <p><span className='black'>Telefone:</span> (00) 00000-0000</p>
                  <p><span className='black'>E-mail:</span>  joaosilva@gmail.com</p>
                </Col>
                <Col>
                  <p><span className='black'>Endereço:</span> Rua Feliz, nº 0</p>
                  <p><span className='black'>Cidade:</span> Serra Dourada</p>
                  <p><span className='black'>UF:</span> Minas Gerais</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='custom-bg-light'>
        <Col className='body-col'>
          <Card className='body-card'>
            <Card.Body>
              <Row className='w-auto body-row-inner'>
                <Col>
                  <Button className='custom-item-title' variant='light'>
                    <BsClipboard2 size={"1.2em"}/>&nbsp;
                    Dados da Fazenda
                  </Button>
                  <Row className='w-auto normal-text'>
                    <Col md={7} className='body-col-inner-1'>
                      <p><span className='black'>Nome da Fazenda:</span> Rancho da Soja</p>
                      <p><span className='black'>Cidade:</span> Serra Dourada</p>
                      <p><span className='black'>UF:</span> Minas Gerais</p>
                      <p><span className='black'>Área Total:</span>  700.000 m²</p>
                    </Col>
                    <Col md={5} className='body-col-inner-2'>
                      <p><Form.Control type="text" placeholder="Latitude" disabled /></p>
                      <p><Form.Control type="text" placeholder="Longitude" disabled /></p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Button className='custom-item-title' variant='light'>
                    <BsClipboard2 size={"1.2em"}/>&nbsp;
                    Dados do Lote
                  </Button>
                  <Row className='w-auto normal-text'>
                    <Col md={7} className='body-col-inner-1'>
                      <p><span className='black'>Nome do Lote:</span> Lobo Guará</p>
                      <p><span className='black'>Área do Lote:</span> 350.000 m²</p>
                    </Col>
                    <Col md={5} className='body-col-inner-2'>
                      <p><Form.Control type="text" placeholder="Latitude" disabled /></p>
                      <p><Form.Control type="text" placeholder="Longitude" disabled /></p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className='body-card'>
            <Card.Body>
              <Row className='d-flex align-items-center w-auto body-row-inner'>
                <Col md={1} className='pR-0'>  
                    <FaStar size={"2em"} />
                </Col>
                <Col md={2} className='p-0'>
                  <h5>
                    Variedade Recomendada
                  </h5>
                </Col>
                <Col md={1} className='p-0'>
                  <Badge pill bg="secondary">000000</Badge>
                </Col>
                <Col md={2} className='mL-15 bdL-1'>
                  <Row className='d-flex align-items-center w-auto normal-text p-0'>
                    <Col className='p-0 text-center'>
                      <h5>Info 1</h5>
                    </Col>
                    <Col className='p-0'>
                      <small>Informação importante 1</small>
                    </Col>
                  </Row>
                </Col>
                <Col md={2} className='mL-15 bdL-1'>
                  <Row className='d-flex align-items-center w-auto normal-text p-0'>
                    <Col className='p-0 text-center'>
                      <h5>Info 2</h5>
                    </Col>
                    <Col className='p-0'>
                      <small>Informação importante 2</small>
                    </Col>
                  </Row>
                </Col>
                <Col md={2} className='mL-15 bdL-1'>
                  <Row className='d-flex align-items-center w-auto normal-text p-0'>
                    <Col className='p-0 text-center'>
                      <h5>Info 3</h5>
                    </Col>
                    <Col className='p-0'>
                      <small>Informação importante 3</small>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className='body-card-div-4'>
            <Card.Body className='text-center'>
              <PiHouseSimple /> Parâmetro 1
              <h4>000</h4>
            </Card.Body>
          </Card>
          <Card className='body-card-div-4'>
            <Card.Body className='text-center'>
              <PiHouseSimple /> Parâmetro 2
              <h4>000</h4>
            </Card.Body>
          </Card>
          <Card className='body-card-div-4'>
            <Card.Body className='text-center'>
              <PiHouseSimple /> Parâmetro 3
              <h4>000</h4>
            </Card.Body>
          </Card>
          <Card className='body-card-div-4'>
            <Card.Body className='text-center'>
              <PiHouseSimple /> Parâmetro 4
              <h4>000</h4>
            </Card.Body>
          </Card>
          <Card className='body-card-div-2'>
            <Card.Body className='text-center'>
              Gráfico 1
            </Card.Body>
          </Card>
          <Card className='body-card-div-2'>
            <Card.Body className='text-center'>
              Gráfico 2
            </Card.Body>
          </Card>
          <Card className='body-card'>
            <Card.Body>
              <Row className='d-flex align-items-center w-auto body-row-inner normal-text'>
                <Col md={4} className=''>  
                  <span className='black'>
                    <h5>Produtividade esperada</h5><br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </span>
                </Col>
                <Col md={2} className=''>
                  Grafico 1
                </Col>
                <Col md={4} className=''>
                  <span className='black'>
                    <h5>Economia esperada</h5><br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </span>
                </Col>
                <Col md={2} className=''>
                  Grafico 2
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='custom-bg-dark'>
        <Col className='d-flex top-col-1'>
          <Card className='top-card'>
            <Card.Body>
              <Button className='float-end btn-with-border' variant="light">00/00/0000</Button>
              <br></br>
              <small>Aqui está a </small>
              <h2>
                RECOMENDAÇÃO,
              </h2>
              <small>personalizada para as suas necessidades!</small>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex top-col-2'>
          <Card className='top-card'>
            <Card.Body>
              <Button className='custom-item-title' variant='light'>
                <BsClipboard2 size={"1.2em"}/>&nbsp;
                Dados do Agricultor
              </Button>
              <Row className='w-auto normal-text'>
                <Col>
                  <p><span className='black'>Nome:</span> João José da Silva</p>
                  <p><span className='black'>CPF:</span> 000.000.000-00</p>
                  <p><span className='black'>Telefone:</span> (00) 00000-0000</p>
                  <p><span className='black'>E-mail:</span>  joaosilva@gmail.com</p>
                </Col>
                <Col>
                  <p><span className='black'>Endereço:</span> Rua Feliz, nº 0</p>
                  <p><span className='black'>Cidade:</span> Serra Dourada</p>
                  <p><span className='black'>UF:</span> Minas Gerais</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
}

export default App;
