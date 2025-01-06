import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png'

class Home extends React.Component{
    constructor(){
        super();
            this.state={

            }
    }

render(){
    return (
        <>
           <header className="header">
                <div className="header-row-1">
                    <div className="container">
                        <nav className="navigation">
                            <div className="nav-logo">
                                <h3><Link to="/home" className="text-decoration-none text-dark">Logo</Link></h3>
                            </div>
                            <div className="header-menu">
                                <ul className="list-menu">
                                    <li><Link to="/home" className="active">Home</Link></li>
                                    <li><Link to="/about" className="">About</Link></li>
                                    <li><Link to="/contact" className="">Contact</Link></li>
                                </ul>	
                            </div>
                            <div className="login">
                                <ul>
                                    <li><Link to="/" className="login-link">Logout</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
	</header>
        </> 
    );
}
}

export default Home;
