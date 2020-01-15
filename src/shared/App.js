import React, { useState, useCallback } from "react";
import { Route } from "react-router-dom";
import { Login, Admin, Info, Counter, Average } from "../pages";
import TodoTemplate from "../components/TodoTemplate";
import NewsList from "../components/NewsList";
import Categories from "../components/Categories";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback(category => setCategory(category), []);
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
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
