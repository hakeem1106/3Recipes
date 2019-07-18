import React from 'react';
import '../containers/landingpage.css'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="background-container">
            <div className="landingpage-container">
                <h1>Welcome to 3Recipes</h1>
                <Button variant="success" size="lg" className="enter-button">
                    <NavLink to="/home" className="enter-link">ENTER</NavLink>
                </Button>
            </div>
        </div>
    )
}        

export default LandingPage;