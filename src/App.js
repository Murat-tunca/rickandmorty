import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import Location from './components/Location';
import Episode from './components/Episode';
import Homepage from './components/Homepage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="leftNavbar">
            <div className='homeButtons'>
              <Link to="/"><button>Home</button></Link>
              <Link to="/episodes"><button>Episodes</button></Link>
              <Link to="/characters"><button>Characters</button></Link>
              <Link to="/locations"><button>Locations</button></Link>
            </div>
          </div>
          <div className="upNavbar">ust taraf</div>
          <div className="mainPage">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/episodes" element={<Episode />} />
              <Route path="/characters" element={<CharacterList />} />
              <Route path="/locations" element={<Location />} />
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
