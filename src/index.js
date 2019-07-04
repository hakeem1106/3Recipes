import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipies from './components/Recipies'
import '../src/style.css'


export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
    }
}

    render(){
        return(
            <div id="home">
                <Recipies />
                
            </div>
        )
    }
}


ReactDOM.render(<Home />, document.getElementById('root'))