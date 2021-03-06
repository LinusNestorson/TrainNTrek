import React, { Component } from "react";
import Form from "../../components/calorieCounter/Form";
import Meal from "../../components/calorieCounter/Meal";
import "./CalorieView.css";
import Footer from "../../components/footer/Footer";

// Class for the View of Calorie Counter.
class CalorieView extends Component {
  state = {
    meals: [],
  };

  // Method for adding a Meal.
  addMeal = (meal) => {
    this.setState({
      meals: [meal, ...this.state.meals],
    });
  };

  // Method for deleting a Meal.
  onDelete = (id) => {
    this.setState({
      meals: this.state.meals.filter((meal) => meal.id !== id),
    });
  };
  // Render method.
  render() {
    return (
      <>
        <div className="dietContainer">
          <div className="jumbotron">
            <h2 className="calorieHeaderText">Calorie Counter</h2>
            <hr />
            <Form onsubmit={this.addMeal} />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Meal</th>
                  <th>Calories</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.meals.map((meal) => (
                  <Meal
                    key={meal.id}
                    meal={meal}
                    onDelete={() => this.onDelete(meal.id)}
                  />
                ))}
                <tr>
                  <td>Total: </td>
                  <td>
                    <span role="img">🍎</span>
                    {this.state.meals.reduce(
                      (totalCalories, meal) => totalCalories + meal.calorie,
                      0
                    )}
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default CalorieView;
