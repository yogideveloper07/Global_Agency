import React from 'react';
import Logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';

class Home extends React.Component{
    constructor(){
        super();
            this.state={

            }
    }

render(){
    return (
        <>
        <footer class="footer">
            <div class="container">
                <div class="footer-menu grid-content">
                    <div class="desc-footer">
                        <img src={Logo} alt="" width="86"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum tempore distinctio nesciunt expedita architecto perferendis incidunt enim eos asperiores dicta error consequatur, obcaecati ad? </p>
                        <div class="f-icons">
                            <span><i class="fab fa-facebook" aria-hidden="true"></i></span>
                            <span><i class="fab fa-twitter" aria-hidden="true"></i></span>
                            <span><i class="fab fa-linkedin" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div class="footer-list">
                        <h2>Quick menu</h2>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div class="footer-list">
                        <h2>Quick Response</h2>
                        <ul class="input-search">
                            <li><input type="text"/><a href="#" class="send">Send</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-end">
                    <p>Copyright © 2024 . All Rights Reserved</p>
                </div>
            </div>
	    </footer>
        </> 
    );
}
}

export default Home;
