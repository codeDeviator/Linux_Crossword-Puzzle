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
    [1, '#', '#', '#', 2, '#', '#', '#', '#', 3, '#', '#', 4, '#', 5],
    ['#', '#','#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    [6, '#', '#', '#', 7, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    [8, 9, '#', '#', 10, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', 11, '#', '#', '#', '#', '#', '#', 12, 13, '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 14, '#', '#'],
    [15, '#', '#', '#', '#', 16, '#', '#', 17, '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 18, '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 19, '#', '#', 20],
    ['#', '#', '#', 21, '#', '#', '#', '#', 22, '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 23, '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', 24, '#', '#', 25, '#', '#', '#', '#'],
    ['#', 26, '#', 27, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    [28, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 29, '#', '#', '#'],
  ],

  clues: {
    Across: [
      [1, 'A powerful tool that allows users to change the owner of files and directories.'] ,
      [4, 'Provides a secure encrypted connection between two hosts over an insecure network.'],
      [6, 'Displays the user manual for any command that can be run on the terminal.'],
      [7, 'Utilizes the telnet network protocol to connect to remote machines and manage them through a TCP/IP network.'],
      [8, 'Measures the disk space occupied by files or directories.'],
      [10, 'provides a string value that replaces a command name when it is encountered'],
      [11, 'Creates new, empty files or updates the timestamps of existing files'],
      [12, 'Used to delete files and directories'],
      [14, 'This editor is an enhanced version of the Vi text editor '],
      [15, 'Used to trace the path network packets take from the source to a destination host or IP address'],
      [19, 'This can terminate a process (the default), interrupt it, suspend it, crash it, and so on.'],
      [21, 'Search for files and directories based on various criteria such as name, size, type, and modification date.'],
      [22, 'A command that shows information about disk space usage on a file system'],
      [23, 'Display and administer the network configuration of a system.'],
      [24, 'Used to remove empty directories from the system'],
      [27, 'Lists files and directories in the current working directory'],
      [28, 'Transfer data to and from a server'],
      [29, 'Allows users to view text files one page at a time'],
    ],

    Down: [
    [1, 'Modifies the read, write, and execute permissions of specified files and the search permissions of specified directories'],
    [2, 'Reading and writing data between two computer networks.'],
    [3, 'Used to view file contents, combine files, and create new files.'],
    [4, 'Allows users to temporarily run commands with elevated privileges'],
    [5, "Display or change the hostname of a system"],
    [9, 'Changes the properties of a user in Linux through the command line'],
    [13,'Rename file directories and move files from one location to another within a file system'],
    [16,'A powerful and versatile Linux command for transferring and synchronizing files between local and remote devices'],
    [17,'Used to analyze network traffic by intercepting and displaying packets that are being created or received by the computer it is running on.'],
    [18, 'Used to create new directories'],
    [20, 'Quickly find the locations of files on the system by querying a database that contains a snapshot of all the files in the system'],
    [25, 'Provides information about a user identity, including their user and group IDs'],
    [26, 'Measures the disk space occupied by files or directories'],
    [27, 'Shows you all the details important to the Linux system about the Linux file'],
    ],
  },

  solution: [
    ['C', 'H', 'O', 'W', 'N', '#', '#', '#', '#', 'C', '#', '#', 'S', 'S', 'H'],
    ['H', '#', '#', '#', 'E', '#', '#', '#', '#', 'A', '#', '#', 'U', '#', 'O'],
    ['M', 'A', 'N', '#', 'T', 'E', 'L', 'N', 'E', 'T', '#', '#', 'D', '#', 'S'],
    ['O', '#', '#', '#', 'C', '#', '#', '#', '#', '#', '#', '#', 'O', '#', 'T'],
    ['D', 'U', '#', '#', 'A', 'L', 'I', 'A', 'S', '#', '#', '#', '#', '#', 'N'],
    ['#', 'S', '#', '#', 'T', 'O', 'U', 'C', 'H', '#', '#', 'R', 'M', '#', 'A'],
    ['#', 'E', '#', 'N', '#', '#', '#', '#', '#', '#', '#', '#', 'V', 'I', 'M'],
    ['T', 'R', 'A', 'C', 'E', 'R', 'O', 'U', 'T', 'E', '#', '#', '#', '#', 'E'],
    ['#', 'M', '#', '#', '#', 'S', '#', '#', 'C', '#', '#', 'M', '#', '#', '#'],
    ['#', 'O', '#', '#', '#', 'Y', '#', '#', 'P', '#', '#', 'K', 'I', 'L', 'L'],
    ['#', 'D', '#', 'F', 'I', 'N', 'D', '#', 'D', 'F', '#', 'D', '#', '#', 'O'],
    ['#', '#', '#', '#', '#', 'C', '#', '#', 'U', '#', '#', 'I', 'P', '#', 'C'],
    ['#', '#', '#', '#', '#', '#', '#', 'R', 'M', 'D', 'I', 'R', '#', '#', 'A'],
    ['#', 'D', '#', 'L', 'S', '#', '#', '#', 'P', '#', 'D', '#', '#', '#', 'T'],
    ['C', 'U', 'R', 'L', '#', '#', '#', '#', '#', '#', '#', 'M', 'O', 'R', 'E'],
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

