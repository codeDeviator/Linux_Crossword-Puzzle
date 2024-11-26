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
  dimensions: { width: 15, height: 15 },

  puzzle: [
    [1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 2],
    ['#', '#','#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    [3, '#', 4, '#', 5, '#', 6, '#', 7, '#', 8, '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 9, '#', 10, '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', 11, '#', '#', 12, '#', 13, '#', '#', 14, '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', 15, 16, '#', '#', '#', 17, 18, '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', 19, 20, '#', '#', '#', 21, '#', '#', '#'],
    [22, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', 23, '#', '#', '#', '#', '#', 24, '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', 25, '#', '#', '#', '#', '#', '#'],
  ],

  clues: {
    Across: [
      [1, 'Lists block devices and provides information about them'] ,
      [3, 'Reads, displays, and concatenates text files'],
      [5, 'Generates displays that show network status and protocol statistics.'],
      [9, 'Modifies the read, write, and execute permissions of specified files and the search permissions of specified directories'],
      [11, 'A built-in command that displays text, variables, and special characters to the terminal screen'],
      [13, 'Allows users to transfer data to and from a server using various protocols on Linux and other Unix-like operating systems'],
      [15, 'To display information about disk usage and available space on a file system'],
      [17, 'Lists files and directories in a file system'],
      [19, 'Adds new user, it does not create password information for a user '],
      [22, 'To search for and print text that matches a defined pattern in a file'],
      [23, 'A tool that allows system administrators to change the properties of a user account'],
      [25, 'To remove a user account'],
    ],

    Down: [
    [1, 'To find files and directories quickly'],
    [2, 'A powerful tool for searching for files, folders, and devices based on various criteria'],
    [4, 'To trace the route that connects a computer to a destination, and to return details about each hop along the way'],
    [6, 'To update or create files, and to change their access and modification times'],
    [7, 'Prints the last few lines of a file to the standard output'],
    [8, 'To analyze network traffic by intercepting and displaying packets that are being created or received by the computer it is running on'],
    [10, 'To move or rename files and directories'],
    [12, 'To display the contents of a file in a specified format'],
    [14, 'A convenient alias for the ls -l command.'],
    [16, 'Allows you to check for memory RAM on your system or to check the memory statics of the Linux operating system'],
    [18, 'lets you switch to another users account or execute commands as a different user'],
    [20, 'To temporarily give a user root-level privileges to run commands that they normally cannot'],
    [21, 'To display the contents of a directory in ascending order alphabetically'],
    [24, 'To check the disk size of files and directories'],
    ],
  },

  solution: [
    ['L', 'S', 'B', 'L', 'K', '#', '#', '#', '#', '#', '#', '#', '#', '#', 'F'],
    ['O', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 'I'],
    ['C', 'A', 'T', '#', 'N', 'E', 'T', 'S', 'T', 'A', 'T', '#', '#', '#', 'N'],
    ['A', '#', 'R', '#', '#', '#', 'O', '#', 'A', '#', 'C', 'H', 'M', 'O', 'D'],
    ['T', '#', 'A', '#', '#', '#', 'U', '#', 'I', '#', 'P', '#', 'V', '#', '#'],
    ['E', '#', 'C', '#', '#', '#', 'C', '#', 'L', '#', 'D', '#', '#', '#', '#'],
    ['#', '#', 'E', '#', 'E', 'C', 'H', 'O', '#', 'C', 'U', 'R', 'L', '#', '#'],
    ['#', '#', 'R', '#', '#', '#', '#', 'D', 'F', '#', 'M', '#', 'L', 'S', '#'],
    ['#', '#', 'O', '#', '#', '#', '#', '#', 'R', '#', 'P', '#', '#', 'U', '#'],
    ['#', '#', 'U', '#', '#', '#', '#', '#', 'E', '#', '#', '#', '#', '#', '#'],
    ['#', '#', 'T', '#', '#', '#', 'U', 'S', 'E', 'R', 'A', 'D', 'D', '#', '#'],
    ['G', 'R', 'E', 'P', '#', '#', '#', 'U', '#', '#', '#', 'I', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', 'D', '#', '#', '#', 'R', '#', '#', '#'],
    ['#', '#', 'U', 'S', 'E', 'R', 'M', 'O', 'D', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', 'U', 'S', 'E', 'R', 'D', 'E', 'L'],
  ],
};

const Page = styled.div`
  padding: 0px;
  margin-left: 0px;
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


function App() {
  

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
         <Link to="/level-two">
          <button className="btn btn-level-two">Level Two</button>
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
  
export default App;

