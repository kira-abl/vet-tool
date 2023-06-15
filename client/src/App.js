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

const [email, setEmail] = React.useState("this");
const [user, setUser] = React.useState("no user");
console.log(email, "In app");
console.log(user, "In app");



  return (
    <div>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/upload" component={Upload} />
        <Route path="/upload1" component={Upload1} />
        <Route path="/upload2" component={Upload2} />
        <Route path="/menu" component={MainMenu} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/charts" component={Charts} />
        <Route path="/dogs" component={Dogs} />
        <Route path="/thanks" component={Thanks} />
        <Route path="/validation" render={(props)=>
                                 <Validation email={email} user={user} setEmail={setEmail} setUser={setUser}/>}
        
        
        
        />
        <Route path="/terms" component={Terms} />
      </Switch>
    </div>
  );
};
export default App;
