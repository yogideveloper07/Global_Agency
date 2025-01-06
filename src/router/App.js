import '../assets/css/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../components/login'
import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact';
import '../assets/css/custom.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { Button, Navbar } from 'react-bootstrap'; 


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
