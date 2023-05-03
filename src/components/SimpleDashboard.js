import React from "react";
import {Container, Row, Col, Button, Input, Label, FormGroup} from "reactstrap";
import "../assets/css/simple-dashboard.css"

function SimpleDashboard(){
    return (<Container fluid className="">
        <Row className="mx-auto center-box d-flex nowrap justify-content-around align-items-center">
            <div className="small-box">1</div>
            <div className="small-box">2</div>
            <div className="small-box">3</div>
            <div className="small-box">4</div>
            <div className="small-box">5</div>
        </Row>
    </Container>)

};

export default SimpleDashboard;
