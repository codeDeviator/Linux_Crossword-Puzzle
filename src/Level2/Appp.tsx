import React, {} from 'react';

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
  empty: '0',
  dimensions: {width: 10, height: 10}, 

  puzzle: [
    [1, '#', 2, '#', '#', '#', 3, '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', 4, '#', '#', 5],
    ['#', '#', 6, '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    [7, '#', '#', '#', 8, '#', '#', 9, '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    [10, '#', 11, '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', 12, '#', '#', 13, '#', '#', '#', '#'],
    [14, '#', '#', '#', '#', 15, '#', '#', '#', '#'],
  ],

  clues: {
    Across: [
      [1, 'Creates a new user but doesnot ask for additional information '] ,
      [4, 'Used to check the memory RAM and memory statistics of the Linux operating system'],
      [6, 'Powerful text editor popular among developers, you can jump to any specific text position and rapidly make precise edits.'],
      [7, 'provides maunal for any commands'],
      [8, 'Network protocol to connect to remote machines and manage them through a TCP/IP network'],
      [10, 'A command-line tool that queries Domain Name System (DNS) servers for information'],
      [12, 'A built-in command that displays text, variables, and special characters to the terminal screen'],
      [14, 'A network protocol that securely copies files/folders between Linux (Unix) systems on a network.'],
      [15, 'Used to list files and directories in a directory. It is a basic command that helps users navigate the file system'],
    ],

    Down: [
    [1, 'A command in Linux that is used to change the properties of a user in Linux through the command line'],
    [2, 'Display your current environment'],
    [3, 'Displays information about the amount of disk space available on a file system'],
    [5, 'To exit the command line interface'],
    [8, 'Used for creating files and updating timestamps'],
    [9, 'Used to open a file and edit it using the terminal'],
    [11, 'A command used for searching and matching text patterns in files contained in the regular expressions'],
    [13, 'Used to display file contents in various formats such as octal, hexadecimal, decimal, and ASCII'],
    ],
  },

  solution: [
    ['U', 'S', 'E', 'R', 'A', 'D', 'D', '#', '#', '#'],
    ['S', '#', 'N', '#', '#', '#', 'F', 'R', 'E', 'E'],
    ['E', '#', 'V', 'I', 'M', '#', '#', '#', '#', 'X'],
    ['R', '#', '#', '#', '#', '#', '#', '#', '#', 'I'],
    ['M', 'A', 'N', '#', 'T', 'E', 'L', 'N', 'E', 'T'],
    ['O', '#', '#', '#', 'O', '#', '#', 'A', '#', '#'],
    ['D', 'I', 'G', '#', 'U', '#', '#', 'N', '#', '#'],
    ['#', '#', 'R', '#', 'C', '#', '#', 'O', '#', '#'],
    ['#', '#', 'E', 'C', 'H', 'O', '#', '#', '#', '#'],
    ['S', 'C', 'P', '#', '#', 'D', 'I', 'R', '#', '#'],
  ],
};

const Page = styled.div`
  padding: 0;
`;



const CrosswordWrapper = styled.div`
  // width: 600px;
  // height: 600px;
  // margin: 0 auto;
  // /*max-width: 30em;*/

  .crossword {
  width: 100%;
  height: 100%
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
  max-width: 50em;
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

function Appp() {
 
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
        <Link to="/level-one">
          <button className="btn btn-level-one">Level One</button>
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
        <a href="https://github.com/codeDeviator" target="_blank" rel="noreferrer">GitHub</a> 
    </div>
</footer>

    </Page>
   
    );
  }
  
export default Appp;
