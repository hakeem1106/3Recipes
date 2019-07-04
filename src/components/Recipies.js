import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
class Recipies extends React.Component{
    constructor(props){
        super(props)
        this.state={
            steps: [],
            chef: ''
            
        }
        this.getNext = this.getNext.bind(this)
        this.chef = this.chefName.bind(this)

    }

    chefName =(event)=>{
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
                            <textarea className="form-control" placeholder="Steps"></textarea>
                            </form>
                        </div>
        })

    }

    render(){
        return(
            <div id="cookInput">
                <form action="/" method="post" onSubmit={this.getNext}>
                    <div className="form-group">
                    <input className="form-control" type="text" name="recipieName" placeholder="Recipie Name"></input>
                    <input className="form-control" type="text" name="chef" onChange={this.chefName}  placeholder="Chef"></input>
                    <input className="form-control"type="text" name="ingredients" placeholder="Ingredients"></input>
                    <input className="form-control"type="number" name="prepTime" placeholder="Prep Time"></input>
                    <textarea className="form-control" placeholder={`Why do you love this recipie <Chef name will enter here when typed>${this.state.chef}?`}></textarea>
                    <div id="cookSteps">
                        {this.state.steps}
                    </div>
                    <button className="btn btn-primary" type="submit">Next</button>
                    Click next after entering why to expose steps box
                    
                    </div>
                   
                </form>
            </div>
        )
    }
    
}



export default Recipies