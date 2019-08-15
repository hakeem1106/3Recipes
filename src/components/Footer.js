import React from 'react';
import { FaGitAlt } from 'react-icons/fa';
import '../containers/footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
            {/* other social media can be added here */}
            <h6>Leave us feedback on Github<a href="https://github.com/hakeem1106/3Recipes" target="_blank" rel="noopener noreferrer" title="3Recipes Github"><FaGitAlt size={32} color={"salmon"} /></a></h6>
                <p>&copy; 2019 3Recipes <a href="#" title="site terms">Terms</a> <a href="#" title="site privacy">Privacy</a></p>
            </div>
        </div>
    )
}

export default Footer;