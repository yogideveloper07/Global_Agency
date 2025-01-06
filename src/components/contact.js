import React from 'react';
import Header from './header'
import Footer from './footer'

class Contact extends React.Component{
    constructor(){
        super();
            this.state={

            }
    }

render(){
    return (
        <>
        <Header/>
        <section className="contact_us">
			<div className="container">
				<div className="row-form">
					<div className="contact_inner">
						<div className="form-two-grid">
							<div className="form">
								<div className="contact_form_inner">
									<div className="contact_field">
										<h3>Contatc Us</h3>
										<p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
										<input type="text" className="form-control form-group" placeholder="Name" />
										<input type="text" className="form-control form-group" placeholder="Email" />
										<textarea className="form-control form-group" placeholder="Message"></textarea>
										<button className="contact_form_submit">Send</button>
									</div>
								</div>
							</div>
							<div className="social-icon">
								<div className="right_conatct_social_icon">
									<div className="socil_item_inner">
										<li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
										<li><a href="#"><i className="fab fa-instagram"></i></a></li>
										<li><a href="#"><i className="fab fa-twitter"></i></a></li>
									</div>
								</div>
							</div>
						</div>
						<div className="contact_info_sec">
							<h4>Contact Info</h4>
							<div className="info_single">
								<i className="fas fa-headset"></i>
								<span>+91 97644 28546</span>
							</div>
							<div className="info_single">
								<i className="fas fa-envelope-open-text"></i>
								<span>info@test.com</span>
							</div>
							<div className="info_single">
								<i className="fas fa-map-marked-alt"></i>
								<span>No 7, Test address, Test Street, Chennai</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        <Footer/>
        </> 
    );
}
}

export default Contact;
