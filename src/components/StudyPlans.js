import React from "react";
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
  Container
} from "reactstrap";
import { auth } from "../components/Firebase.js";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/Navbars/TopNavbar.js";
import StudyPlanCard from "../components/Dashboard/StudyPlanCard.js";

function StudyPlans() {
  // const navigate = useNavigate();
  return (
    <>
      <TopNavbar></TopNavbar>
      <h3>Study Plans</h3>
      <StudyPlanCard></StudyPlanCard>
    </>
    )
  }

  export default StudyPlans;