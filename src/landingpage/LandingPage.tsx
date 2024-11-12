import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; 

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1> REACT CROSSWORD </h1>
      </header>

      <section className="about-section" id="about">
        <h2>About The Game</h2>
        <p>
        Welcome to the Linux Commands Crossword Game – an interactive puzzle that combines fun and learning, helping you master essential Linux commands. Test your skills with command-based clues, instant feedback on your answers, and engaging levels that deepen your knowledge as you progress. Whether you're a beginner or looking to sharpen your Linux expertise, this game is a dynamic way to learn and play!
        </p>
      </section>

      <section className="button-section">
        <Link to="/level-one">
          <button className="btn btn-level-one">Level One</button>
        </Link>
        <Link to="/level-two">
          <button className="btn btn-level-two">Level Two</button>
        </Link>
        <Link to="/level-three">
          <button className="btn btn-level-three">Level Three</button>
        </Link>
        <Link to="/learn-commands">
          <button className="btn btn-learn-commands">Learn Commands</button>
        </Link>
        

      </section>


      <section className="instructions-section" id="instructions">
        <h2>How to Play</h2>
        <h3>Rules</h3>
        <p>Clues: Each clue corresponds to a specific Linux command. Clues may also include a brief description of the command's function.</p>
        <p>Filling in Answers:</p>
        <ul>
          <li>Click on a cell in the crossword grid where you want to enter an answer.</li>
          <li>Type in the command that corresponds to the selected clue.</li>
          <li>If your answer is correct, the cell will change color to indicate success (e.g., green).</li>
          <li>If your answer is incorrect, the cell will change color to indicate failure (e.g., red).</li>
        </ul>
        <p>Strikethrough: Once you fill in the correct answer, the corresponding clue will have a strikethrough line, indicating that it has been completed.</p>

        <h3>Navigation</h3>
        <ul>
          <li>Previous and Next Buttons: Use the "Previous" and "Next" buttons to navigate through the puzzle or access hints if available.</li>
          <li>Reset Button: If you want to start over, click the "Reset" button to clear all your answers and begin again.</li>
        </ul>

        <h3>Additional Features</h3>
        <ul>
          <li>Learn Commands: Access the "Learn Commands" page linked to a GitHub repository, where you can find detailed information about each Linux command used in the puzzle.</li>
          <li>Hints: If you're stuck, use any available hints to help you figure out the answer.</li>
        </ul>

        <h3>Scoring</h3>
        <p>While there may not be a traditional scoring system, try to complete the puzzle as quickly and accurately as possible. Keep track of the number of attempts it took to finish.</p>

        <h3>Enjoy the Game!</h3>
        <p>Have fun playing the Linux Commands Crossword Puzzle! Use this opportunity to enhance your Linux command knowledge while enjoying a classic game.</p>
      </section>


      {/* <footer className="footer">
        <p></p>
      </footer> */}
      <footer className ="footer">
    <p>© 2024 Linux Commands Crossword Game. All rights reserved.</p>
    <p>Created with ❤️ by Ayush to make learning Linux fun and interactive.</p>
    <p>Explore, play, and master the command line!</p>
    <div className="social-links">
        <a href="https://github.com/codeDeviator" target="_blank">GitHub</a> 
    </div>
</footer>

    </div>
  );
};

export default LandingPage;
