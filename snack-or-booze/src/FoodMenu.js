import React from "react";
import { Link, useParams } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";





function FoodMenu({ snk, drinks }) {


  let {snacks} = useParams()
  console.log(snacks)

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
          {snacks === "snacks" ? snk.map(snack => (
            <Link to={`/snacks/${snack.id}`} key={snack.id}>
              <ListGroupItem>{snack.name}</ListGroupItem>
            </Link>
          )): drinks.map(drink => (
            <Link to={`/booze/${drink.id}`} key={drink.id}>
              <ListGroupItem>{drink.name}</ListGroupItem>
            </Link>
          ))
        
        }

          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
