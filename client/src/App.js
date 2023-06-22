import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MainMenu from "./Menu";
import Dashboard from "./Dashboard";
import Upload from "./Components/Upload/Upload";
import Upload1 from "./Components/Upload1/Upload1";
import Upload2 from "./Components/Upload2/Upload2";
import Welcome from "./Components/Welcome/Welcome";
import Charts from "./Components/Charts/Charts";
import Dogs from "./Components/Dogs/Dogs";
import Thanks from "./Components/Thanks/Thanks";
import Validation from "./Components/Validation/Validation";
import Terms from "./Components/Terms/Terms";



const App = (props) => {

const [answers, setAnswers] = React.useState({
  email:'',
  vet:'',
  image1:'',
  image2:'',
  image3:'',
  bcs:'',
  age:'',
  weight:'',
  sex:'',
  spayed:'',
  breed:'',
}

);
const [user, setUser] = React.useState("no user");
console.log(answers, "Answers in component App");
console.log(user, "In app");

const addAnswer = (contactInfo) => {
  setAnswers([...answers, contactInfo]);
};



  return (
    <div>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/upload" render={(props)=>
                                 <Upload answers={answers} setAnswers={setAnswers}/>}/>
        <Route path="/upload1" render={(props)=>
                                 <Upload1 answers={answers} setAnswers={setAnswers}/>} />
        <Route path="/upload2" render={(props)=>
                                 <Upload2 answers={answers} setAnswers={setAnswers}/>} />
        <Route path="/menu" component={MainMenu} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/charts" render={(props)=>
                                 <Charts answers={answers} setAnswers={setAnswers}/>} />
        <Route path="/dogs" render={(props)=>
                                 <Dogs answers={answers} setAnswers={setAnswers}/>}  />
        <Route path="/thanks" component={Thanks} />
        <Route path="/validation" render={(props)=>
                                 <Validation answers={answers} setAnswers={setAnswers}/>}
        
        
        
        />
        <Route path="/terms" component={Terms} />
      </Switch>
    </div>
  );
};
export default App;
