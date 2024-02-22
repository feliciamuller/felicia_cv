import React from 'react'//importerar react
import { HashRouter as Router, Route, Routes} from 'react-router-dom';//denna gör att man kommer ifrån problemen med att
//den ger error om man refreshar, ser til att man ligger i rätt mapp,
import Menu from './components/Menu';//importerar komponent Menu
import Footer from './components/Footer';//importerar komponent Footer
import About from './pages/About';//importerar sida About
import Home from './pages/Home';//importerar sida Home
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  
  return (
    <Router>
    <div className="site-container">
      <header>
        <Menu/>
      </header>
      <main className = "site-content">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/CV" element = {<CV/>}/>
          <Route path = "/portfolio" element = {<Portfolio/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
        </Routes>
      </main>
      <footer className = "site-footer">
          <Footer/>
      </footer>
    </div>
    </Router>
  );
}
