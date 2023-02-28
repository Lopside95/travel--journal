import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Dropwdown } from "react-bootstrap";
import { useState } from "react";
import Card from "./Cards.js";
import data from "./data.js";
import "./App.css";

const cards = data.map((item) => {
  return (
    <Card
      key={item.id}
      place={item.place}
      country={item.country}
      mapsUrl={item.mapsUrl}
      description={item.description}
      startDate={item.startDate}
      endDate={item.endDate}
      img={item.img}
    />
  );
});

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h4 className="heading">Travel Journal</h4>
            <div>{cards}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
