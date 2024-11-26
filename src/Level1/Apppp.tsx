import React, { } from 'react';
import './Apppp.css';
import {
  CrosswordGrid,
  CrosswordProvider,
  DirectionClues,
  useIpuz,
} from '@jaredreisinger/react-crossword';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ipuzData = {
  origin: 'ipuz example puzzle (from Puzzazz)',
  version: 'http://ipuz.org/v1',
  kind: ['http://ipuz.org/crossword#1'],
  copyright: '2011 Puzzazz',
  author: 'Roy Leban',
  publisher: 'Puzzazz, Inc.',
  title: 'High-Tech Mergers',
  intro:
    'Solve the puzzle, then anagram the circled letters to find an appropriate word.',
  difficulty: 'Easy',
  empty: '#',
  dimensions: {width: 5, height: 5}, 

  puzzle: [
    [1, '#', 2, '#', '#'],
    ['#', '#', 3, '#', 4],
    ['#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#'],
  ],

  clues: {
    Across: [
      [1, 'Connects to a remote machine securely using the Secure Shell protocol'] ,
      [3, 'Display your current environment'],
    ],
    Down: [
    [1, 'Sorts lines of text files'],
    [2, 'Output a specified number of lines or bytes of each of the specified files from the top'],
    [4, 'Printing the content of a directory in long list format']
    ],
  },

  solution: [
    ['S', 'S', 'H', '#', '#'],
    ['O', '#', 'E', 'N', 'V'],
    ['R', '#', 'A', '#', 'D'],
    ['T', '#', 'D', '#', 'I'],
    ['#', '#', '#', '#', 'R'],
  ],
};

const Page = styled.div`
  padding: 0em;
`;


const CrosswordWrapper = styled.div`
  // width: 600px;
  // height: 600px;
  // margin: 0 auto;
  // /*max-width: 30em;*/

  .crossword {
  width: 10%;
  height: 10%
  }

  /* and some fun making use of the defined class names */
  .crossword.correct {
    rect {
      stroke: rgb(100, 200, 100) !important;
    }
    svg > rect {
      fill: rgb(100, 200, 100) !important;
    }
    text {
      fill: rgb(100, 200, 100) !important;
    }
  }

  .clue.correct {
    ::before {
      content: '\u2713'; /* a.k.a. checkmark: ✓ */
      display: inline-block;
      text-decoration: none;
      color: rgb(100, 200, 100);
      margin-right: 0.25em;
    }

    text-decoration: rgb(0, 255, 0);
    color: rgb(0, 255, 0);
  }
    crossword.incorrect {
    rect {
      stroke: rgb(100, 200, 100) !important;
    }
    svg > rect {
      fill: rgb(100, 200, 100) !important;
    }
    text {
      fill: rgb(100, 200, 100) !important;
    }
  }

  .clue.incorrect {
    ::before {
      content: '\u2713'; /* a.k.a. checkmark: ✓ */
      display: inline-block;
      text-decoration: none;
      color: rgb(100, 200, 100);
      margin-right: 0.25em;
    }

    text-decoration: rgb(0, 255, 0);
    color: rgb(255, 0, 0);
  }
`;

const CrosswordProviderWrapper = styled(CrosswordWrapper)`
  max-width: 5;
  display: flex;
  gap: 1em;

  .direction {
    width: 10em;

    .header {
      margin-top: 0;
    }
  }

  .grid {
    width: 10em;
  }
`;

const IpuzWrapper = styled(CrosswordProviderWrapper)`
  max-width: 100%;
  .direction {
    width: 25em;
  }
`;

function Apppp() {
 
  const fromIpuz = useIpuz(ipuzData);

  return (
    <Page>
      

      <IpuzWrapper>
        <CrosswordProvider data={fromIpuz!} storageKey="ipuz-example">
          <DirectionClues direction="across" />
          <CrosswordGrid />
          <DirectionClues direction="down" />
        </CrosswordProvider>
      </IpuzWrapper>

      <section className="button-section">
        {/* <Link to="/level-one">
          <button className="btn btn-level-one">Level One</button>
        </Link> */}
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
<footer className ="footer">
    <p>© 2024 Linux Commands Crossword Game. All rights reserved.</p>
    <p>Created with ❤️ by Ayush to make learning Linux fun and interactive.</p>
    <p>Explore, play, and master the command line!</p>
    <div className="social-links">
        <a href="https://github.com/your-repo" target="_blank" rel="noreferrer">GitHub</a>
    </div>
</footer>
    </Page>
  
    
    );
  }
  
export default Apppp;
