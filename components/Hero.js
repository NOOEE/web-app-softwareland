import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">REGALOS Y NOVEDADES MABEL</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Tienda de venta de ropa y articulos de temporada <span className="text-primary font-weight-medium">Noé Martínez Avalos</span></h1>
              <p className="text-muted mb-4 pb-2">Regalos y Novedades Mabel comienza en el año 2020 como una papeleria en la ciudad de Morelia y con venta de diferentes accesorios no solo de papeleria, somos comerciantes Morelianos y profecionistas en diferentes areas</p>
              <a href="#" className="btn btn-warning">
                Tienda en Linea <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="cache/images/Mabel.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;