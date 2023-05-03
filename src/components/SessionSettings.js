import React, {useState, useEffect} from "react";
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
} from "reactstrap";
import {Form, InputGroup, Button as RBButton} from "react-bootstrap";
import { auth, db } from "./Firebase.js";
import { doc, setDoc, Timestamp } from "firebase/firestore"; 
import { useNavigate, useLocation } from "react-router-dom";
import TopNavbar from "./Navbars/TopNavbar.js";

function SessionSettings() {
  // Get the problem from previous page
  const navigate = useNavigate();
  const { state } = useLocation();
  const problem = state.problem; //state.topic;

  // set state for session
  const [session, setSession] = useState({duration: 0});
  const [isSending, setIsSending] = useState(false);
  console.log("current user: ", auth.currentUser);

  // effect for writing to database
  useEffect(()=>{
    setDoc(doc(db, "sessions", "session-id"), {
      users:[auth.currentUser.uid],
      startedTime:Timestamp.now(),
      practiceProblem: "practice/"+problem.problemID,
      duration: session.duration
    }).catch(err=>{
      console.log("Error writing session to db", err);
    });
    setIsSending(false);
  }, [isSending]);
  return (
    <>
      <TopNavbar></TopNavbar>
      <Container>
      <h6>{"Web Development > " + problem.topic + " > " + problem.title}</h6>
      <Row className="d-flex flex-column justify-content-center align-items-center w-auto">
      <Form.Label>Session Length</Form.Label>
        <Row className="d-flex flex-nowrap flex-row justify-content-center">
        <p className="w-auto">0</p>
        <Form.Range defaultValue={0} className="mw-0 w-50" min={0} max={120} onChange={e=>{setSession({...session, duration: e.target.value})}}/>

        <p className="w-auto">120</p>
        </Row>
        <p>{session.duration} minutes</p>

        <h6>Invite Link</h6>
        <p>Use this link to invite friends to join the session directly!</p>
        <InputGroup className="mb-3">
        <Form.Control
          defaultValue={problem.link}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <RBButton variant="outline-secondary" id="button-addon2">
          Copy Link
        </RBButton>
      </InputGroup>

      <Button onClick={()=>{
        console.log("writing to database");
        setIsSending(true);
        navigate("/practice-problem", {
          state: {
            isInProgress: true, 
            session: session,
            topic: problem.topic
          }})
      }}>Let's go!</Button>
      </Row>


      </Container>
    </>
    )
  }

  export default SessionSettings;