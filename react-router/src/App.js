import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap/Container';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'




function App() {

  const packages = ['Activate your Crystals', 
        'Monkey Meditation', 
        'Soak in the Hotsprings', 
        'Hypnotherapy', 
        'Mineral Bath']

  return (
    <div className="App">
      <Router>
      <Container>
    <Nav defaultActiveKey="/" variant="tabs" fill>
        <Nav.Item>
            <Nav.Link href="/"> 
                <Link to="/">Home</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"aboutPage"}> 
                <Link to="/about">About Us</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"packagesPage"}> 
                <Link to="/packages">Our Packages</Link> 
            </Nav.Link>
         </Nav.Item>
    </Nav>
</Container>

      <header>
        <h1 className="title">Welcome to Monty's Mineral SPA</h1>

        <div className="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/packages">Our Packages</Link>
            </li>
          </ul>
        </div>

      </header>

      <div className="Display">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </div>

      </Router>
    </div>
  );
}

export default App;





