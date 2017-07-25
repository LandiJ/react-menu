import React, { Component } from "react";
import "../styles/App.css";
import Appetizers from "./Appetizers";
import Entrees from "./Entrees";
import Desserts from "./Desserts";
import BaseLayout from "./BaseLayout";
// Import BaseLayout, Appetizers, Entrees, Desserts

class App extends Component {
  constructor(props) {
    super(props);
    // Set initial state for appetizers, entrees, and desserts.
    this.state = {
      Appetizers: [],
      Entrees: [],
      Desserts: []
    };
  }

  // All should be set to empty arrays.

  // Lifecycle method
  // Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
  // The response should return an object with appetizers, entres, and desserts.
  // Set these to state.
  // YOUR CODE HERE>

  componentWillMount() {
    fetch("http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu")
      .then(results => {
        return results.json();
      })
      .then(data => {
        const food = data;

        this.setState({
          Appetizers: food[0].Appetizers,
          Entrees: food[0].Entrees,
          Desserts: food[0].Desserts
        });
        console.log("state", this.state.Appetizers);
        console.log(food);
      });
  }

  render() {
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (
      /*
        BaseLayout and nested components
        */
      (
        <div>
          <BaseLayout>
            <Appetizers Appetizers={this.state.Appetizers} />
            <Entrees Entrees={this.state.Entrees} />
            <Desserts Desserts={this.state.Desserts} />
          </BaseLayout>
        </div>
      )
    );
  }
}

export default App;
