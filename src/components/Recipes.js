import React, { Component } from 'react';
import '../containers/recipe.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'


class Recipes extends Component{
    constructor(props){
        super(props)
        this.state={
            steps: [],
            chef: '',
        
            
        }
        this.getNext = this.getNext.bind(this)
        this.chef = this.chefName.bind(this)

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
                            <Form.Control id="recipieSteps" as="textarea" placeholder="Steps"></Form.Control>
                            <Form.Control id="recipieNotes" as="textarea" placeholder="Notes"></Form.Control>
                            </Form>
                        </div>
        })
        console.log("clicked")

    }

    render(){
        return( 
                <div>
                <Form action="#" method="post" >
                    <Form.Group>
                    <Form.Control type="text" name="recipeName" placeholder="Recipe Name" required={true}></Form.Control>
                    <Form.Control type="text" name="chef" onChange={this.chefName}  placeholder="Chef" required={true}></Form.Control>
                    <Form.Control type="text" name="ingredients" placeholder="Ingredients" required={true}></Form.Control>
                    <Form.Control type="number" min="0" name="prepTime" placeholder="Prep Time" required={true}></Form.Control>
                    <Form.Control as="textarea" placeholder={`Why do you love this recipe <Chef name will enter here when typed>${this.state.chef}?`}></Form.Control>
                    
                    <div id="cookSteps">
                        
                        {this.state.steps}
                    </div>
                    <div>
                        <p>Click next after entering why to expose steps box</p>
                        <Button onSubmit={this.getNext}>Next</Button>
                    </div>
                    </Form.Group>
                   
                </Form>
            </div>
        )
    }
    
}

export default Recipes