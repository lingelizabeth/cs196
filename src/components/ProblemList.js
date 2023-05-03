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

function ProblemList() {
  // const navigate = useNavigate();
  return (
    <>
      <TopNavbar></TopNavbar>
      <h3>All Problems</h3>
    </>
    )
  }

  export default ProblemList;