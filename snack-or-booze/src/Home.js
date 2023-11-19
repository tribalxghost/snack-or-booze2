import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snk, drinks }) {
  let snackAmount = snk.length
  let drinkAmount = drinks.length
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <h2>Amount of Snacks: {snackAmount}</h2>
          <h2>Amount of Drinks: {drinkAmount}</h2>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
