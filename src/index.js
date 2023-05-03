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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";

import Dashboard from "./views/Dashboard";

// import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/stylesheet.scss";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./assets/css/custom-fonts.css";

import AdminLayout from "./layouts/Admin.js";
import Homepage from "./components/Homepage.js"
import Login from "./components/Login";
import Register from "./components/Register";
import StudyPlans from "./components/StudyPlans";
import ProblemList from "./components/ProblemList";
import SessionsList from "./components/SessionsList";
import SessionLoad from "./components/SessionLoad";
import ProblemStatement from "./components/ProblemStatement";
import SessionSettings from "./components/SessionSettings";
import SimpleDashboard from "./components/SimpleDashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" element={<Homepage />} />
      {/* <AdminLayout props={[]}/> ... (props) => <AdminLayout {...props} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/studyplans" element={<StudyPlans/>} />
      <Route path="/problems" element={<ProblemList/>} />
      <Route path="/sessions" element={<SessionsList/>} />
      <Route path="/session-waiting-room" element={<SessionLoad/>} />
      <Route path="/practice-problem" element={<ProblemStatement/>} />
      <Route path="/new-session" element={<SessionSettings/>}/>
    </Switch>
  </BrowserRouter>
);
