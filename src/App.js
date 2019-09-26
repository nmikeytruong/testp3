import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/editprofile" component={EditProfile} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
