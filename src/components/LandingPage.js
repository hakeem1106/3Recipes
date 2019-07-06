import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../containers/landingpage.css'
import Introduction from './Introduction';

class LandingPage extends Component{
    constructor(props){
        super(props);
        
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div>
                    <Introduction />
                </div>
            </div>
        )
    }

}

export default LandingPage;