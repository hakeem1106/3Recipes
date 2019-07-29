import React, { Component } from 'react';
import '../containers/recipe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormControl, FormGroup } from 'react-bootstrap';


class Recipes extends Component{
    constructor(props){
        super(props)
        this.state={
            steps: [],
            chef: ''
        }
    }

    chefName=(event)=>{
        event.preventDefault()
        this.setState({
            chef: event.target.value
        })

    }

    getNext=(event)=>{
        event.preventDefault()
        this.setState({
            steps:
                <div id="steps">
                    <Form>
                        <FormControl className="form-input-recipe" as="textarea" placeholder="Steps"></FormControl>
                        <FormControl className="form-input-recipe" as="textarea" placeholder="Notes"></FormControl>
                    </Form>
                </div>
        });
    }

    render(){
        return( 
            <div>
                <h2 className="add-recipe-header">Add New Recipe</h2>
                <Form onSubmit={this.getNext}>
                    <FormGroup role="form">
                        <FormControl className="form-input-recipe" type="text" name="recipeName" placeholder="Recipe Name" required="true"></FormControl>
                        <FormControl className="form-input-recipe" type="text" name="chef" onChange={this.chefName}  placeholder="Chef" required="true"></FormControl>
                        <FormControl className="form-input-recipe" type="text" name="ingredients" placeholder="Ingredients" required="true"></FormControl>
                        <FormControl className="form-input-recipe" type="number" min="0" name="prepTime" placeholder="Prep Time" required="true"></FormControl>
                        <FormControl className="form-input-recipe" as="textarea" placeholder={`Why do you love this recipe <Chef name will enter here when typed>${this.state.chef}?`}></FormControl>
                    
                    <div id="cookSteps">
                        {this.state.steps}
                    </div>
                    <div>
                        <h6>Details Above Are Required Before Continuing</h6>
                        <Button type="submit">Next</Button>
                    </div>
                    </FormGroup>
                </Form>
            </div>
        )
    } 
}

export default Recipes