/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button,
  Container,
  NavLink
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "../variables/charts.js";
import { auth } from "../components/Firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/Navbars/TopNavbar.js";
import StudyPlanCard from "../components/Dashboard/StudyPlanCard.js";
import LiveSessionCard from "../components/Dashboard/LiveSessionCard.js";
import LobbyChat from "../components/Dashboard/LobbyChat.js";
import "../assets/css/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <TopNavbar></TopNavbar>
      <Container id="bootstrap-overrides-dash" className="h-100 content containerMargins">
        <Row>
          <Col lg="4">
          {/* Column for the Lobby Chat */}
          <LobbyChat></LobbyChat>
          </Col>
          <Col lg="4">
            {/* Column for the Live Sessions */}
            <h4 className="fw-bold">Live Sessions</h4>
            <div className="d-flex justify-content-between align-items-center">
              <Button className="action-button text-capitalize fw-normal">New live session</Button>
              <NavLink>View all (11)</NavLink>
            </div>
            
            <hr/>
            <LiveSessionCard></LiveSessionCard>
          </Col>
          <Col lg="4">
            {/* Column for the Courses / Private Sessions */}
            <h4 className="fw-bold">My Private Sessions</h4>
            <div className="d-flex justify-content-between">
              <h6 className="text-capitalize fw-bold">Web Development</h6>
              <NavLink>View all (11)</NavLink>
            </div>
            

            <hr/>
            <StudyPlanCard></StudyPlanCard>
          </Col>
        </Row>

              </Container>
    </>
  );
}

export default Dashboard;
