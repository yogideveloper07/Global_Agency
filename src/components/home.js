import React from 'react';
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router-dom';
import Img1 from '../assets/img/img1.png'
import Img2 from '../assets/img/img2.png'
import Img3 from '../assets/img/img3.png'
import Img4 from '../assets/img/img4.png'
import Img5 from '../assets/img/img5.png'
import Img6 from '../assets/img/img6.png'

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
                                <h3>Logo</h3>
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
            <div className="header-row-2">
                <div className="container">
                    <div className="hr2-inner">
                        <h1>Global agency online marketing</h1>
                        <a href="#">Sign Up right now</a>
                    </div>
                </div>
            </div>
        </header>
        <section className="card-design">
            <section className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card active">
                            <div className="card-head"><i className="fab fa-adn"></i></div>
                            <div className="card-body p-0 mb-2">
                                <h3 className="mb-3">Advertisers</h3>
                                <p>That can be definitely said about the contemporary travel websites. </p>
                            </div>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-head"><i className="fa fa-podcast"></i></div>
                            <div className="card-body p-0 mb-2">
                                <h3 className="mb-3">Publishers</h3>
                                <p>That can be definitely said about the contemporary travel websites. </p>
                            </div>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-head"><i className="fa fa-user" aria-hidden="true"></i>
                            </div>
                            <div className="card-body p-0 mb-2">
                                <h3 className="mb-3">Agencies</h3>
                                <p>That can be definitely said about the contemporary travel websites. </p>
                            </div>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
	<section className="why-we">
		<div className="container">
			<div className="inner-head">
				<h1>Why we?</h1>
				<p>That can be definitely said about the contemporary travel websites.</p>
			</div>
			<div className="grid-content">
				<div className="card-desc">
					<span></span>
					<p>As the holidays approach, everything tends to get a little hectic. Stress levels increase, there seems to be more unfinished business to take care of than usual. And deadlines, which should always be met anyway,</p>
				</div>
				<div className="card-desc">
					<span></span>
					<p>Even with jQuery’s popularity there’s no need to rely on a JS library for every project. Classic JavaScript works in all major browsers and it’s really all you need to build dynamic interfaces. </p>
				</div>
				<div className="card-desc">
					<span></span>
					<p>On the first day of Christmas my true love gave to me … a MacBook Pro with Creative Suite. Well, that’s not exactly how the holiday jingle goes, but if you are a web designer this list of gift suggestions is for you.</p>
				</div>
				<div className="card-desc">
					<span></span>
					<p>When custom label printer Consolidated Labels redesigned its website, their end goal was to increase customer conversions. Yet they liked their site, and didn’t see the need to make many changes. </p>
				</div>
			</div>
		</div>
	</section>
	<section className="about-work">
		<div className="container">
			<div className="work-inner">
				<div className="inner-head">
					<h1>How we are working?</h1>
					<p>That can be definitely said about the contemporary travel websites. </p>
				</div>
				<ul className="card-list">
					<li>CPI</li>
					<li>CPA</li>
					<li>CPR</li>
					<li>CPC</li>
					<li>CPM</li>
					<li>RSM</li>
				</ul>
			</div>
		</div>
	</section>
	<section className="icons-center-card">
		<div className="container icon-full-width">
			<div className="icons-header">
				<h2 className="w-title">Fact about us</h2>
				<p className="w-description">Whether you are creating for web or print, designing brochures or user interfaces, developing a brand identity or creating a logo, one of the key elements of a successful project is the typeface you are using</p>
			</div>
			<div id="slider" className="icons-slider">
				<input id="slide1" name="slider" type="radio" checked autofocus/>
				<input id="slide2" name="slider" type="radio"/>
				<input id="slide3" name="slider" type="radio"/>
				<input id="slide4" name="slider" type="radio"/>
				<input id="slide5" name="slider" type="radio"/>
				<input id="slide6" name="slider" type="radio"/>
				<div className="icons-slider-card" for="card1">
					<img src={Img1} alt="" className="card-wheel-img" width="100" height="100"/>
					<div className="card-wheel-caption">
						<h4 className="w-block-text">Tips for Creating a Great Personal </h4>
					</div>
				</div>
				<div className="icons-slider-card" for="card2">
					<img src={Img2} alt="" className="card-wheel-img" width="100" height="100"/>
					<div className="card-wheel-caption">
						<h4 className="w-block-text">How to Create Checkout Form</h4>
					</div>
				</div>
				<div className="icons-slider-card" for="card3">
					<img src={Img3} alt="" className="card-wheel-img" width="100" height="100"/>
					<div className="card-wheel-caption">
						<h4 className="w-block-text">WebAssembly Now in Browser Preview</h4>
					</div>
				</div>
				<div className="icons-slider-card" for="card4">
					<img src={Img4} alt="" className="card-wheel-img" width="100" height="100"/>
					<div className="card-wheel-caption">
						<h4 className="w-block-text">Adobe Introduces Project Felix, Sensei</h4>
					</div>
				</div>
				<div className="icons-slider-card" for="card5">
					<img src={Img5} alt="" className="card-wheel-img" width="100" height="100"/>
					<div className="card-wheel-caption">
						<h4 className="w-block-text">A Design Workflow Comparison</h4>
					</div>
				</div>
				<div className="icons-slider-card" for="card6">
					<img ssrc={Img6} alt="" className="card-wheel-img" width="100" height="100"/>
					<div className="card-wheel-caption">
						<h4 className="w-block-text">Top 5 Underutilized Web Performance</h4>
					</div>
				</div>
				<div id="bwd">
					<label for="slide1"></label>
					<label for="slide2"></label>
					<label for="slide3"></label>
					<label for="slide4"></label>
					<label for="slide5"></label>
					<label for="slide6"></label>
				</div>
				<div id="fwd">
					<label for="slide1"></label>
					<label for="slide2"></label>
					<label for="slide3"></label>
					<label for="slide4"></label>
					<label for="slide5"></label>
					<label for="slide6"></label>
				</div>
			</div>
		</div>
	</section>
    <Footer/>
</> 
    );
}
}

export default Home;
