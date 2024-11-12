import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LandingPage from './landingpage/LandingPage';
import LevelOne from './Level1/Apppp';  // Level One logic
import LevelTwo from './Level2/Appp'; // Level Two logic
import LevelThree from './Level3/App'; // Level Three logic
import LearnCommands from './learnlinux/learnlinux';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
  {/*    <Routes>
        {/* Default path to the landing page */}
        {/* <Route path="/home" element={<LandingPage />} />

        {/* Routes for each level */}
        {/* <Route path="/level-one" element={<LevelOne />} />
        <Route path="/level-two" element={<LevelTwo />} />
        <Route path="/level-three" element={<LevelThree />} />
        <Route path="/learn-commands" element={<LearnCommands />} />
      </Routes> */}
       <Routes>
  {/* Route for root path */}
  <Route path="/" element={<LandingPage />} />

  {/* Default path to the landing page */}
  <Route path="/home" element={<LandingPage />} />

  {/* Routes for each level */}
  <Route path="/level-one" element={<LevelOne />} />
  <Route path="/level-two" element={<LevelTwo />} />
  <Route path="/level-three" element={<LevelThree />} />
  <Route path="/learn-commands" element={<LearnCommands />} />
</Routes>
</Router>
  </React.StrictMode>
  
);



reportWebVitals();
