import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound"
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([])


  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);




  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snk={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/:snacks/items">
              <Menu snk={snacks} drinks={drinks} title="Snacks" />
            </Route>
            <Route path="/:snacks/:id">
              <Snack snk={snacks} drinks={drinks} cantFind="/snacks" />
            </Route>
            <Route exact path="/notfound">
              <NotFound />
            </Route>
            <Redirect to="/notfound" />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
