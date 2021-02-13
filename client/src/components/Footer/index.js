import React from "react";
import {Container, Row, Col} from "react-bootstrap";
 import "./style.css";


function Footer() {
  return (
<>
    <Container  id="outer_footer">
          <Row >
            {/* <Col  lg={0} md={8} sm={4} className=""/> */}
            <Col lg={12} md={4} sm={8} className="" id="inner_footer">
              <div id="texting"><span>Created By </span>NEW DIGITAL WORLD</div>
              <div id="image">
                <img src={require("../../assets/img/favicon.ico").default} alt={"juju"} /> 
                <span id="date">12/20</span>
              </div>
            </Col>
          </Row>
        </Container>
      </>
  );
}

export default Footer;
