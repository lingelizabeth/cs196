import React, {useState, useEffect} from "react";
import {Container, Row, Col, Button, Input, Label, FormGroup} from "reactstrap";
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { getFirestore,query,getDocs,collection,where, addDoc} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {auth, db} from "./Firebase"
import TopNavbar from "./Navbars/TopNavbar";

import "../assets/css/login.css";


function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/dashboard");
      }, [user, loading]);

    // Log in with email and password
    const logInWithEmailAndPassword = async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      }; 

    // Login with Google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
        });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
    };

    // Password reset email
    const sendPasswordReset = async (email) => {
        try {
          await sendPasswordResetEmail(auth, email);
          alert("Password reset link sent!");
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };
      

      
      const logout = () => {
        signOut(auth);
      };
      

    return (
        <>
        <TopNavbar></TopNavbar>
        <Container fluid className="h-100 d-flex p-5">
            <Row className="w-100 justify-content-center align-items-center text-center">
            <h4 className="align-self-left fw-bold">Sign in</h4>
            <p className="mb-5">Enter your username and password to sign in.</p>
            <FormGroup row={true} className="mb-4 p-10">
              <Col sm={2} className="align-items-end"> <Label >
                Email address:</Label></Col>
           
                <Col sm={10} className="">
                <Input className="mx-auto login__textBox" type="text" onChange={(e) => setEmail(e.target.value)}/>
                </Col>
              </FormGroup>
            <FormGroup row={true} className="mb-4 p-10">
            <Col sm={2} className="align-items-end"> <Label >
                Password:</Label></Col>
                <Col sm={10} className="">
                <Input className="mx-auto login__textBox" type="password" onChange={(e) => setPassword(e.target.value)}/>
                </Col>
            </FormGroup>
            <div>
                <button type="submit" className="login__btn" onClick={() => logInWithEmailAndPassword(email, password)}>Submit</button>
            </div>
            <Row className="justify-content-center">
                <button className="w-50 login__btn login__google" onClick={signInWithGoogle}>
            Login with Google
            </button>
            <div>
            <Link to="/reset">Forgot Password?</Link> | Don't have an account? <Link to="/register">Register</Link> now.
            </div>
                
            </Row>

            </Row>

        </Container>
        </>
    )
}

export default Login;
