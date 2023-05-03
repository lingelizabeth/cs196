import React, { useEffect } from "react";
import {Container, Row, Col, Button} from "reactstrap";
import {useNavigate} from "react-router-dom";
import Login from "./Login";
import FillData from "./FillData";

function Homepage(){
    const navigate = useNavigate()
    
    // call this function when you want to open login page
    const navigateEffect = () => {
        // setUser(data);
        navigate("/login");
    };
    return (
        <Container fluid className="vh-100 d-flex">
        <Row className="align-items-center p-2">
            <Col></Col>
            <Col lg={8} className="h-100 flex-column align-items-center">
                <Row className="">
                <p className="h2 text-center p-1 m-b-1">            
                Welcome! Join a community of women developing practical computing skills by building together!
                </p>
                </Row>
                <Row className="justify-content-center">            
                    <Button className="w-auto" onClick={navigateEffect}>Login / Register</Button>
                    <Button onClick={FillData}> Fill Data! </Button>
                </Row>

                
            </Col>
            <Col></Col>
            
        </Row>
        </Container>
    )
}

export default Homepage