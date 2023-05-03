import React, {useState, useEffect} from "react";
// reactstrap components
import {
  Button,
  Container, 
  Row,
  Col
} from "reactstrap";
import ReactMarkdown from 'react-markdown';
import Countdown from 'react-countdown';
import { useLocation, useNavigate } from "react-router-dom";
import TopNavbar from "../components/Navbars/TopNavbar.js";
import { collection, doc, getDoc, getDocs, getCountFromServer, query, where, limit} from "firebase/firestore";
import {db} from "./Firebase.js";

function ProblemStatement() {

    // Get the topic from navigate
    const { state } = useLocation();
    const topic = state ? state.topic : "None"; //state.topic;
    const isInProgress = state.isInProgress;
    var session = {};
    if(isInProgress){
        session = state.session;
    }
    // console.log("got the topic!", topic);

    // get collection of all practice problems
    const topicRef = collection(db, "practice");
    const navigate = useNavigate();

    // global states 
    const [count, setCount] = useState(0);
    const [problem, setProblem] = useState({
        challenge: "", description:"", title:"", topic:"", emoji:"", images:[],
        problemID: ""
    });
    const [example, setExample] = useState("");
    
    // console.log("topic ref size: ", topicRef.get().size);
    useEffect(()=>{
        console.log("effect is triggered")
        // const c = collection(db, topic);
        const q = query(topicRef, where("topic", "==", topic));
        const querySnapshot = getDocs(q).then(snap => {
            console.log("does this query do anything: ", snap.empty);
            console.log("TEST THIS size: ", snap.size);
            setCount(snap.size);
        }).catch(err=>{
            console.log('Error getting practice problem', err);
        });;
            
    }, [topic, topicRef]);
    
    // fetch and update the problem once count is fetched
    useEffect(()=>{
        const size = count; // will return the collection size
        const randID = 1 + Math.floor(Math.random() * size); // in range [1, size]
        console.log("random ID is: ", randID);

        // query for problem with random ID
        const q = query(topicRef, where("topic", "==", topic), where("id", "==", randID), limit(1));

        // fetching query
        const querySnapshot = getDocs(q).then(snap => {
            snap.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                setProblem({
                    challenge: doc.data().challenge.replaceAll("\\n","\n"),
                    description: doc.data().description.replaceAll("\\n","\n"),
                    title: doc.data().title,
                    topic: doc.data().topic,
                    emoji: doc.data().emoji,
                    images: doc.data().images,
                    problemID: doc.id,
                    sentencePrompt: doc.data().sentencePrompt,
                    link: doc.data().link,
                    exampleCode: doc.data().exampleCode
                });
            });
            console.log("problem is updated to ", problem)
        }).catch(err=>{
            console.log('Error getting practice problem', err);
        });;

        console.log("does images exist?", problem.images, !problem.images);

    }, [count]);

    // Display loading screen if problem not fetched yet
    if(!state){
        return(<Container className="d-flex justify-content-center align-items-center">
        <div>Error fetching practice problem</div>
        </Container>
    )}
    else if(!problem){
        return (<Container className="d-flex justify-content-center align-items-center">
            <div>Loading problem...</div>
        </Container>
    )} else
  return (
    <>
    <div className="problem-statement-body">
      <TopNavbar></TopNavbar>
      <Container>
        <Row className="d-flex justify-content-between">
            <Col className="problem-statement-div" lg="6">
                <div className="d-flex flex-column justify-content-between align-items-center p-5 h-100">
                <div>
                <h2 className="subheading"><span> Design Brief </span></h2>
                <div>
                <div className="emoji-frame"><img src={problem.emoji} className="header-emoji"
                    alt="relevant emoji" ></img></div> <h2 className="prompt-text"> {problem.sentencePrompt} </h2>
                </div>
                {/* <h1>{problem.title}</h1> */}
                {/* <ReactMarkdown>{problem.description}</ReactMarkdown> */}
                {!problem.images ? <></> : 
                
                <Row className="mt-5">
                    <Col>
                    <img className="sample-img" src={problem.images[0]} alt="img1" ></img>
                    </Col>
                    <Col><img className="sample-img" src={problem.images[1]} alt="img2" ></img></Col>
                    <Col><img className="sample-img" src={problem.images[2]} alt="img3" ></img></Col>
                    
                </Row>
                }
                </div>
                {isInProgress?
                <></>
                :
                // Display buttons if no session started
                <Button className="button-placement" onClick={()=>navigate("/new-session", {state: {problem: problem}})}>Start private session</Button>
                }
                </div>
            </Col>
            <Col className="right-div" lg="5">
                {isInProgress?
                <div className="fs-2 mb-3 countdown-div"><Countdown date={Date.now() + session.duration*60*1000}></Countdown>
                <br></br>
                <a className="fs-6 text-dark" href={problem.link}>Link to Repl.it</a>
                </div>
                :
                // Display buttons if no session started
                <></>
                }
                
                <div className="req-div">
                <h4 className="fw-bold">Challenge Requirements</h4>
                <ReactMarkdown>{problem.challenge}</ReactMarkdown>
                </div>

                <div>
                <h4 className="body-text">Would you like to see a code example?</h4>
                
                <Button className="text-button" onClick={()=>{setExample(problem.exampleCode)}}>Yes</Button><Button onClick={()=>{ setExample("")}} className="text-button">No</Button>
                <div className="code-example">{example}</div>

                </div>

                
                
            </Col>
        </Row>
      </Container>
      </div>
    </>
    )
  }

  export default ProblemStatement;