import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import SurprisePage from './pages/SurprisePage.jsx';
import FirstPuzzlePage from './pages/FirstPuzzlePage.jsx';
import SecondPuzzlePage from './pages/SecondPuzzlePage.jsx';
import ThirdPuzzlePage from './pages/ThirdPuzzlePage.jsx';
import './App.css';
import DecisionPage from "./pages/DecisionPage.jsx";
import SecondPuzzleBufferPage from "./pages/SecondPuzzleBufferPage.jsx";

function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/decisions' element={<DecisionPage/>}/>
          <Route path='/events' element={<EventsPage/>}/>
          <Route path='/error' element={<ErrorPage/>}/>
          <Route path='/surprise' element={<SurprisePage/>}/>
          <Route path='/firstpuzzle' element={<FirstPuzzlePage/>}/>
          <Route path='/secondpuzzlecountdown' element={<SecondPuzzleBufferPage/>}/>
          <Route path='/secondpuzzle' element={<SecondPuzzlePage/>}/>
          <Route path='/thirdpuzzle' element={<ThirdPuzzlePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
