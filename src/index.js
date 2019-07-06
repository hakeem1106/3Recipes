import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Recipes from './components/Recipes'
import Navigation from './components/Navigation'
// import LandingPage from './components/LandingPage'
import './containers/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            
    }
}

    render(){
        return(
            <div>
            <Navigation />
            <div class="d-flex justify-content-center">
                <div id="home">
                    <Recipes />
                </div>
            </div>   
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))