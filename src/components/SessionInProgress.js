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

function SessionInProgress() {
  // const navigate = useNavigate();
  // lowkey this is the same as practice problem but with a countdown and no start or shuffle button
  return (
    <>
      <TopNavbar></TopNavbar>
      <h3>Loading...</h3>
    </>
    )
  }

  export default SessionInProgress;