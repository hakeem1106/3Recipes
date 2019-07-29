import React, { Component } from 'react'
import Recipes from '../components/Recipes'
import Navigation from '../components/Navigation'
import '../containers/newrecipe.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'

export default class NewRecipe extends Component{
    constructor(props){
        super(props)
        this.state={
            
    }
}

    render(){
        return(
            <div>
            <Navigation />
            <div className="d-flex justify-content-center">
                <Card id="home">
                    <Card.Body>
                    <Recipes />
                    </Card.Body>
                    
                </Card>
            </div>   
            </div>
        )
    }
}
