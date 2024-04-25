const express = require("express");
const cors = require("cors");
const app = express();
const properties = require("./properties.json");

app.use(cors());
app.use(express.json());

// Get a single property, example request URL: /properties/1
app.get("/properties/:id", (request, response) => {
  const { id } = request.params;
  const property = properties.find((property) => property.id === Number(id));

  if (property === undefined) {
    return response.status(404).send({ error: "Property not found" });
  }

  return response.status(200).send(property);
});

// FIXME: Create an endpoint that returns all the properties
app.get("/properties", (request, response) => {
  return response.status(200).send(properties);
});

module.exports = app;
