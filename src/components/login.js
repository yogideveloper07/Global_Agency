import React from 'react';
import {  Link } from 'react-router-dom';
import '../assets/css/login.css';
import ImageLeft from '../assets/img/register-page-image.jpg'

class Login extends React.Component{
    constructor(props){
        super(props);
            this.state={
                name:'',
                password:'',
            }
    }
    onValueChange = (e) =>{
        this.setState({
            name: e.target.value
        });
    }
    onPassChange = (e) =>{
        this.setState({
            password : e.target.value
        });
    }
    authenticate = () => {
        if (this.state.name == "yogi" && this.state.password == "1411") {
            window.location = "/home"
        }else{
            window.location = "/login/failed"
        }
    }

render(){
    return (
        <>
        <div className='login-body'>
            <div className="register-wrapper">
                <div className="login-container">
                    <div className="left">
                        <img src={ImageLeft}/>
                    </div>
                    <div className="right">
                        <h1>Login</h1>
                        <p><a href="#">Login Your Account.</a> It Takes Less Than a Minute</p>
                        <form action="#" className="form-login">
                            <div className="form-control">
                                <label className='name-label' for='name'>User Name</label>
                                <div className='field-input'>
                                    <input className='' type='text' name='name' value={this.state.name} onChange={this.onValueChange}/> 
                                    <span><i className="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className='name-label' for='passsword'>passsword</label>
                                <div className='field-input'>
                                    <input className='' type='password' name='passsword' value={this.state.password} onChange={this.onPassChange}/> 
                                    <span><i className="fa fa-lock" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="form-control">
                            <button type="button" onClick={this.authenticate} className='button redirect-link'>Login</button>	
                            </div>
                            <div className="form-control">
                                <h2>Login with your social media</h2>
                                <a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fab fa-google" aria-hidden="true"></i></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className='login-form d-none'>
                <form className='login'>
                    <div className='input-field'>
                        <label className='name-label' for='name'>User Name</label>
                        <div className='field-input'>
                            <input className='' type='text' name='name' value={this.state.name} onChange={this.onValueChange}/> 
                        </div>
                    </div>
                    <div className='input-field'>
                        <label className='name-label' for='passsword'>passsword</label>
                        <div className='field-input'>
                            <input className='' type='password' name='passsword' value={this.state.password} onChange={this.onPassChange}/> 
                        </div>
                    </div>
                    <button type="button" onClick={this.authenticate} className='redirect-link'>Login</button>
                </form>
            </div> */}
        </div>
        </> 
    );
}
}

export default Login;
