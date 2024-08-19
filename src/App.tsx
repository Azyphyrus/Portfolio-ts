import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import './stars.css'
import {Component} from './Components/Sidebar';
import Profile from './Pages/Profile';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import HamburgerMenu from './Components/HamburgerMenu';

function App() {

  return (
<Router>
                <HamburgerMenu />
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Component />
        <div style={{ flex: 1, padding: '20px 32px' }}>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
