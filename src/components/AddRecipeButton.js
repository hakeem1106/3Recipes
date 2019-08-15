import React from "react";
import { NavLink } from "react-router-dom";
import "../containers/recipecard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const AddRecipeButton = () => {
  return (
    <div>
      <Button>
        <NavLink
          to="/addRecipe"
          className="add-recipe-link"
          style={{ color: "whitesmoke", textDecoration: "none" }}
        >
          Add Recipe
        </NavLink>
      </Button>
    </div>
  );
};

export default AddRecipeButton;
