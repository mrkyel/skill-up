import React from "react";
import { Route } from "react-router-dom";
import { Login, Admin, Info, Counter, Average } from "../pages";
import TodoTemplate from "../components/TodoTemplate";

function App() {
  return (
    <>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/average" component={Average} />
        <Route exact path="/todo" component={TodoTemplate} />
      </div>
    </>
  );
}

export default App;
