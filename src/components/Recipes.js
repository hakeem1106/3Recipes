import React, { Component } from 'react';
import '../containers/recipe.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
                            <form>
                            <textarea id="recipieSteps" className="form-control" placeholder="Steps"></textarea>
                            <textarea id="recipieNotes" className="form-control" placeholder="Notes"></textarea>
                            </form>
                        </div>
        })

    }

    render(){
        return(
            <div id="cookInput">
                <form action="/" method="post" onSubmit={this.getNext}>
                    <div className="form-group">
                    <input className="form-control" type="text" name="recipeName" placeholder="Recipe Name" required={true}></input>
                    <input className="form-control" type="text" name="chef" onChange={this.chefName}  placeholder="Chef" required={true}></input>
                    <input className="form-control" type="text" name="ingredients" placeholder="Ingredients" required={true}></input>
                    <input className="form-control" type="number" min="0" name="prepTime" placeholder="Prep Time" required={true}></input>
                    <textarea className="form-control" placeholder={`Why do you love this recipe <Chef name will enter here when typed>${this.state.chef}?`}></textarea>
                    <div id="cookSteps">
                        {this.state.steps}
                    </div>
                    <div>
                        <p>Click next after entering why to expose steps box</p>
                        <button className="btn btn-primary" type="submit">Next</button>
                    </div>
                    </div>
                   
                </form>
            </div>
        )
    }
    
}

export default Recipes