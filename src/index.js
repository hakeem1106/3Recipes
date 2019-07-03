import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


export default class Home extends React.Component{
    render(){
        return(
            <div>
                works
            </div>
        )
    }
}


ReactDOM.render(<Home />, document.getElementById('root'))