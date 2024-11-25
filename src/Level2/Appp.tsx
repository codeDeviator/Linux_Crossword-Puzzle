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
    [1, '#', '#', 2, '#', '#', 3, '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', 4, '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    [5, 6, '#', 7, '#', 8, '#', '#', 9, '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', 10, '#'],
    ['#', '#', '#', '#', 11, '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', 12, '#'],
    ['#', 13, 14, '#', '#', '#', '#', 15, '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', 16, '#'],
  ],

  clues: {
    Across: [
      [1, 'Creates a new user but doesnot ask for additional information '] ,
      [4, 'A tool that monitors memory usage'],
      [5, 'Used to delete files and directories'],
     [7, 'Reading and writing data between two computer networks.'],
     [10, 'Used to copy files or group of files or directories'],
     [11, 'To confirm the identity of a specified Linux user'],
      [12, "A command that shows information about disk space usage on a file system"],
      [13, 'Used to remove empty directories from the system'],
      [15, 'Measures the disk space occupied by files or directories'],
      [16, 'A command line tool that displays information about the processes running on a Linux system'],
    ],

    Down: [
    [1, 'A command in Linux that is used to change the properties of a user in Linux through the command line'],
    [2, 'lets you transfer and synchronize files or folders between local devices and remote Linux-based server'],
    [3, 'Uses a delta-transfer algorithm to only transmit the differences between the source and destination files'],
    [6, 'Used to create new directories'],
    [8, 'Shows a dynamic, real-time view of running processes and kernel-managed tasks in Linux'],
    [9, 'It can be used to analyze network traffic by intercepting and displaying packets that are being created or received by the computer it is running on'],
    [11, 'initializes and controls processes'],
    [14, 'Used to rename file directories and move files from one location to another within a file system.'],
 
    ],
  },

  solution: [
    ['U', 'S', 'E', 'R', 'A', 'D', 'D', '#', '#', '#'],
    ['S', 'U', '#', 'S', '#', '#', 'F', 'R', 'E', 'E'],
    ['E', '#', '#', 'Y', '#', '#', '#', '#', '#', '#'],
    ['R', 'M', '#', 'N', 'E', 'T', 'C', 'A', 'T', '#'],
    ['M', 'K', '#', 'C', '#', '#', '#', '#', 'C', 'P'],
    ['O', 'D', '#', '#', 'I', 'D', '#', '#', 'P', '#'],
    ['D', 'I', '#', '#', 'N', '#', '#', '#', 'D', 'F'],
    ['#', 'R', 'M', 'D', 'I', 'R', '#', 'D', 'U', '#'],
    ['#', '#', 'V', '#', 'T', '#', '#', '#', 'M', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', 'P', 'S'],
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
