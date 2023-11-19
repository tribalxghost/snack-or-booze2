import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ snk, drinks }) {
  let snack
  const { id, snacks } = useParams();
  console.log(`${id} ${snacks}`)
  console.log(snk)
  console.log(drinks)
  if(snacks === "snacks"){
    snack =  snk.find(snack => snack.id === id);
  } else{
    snack =  drinks.find(snack => snack.id === id);
  }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
