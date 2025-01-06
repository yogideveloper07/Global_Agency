import React from 'react';
import Header from './header'
import Footer from './footer'
import AboutImg from '../assets/img/about-img.jpg'
import { Link } from 'react-router-dom';

class About extends React.Component{
    constructor(){
        super();
            this.state={

            }
    }

render(){
    return (
        <>
        <Header/>
        <section className="about-section">
		<div className="container">
			<div className="row">
				<div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
					<div className="inner-column">
						<div className="sec-title">
							<span className="title">About Us</span>
							<h2>About Our Agencies</h2>
							<p>Typography is an art combining perspective, technique and ingenuity. A great design comes
								with great typography. </p>
						</div>
						<div className="text">As the holidays approach, everything tends to get a little hectic. Stress
							levels increase, there seems to be more unfinished business to take care of than usual. And
							deadlines, which should always be met anyway,</div>
						<div className="text">
							You can be the most creative and productive designer in the world, but it doesn’t mean
							anything without paid work. Designers can rely on repeat clients but it’s important to keep
							meeting new potential
						</div>
						
						<div className="text">
							You can be the most creative and productive designer in the world, but it doesn’t mean
							anything without paid work. Designers can rely on repeat clients but it’s important to keep
							meeting new potential
						</div>
						<div className="btn-box">
							<Link to="/contact" className="theme-btn btn-style-one text-decoration-none">Contact Us</Link>
						</div>
					</div>
				</div>

				<div className="image-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column wow fadeInLeft">
						<div className="author-desc">
							<h2>Agencies</h2>
							<span>Lorem ipsum dolor </span>
						</div>
						<figure className="image-1">
							<a href="#" className="lightbox-image" data-fancybox="images">
								<img title="About" src={AboutImg}	 alt=""/>
							</a>
						</figure>
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

export default About;
