import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
export default function FormComponent() {

  const schema = Yup.object().shape({
    name: Yup.string().matches(/^([^0-9]*)$/, "Não é permitido usar números no nome").required('Campo Obrigatório!'),
    address: Yup.string().required('Campo Obrigatório!'),
    phone: Yup.string().matches(/^\(?([0-9]{2,3})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/, "Telefone invalido").required('Campo Obrigatório!'),
    email: Yup.string().email('E-mail invalido!').required('Campo Obrigatório!'),
    birthday: Yup.date().min('01/01/1890', "Data de nascimento muito antiga pra ser verdadeira").max(Date(), 'Sua data de nascimento não pode estar no futuro.').required('Campo Obrigatório!'),
  })

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          setTimeout(() => {
            alert("Essa seria a estrutura de dados enviada para o end point do Back-End \n\n" + JSON.stringify(values, null, 2));
          }, 1000);
        }}
        initialValues={{
          name: '',
          address: '',
          phone: '',
          email: '',
          birthday: '',
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (

          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Allan David"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.name && !errors.name}
                isInvalid={!!errors.name} />

              <Form.Control.Feedback style={{ top: 'auto' }} type="invalid" tooltip>
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Endereço:</Form.Label>
              <Form.Control
                type="address"
                name="address"
                placeholder="Endereço"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.address} />
              <Form.Control.Feedback style={{ top: 'auto' }} type="invalid" tooltip>
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Telefone:</Form.Label>
              <Form.Control
                type="phone"
                name="phone"
                placeholder="11 962107330"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.phone} />
              <Form.Control.Feedback style={{ top: 'auto' }} type="invalid" tooltip>
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="examplo@mail.com.br"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.email} />
              <Form.Control.Feedback style={{ top: 'auto' }} type="invalid" tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBirthday">
              <Form.Label>Data de Nascimento:</Form.Label>
              <Form.Control
                type="date"
                name="birthday"
                placeholder="09/09/1995"
                value={values.birthday}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.birthday} />
              <Form.Control.Feedback style={{ top: 'auto' }} type="invalid" tooltip>
                {errors.birthday}
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="justify-content-sm-center">
              <Col md="6"><Button variant="secondary" type="submit">Cadastrar</Button>
              </Col>
            </Row>

          </Form>
        )}
      </Formik>





    </>
  );
}