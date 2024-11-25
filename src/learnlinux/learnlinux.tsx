import React from 'react';
import './learnlinux.css'; 
import { Link } from 'react-router-dom';

const LearnCommands: React.FC = () => {
  return (
  

    <div className="commands-container">
      <h1>Learn Linux Commands</h1>
      <p>
        To explore a comprehensive list of Linux commands, visit our GitHub repository:
      </p>
      <a
        href="https://github.com/bobbyiliev/101-linux-commands-ebook?tab=readme-ov-file" // Replace with your actual GitHub repository link
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View Linux Commands on GitHub
      </a>

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
        <Link to="/home">
          <button className="btn btn-landing-page">Home</button>
        </Link>
      </section>

      {/* <footer className="footer">
        <p></p>
      </footer> */}
      <footer className ="footer">
    <p>© 2024 Linux Commands Crossword Game. All rights reserved.</p>
    <p>Created with ❤️ by Ayush to make learning Linux fun and interactive.</p>
    <p>Explore, play, and master the command line!</p>
    <div className="social-links">
        <a href="https://github.com/codeDeviatornp">GitHub</a> 
    </div>
</footer>
    </div>
   
  );
};

export default LearnCommands;
