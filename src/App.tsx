import React from 'react';
import './App.scss';
import FormComponent from './components/FormComponent';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <Jumbotron fluid>
              <h1>Formulário</h1>
              <p>
                Preencha o formulário ao lado e click em "cadastrar", confirme o envio dos dados validados no Alert de confirmação.
              </p>
            </Jumbotron>
          </Col>
          <Col sm={12} md={6}>
            <FormComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
