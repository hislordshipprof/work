import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function Footer() {
    return (
      <footer className="font-small   bg-info pt-4">
        <Container>
          <Row>
            <Col className="text-center py-3">
              2021 Copyright &copy; Hislordship
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer
