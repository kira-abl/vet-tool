import React, { useState, useEffect, useHistory, useLayoutEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MainMenu from "./Menu";
import Dashboard from "./Components/Dashboard/Dashboard";
import Upload from "./Components/Upload/Upload";
import Upload1 from "./Components/Upload1/Upload1";
import Upload2 from "./Components/Upload2/Upload2";
import Welcome from "./Components/Welcome/Welcome";
import Charts from "./Components/Charts/Charts";
import Dogs from "./Components/Dogs/Dogs";
import Thanks from "./Components/Thanks/Thanks";
import Validation from "./Components/Validation/Validation";
import Terms from "./Components/Terms/Terms";
import ScrollToTop from "./Components/ScrollToTop";




const App = (props) => {

//   useEffect(() => {
//     setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 400);
//     console.log("Render!")
//   }, []);

// useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  
  // const observer = new PerformanceObserver((list) => {
  //   list.getEntries().forEach((entry) => {
  //     if (entry.type === "reload") {
  //       window.location.href = "/"
  //     }
  //   });
  // });
  
  // observer.observe({ type: "navigation", buffered: true });
  
 
  

const [answers, setAnswers] = React.useState({
  email:'',
  image1:'',
  image1Name: '',
  age:'',
  weight:'',
  sex:'',
  spayed:'',
  breed:'Breed',
  
}

);

const [redirect, setRedirect] = React.useState(
  false);




console.log("Answers in App Component", answers);
console.log("Redirect in App Component", redirect);
  

const addAnswer = (contactInfo) => {
  setAnswers([...answers, contactInfo]);
};

const defaultRender = () => {
  return <Redirect to="/"/>;
};

const renderRootPath = () => (
  <>
    {/* <Route path="/" render={defaultRender} /> */}
    <Route
      exact
      path="/"
      component={Welcome}
    />
    <Route
      exact
      path="/thanks"
      render={(props)=>
        <Thanks answers={answers} setAnswers={setAnswers} redirect={redirect} setRedirect={setRedirect}/>}
    />
    <Route
      exact
      path="/upload"
      render={(props)=>
        <Upload answers={answers} setAnswers={setAnswers}/>}
    />
    <Route
      exact
      path="/charts"
      render={(props)=>
        <Charts answers={answers} setAnswers={setAnswers}/>}
    />
    <Route
      exact
      path="/dogs"
      render={(props)=>
        <Dogs answers={answers} setAnswers={setAnswers} redirect={redirect} setRedirect={setRedirect}/>}
    />
    <Route
      exact
      path="/validation"
      render={(props)=>
        <Validation answers={answers} setAnswers={setAnswers}/>}
    />
<Route
      exact
      path="/dashboard"
      render={(props)=>
        <Dashboard answers={answers} setAnswers={setAnswers} redirect={redirect} setRedirect={setRedirect}/>}
    />

    <Route exact path="/terms" component={Terms} />
    

  </>
);



  return (
    <div>
      <ScrollToTop>
      <Switch>
      <Route path="/" render={renderRootPath} />
      </Switch>
      </ScrollToTop>
    </div>
  );
};
export default App;
