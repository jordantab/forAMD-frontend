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
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCO1ORptB1TaLMEKkhk-4opxpqhBSIKiL0",
//   authDomain: "foramd-1673835905474.firebaseapp.com",
//   projectId: "foramd-1673835905474",
//   storageBucket: "foramd-1673835905474.appspot.com",
//   messagingSenderId: "453227253729",
//   appId: "1:453227253729:web:c11916dd9ac5aaf3fdcca0",
//   measurementId: "G-5452B8HPZV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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
          <Route path='/secondpuzzle' element={<SecondPuzzlePage/>}/>
          <Route path='/thirdpuzzle' element={<ThirdPuzzlePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
