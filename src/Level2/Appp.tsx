import React, { useCallback, useEffect, useRef, useState } from 'react';
// import LandingPage from './landingpage/LandingPage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './landingpage/LandingPage';
import {
  CrosswordImperative,
  CrosswordGrid,
  CrosswordProps,
  CrosswordProvider,
  CrosswordProviderImperative,
  CrosswordProviderProps,
  DirectionClues,
  useIpuz,
} from '@jaredreisinger/react-crossword';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const App: React.FC = () => {
//   return (
//     <div>
//       <LandingPage />
//     </div>
//   );
// };
// const data = {
//   across: {
//     1: {
//       clue: 'one plus one',
//       answer: 'TWO',
//       row: 0,
//       col: 0,
//     },
//   },
//   down: {
//     2: {
//       clue: 'three minus two',
//       answer: 'ONE',
//       row: 0,
//       col: 2,
//     },
//   },
// };

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
    [1, '#', '#', 4, '#', '#', 6, '#', '#', 9],
    ['#', '#', '#', 11, '#', '#', 13, '#', '#', '#'],
    [16, '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', 20, '#', '#', 21, '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', 27, '#', '#', '#'],
    ['#', '#', 29, '#', '#', '#', '#', '#', '#', 36],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', 38, '#', 39, '#', 40, '#', '#', '#', '#'],
    ['#', '#', '#', 45, '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', 50, '#', '#', '#', '#', '#', '#'],
    // ['#', '#', '#', '#', '#', 111, 112, '#', '#', '#', 116, '#', '#', '#', '#'],
    // ['#', '#', '#', 119, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    // [127, '#', '#', '#', '#', '#', '#', '#', 133, '#', '#', '#', '#', '#', '#'],
    // ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    // [143, '#', '#', '#', '#', '#', '#', '#', 149, '#', '#', '#', '#', '#', '#'],
  ],

  clues: {
    Across: [
      [1, 'Removes empty directories'] ,
      [6, 'Transfers data from or to a server using various protocols (HTTP, FTP, etc.)'],
      [11, 'Displays disk space usage'],
     [13, 'Creates hard and symbolic links to files'],
     [16, 'Installs, updates, and manages packages on RPM-based systems.'],
     [21, 'Starts the Bourne Again Shell (command interpreter)'],
      [27, "Removes files or directories."],
      [29, 'Generates encrypted passwords'],
      [40, 'Prints the current working directory path'],
      [45, 'Creates shortcuts for commands'],
      [50, 'Displays network connections, routing tables, and interface statistics'],
    //   [78, 'Measures the execution time of a command'],
    //   [89, 'Shrinks or extends file size'],
    //   [112, 'Configures or displays network interfaces'],
    //   [116, 'Lists directory contents with detailed file information'],
    //   [119, 'Displays the first part of a file'],
    //   [127, 'Sends a signal to terminate a process'],
    //   [133, 'Runs a command with a time limit'],
    //   [143, 'Changes file permissions'],
    //   [149, 'Changes a user’s password'],
      // [47, 'Recedes'],
      // [50, 'Hawaii has hundreds'],
      // [51, 'First piece of evidence'],
      // [55, '"For example..."'],
      // [56, 'Indian flatbread'],
      // [57, 'Clothing and skate shop chain'],
      // [59, 'The M in MP3 does not stand for this: abbr.'],
      // [62, 'Put together'],
      // [64, 'Fruity valley?'],
      // [66, 'Garden tools'],
      // [67, 'Famous Speedwagon'],
      // [68, 'Alfa follower'],
      // [69, 'Rejoice'],
      // [70, "Communicator for those who can't hear: abbr."],
      // [71, 'Win all the games'],
    ],

    Down: [
    [1, 'Synchronizes files and directories between two locations'],
    [4, 'Displays user identity information (user and group IDs)'],
    [9, 'Lists files in a directory with detailed information (alias for ls -l)'],
    [20, ' A text editor for the terminal, enhanced version of vi'],
    [36, 'Lists directory contents (similar to ls)'],
    [38, 'Reads and writes data across network connections'],
    [39, 'Displays the manual pages for commands'],
    // [111, 'Archives files'],
    // [133, 'Displays real-time system processes and resource usage'],
    //   [26, "They're checked in bars"],
    //   [27, 'Fine spray'],
    //   [28, '"I can\'t believe ___ the whole thing!"'],
    //   [
    //     29,
    //     'Nickname for an FBI agent, as popularized in the 1959 movie "The FBI Story"',
    //   ],
    //   [30, 'Environmental prefix'],
    //   [33, 'Fast food chain that added grills in 2009'],
    //   [35, 'Ms. Brockovich'],
    //   [36, 'Anxiety syndrome associated with veterans: abbr.'],
    //   [37, 'Meets with'],
    //   [40, 'Former White House press secretary  Fleischer'],
    //   [41, 'Dangler at a graduation'],
    //   [44, 'Consumer protection grp. with the slogan "Start With Trust"'],
    //   [46, "Portland's team, for short"],
    //   [48, 'Alternative to .com'],
    //   [49, 'Little mouse'],
    //   [51, 'Habituate'],
    //   [52, 'Anti-anxiety drug (sometimes used to treat 36-Down)'],
    //   [
    //     53,
    //     "Dancing off the page / Pleasant as a Summer breeze / It's a short poem",
    //   ],
    //   [54, 'Pumped up the volume'],
    //   [58, 'Shuffle or Classic'],
    //   [59, 'I Can Has Cheezburger is all about one'],
    //   [60, '"___\'s Gold" (Peter Fonda flick of 1997)'],
    //   [61, 'Feed for the pigs'],
    //   [63, 'Approx.'],
    //   [65, 'Stock market benchmark, with "The"'],
    ],
  },

  solution: [
    ['R', 'M', 'D', 'I', 'R', '#', 'C', 'U', 'R', 'L'],
    ['S', '#', '#', 'D', 'F', '#', 'L', 'N', '#', 'L'],
    ['Y', 'U', 'M', '#', '#', '#', '#', '#', '#', '#'],
    ['N', '#', 'V', '#', '#', 'B', 'A', 'S', 'H', '#'],
    ['C', '#', 'I', '#', '#', '#', 'R', 'M', '#', '#'],
    ['#', '#', 'M', 'K', 'P', 'A', 'S', 'S', 'W', 'D'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', 'I'],
    ['#', 'N', '#', 'M', '#', 'P', 'W', 'D', '#', 'R'],
    ['#', 'C', '#', 'A', 'L', 'I', 'A', 'S', '#', '#'],
    ['#', '#', '#', 'N', 'E', 'T', 'S', 'T', 'A', 'T'],
    // ['O', '#', 'D', '#', 'M', 'T', 'I', 'P', 'I', 'I', 'L', 'L', '#', '#', 'O'],
    // ['#', '#', '#', 'H', 'E', 'A', 'D', 'D', 'S', 'Q', '#', '#', '#', '#', 'U'],
    // ['K', 'I', 'L', 'L', '#', 'R', '#', 'U', 'T', 'I', 'M', 'E', 'O', 'U', 'T'],
    // ['R', '#', '#', '#', '#', '#', 'R', 'M', 'O', '#', '#', '#', '#', '#', 'E'],
    // ['C', 'H', 'M', 'O', 'D', '#', '#', 'P', 'P', 'A', 'S', 'S', 'W', 'D', '#'],
  ],
};

const Page = styled.div`
  padding: 0;
`;

const Header = styled.h1`
  margin-bottom: 1em;
`;

const Commands = styled.div``;

const Command = styled.button`
  margin-right: 1em;
`;

const CrosswordMessageBlock = styled.div`
  margin: 2em 0 4em;
  display: flex;
  gap: 2em;
  max-height: 20em;
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

//   .crossword.correct {
//     rect {
//       stroke: rgb(100, 200, 100) !important;
//     }
//     svg > rect {
//       fill: rgb(100, 200, 100) !important;
//     }
//     text {
//       fill: rgb(100, 200, 100) !important;
//     }
//   }

//   .clue.correct {
//     ::before {
//       content: '\u2713'; /* a.k.a. checkmark: ✓ */
//       display: inline-block;
//       text-decoration: none;
//       color: rgb(100, 200, 100);
//       margin-right: 0.25em;
//     }

//     text-decoration: line-through;
//     color: rgb(130, 130, 130);
//   }
// `;

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

const Messages = styled.pre`
  flex: auto;
  background-color: rgb(230, 230, 230);
  margin: 0;
  padding: 1em;
  overflow: auto;
`;

// in order to make this a more-comprehensive example, and to vet Crossword's
// features, we actually implement a fair amount...

function Appp() {
  const crossword = useRef<CrosswordImperative>(null);

  const focus = useCallback<React.MouseEventHandler>((event) => {
    crossword.current?.focus();
  }, []);

  const fillOneCell = useCallback<React.MouseEventHandler>((event) => {
    crossword.current?.setGuess(0, 2, 'O');
  }, []);

  const fillAllAnswers = useCallback<React.MouseEventHandler>((event) => {
    crossword.current?.fillAllAnswers();
  }, []);

  const reset = useCallback<React.MouseEventHandler>((event) => {
    crossword.current?.reset();
  }, []);

  // We don't really *do* anything with callbacks from the Crossword component,
  // but we can at least show that they are happening.  You would want to do
  // something more interesting than simply collecting them as messages.
  const messagesRef = useRef<HTMLPreElement>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const clearMessages = useCallback<React.MouseEventHandler>((event) => {
    setMessages([]);
  }, []);

  const addMessage = useCallback((message: string) => {
    setMessages((m) => m.concat(`${message}\n`));
  }, []);

  useEffect(() => {
    if (!messagesRef.current) {
      return;
    }
    const { scrollHeight } = messagesRef.current;
    messagesRef.current.scrollTo(0, scrollHeight);
  }, [messages]);

  // onCorrect is called with the direction, number, and the correct answer.
  const onCorrect = useCallback<Required<CrosswordProps>['onCorrect']>(
    (direction, number, answer) => {
      addMessage(`onCorrect: "${direction}", "${number}", "${answer}"`);
    },
    [addMessage]
  );

  // onLoadedCorrect is called with an array of the already-correct answers,
  // each element itself is an array with the same values as in onCorrect: the
  // direction, number, and the correct answer.
  const onLoadedCorrect = useCallback<
    Required<CrosswordProps>['onLoadedCorrect']
  >(
    (answers) => {
      addMessage(
        `onLoadedCorrect:\n${answers
          .map(
            ([direction, number, answer]) =>
              `    - "${direction}", "${number}", "${answer}"`
          )
          .join('\n')}`
      );
    },
    [addMessage]
  );

  // onCrosswordCorrect is called with a truthy/falsy value.
  const onCrosswordCorrect = useCallback<
    Required<CrosswordProps>['onCrosswordCorrect']
  >(
    (isCorrect) => {
      addMessage(`onCrosswordCorrect: ${JSON.stringify(isCorrect)}`);
    },
    [addMessage]
  );

  // onCellChange is called with the row, column, and character.
  const onCellChange = useCallback<Required<CrosswordProps>['onCellChange']>(
    (row, col, char) => {
      addMessage(`onCellChange: "${row}", "${col}", "${char}"`);
    },
    [addMessage]
  );

  // all the same functionality, but for the decomposed CrosswordProvider
  const crosswordProvider = useRef<CrosswordProviderImperative>(null);

  const focusProvider = useCallback<React.MouseEventHandler>((event) => {
    crosswordProvider.current?.focus();
  }, []);

  const fillOneCellProvider = useCallback<React.MouseEventHandler>((event) => {
    crosswordProvider.current?.setGuess(0, 2, 'O');
  }, []);

  const fillAllAnswersProvider = useCallback<React.MouseEventHandler>(
    (event) => {
      crosswordProvider.current?.fillAllAnswers();
    },
    []
  );

  const resetProvider = useCallback<React.MouseEventHandler>((event) => {
    crosswordProvider.current?.reset();
  }, []);

  const messagesProviderRef = useRef<HTMLPreElement>(null);
  const [messagesProvider, setMessagesProvider] = useState<string[]>([]);

  const clearMessagesProvider = useCallback<React.MouseEventHandler>(
    (event) => {
      setMessagesProvider([]);
    },
    []
  );

  const addMessageProvider = useCallback((message: string) => {
    setMessagesProvider((m) => m.concat(`${message}\n`));
  }, []);

  useEffect(() => {
    if (!messagesProviderRef.current) {
      return;
    }
    const { scrollHeight } = messagesProviderRef.current;
    messagesProviderRef.current.scrollTo(0, scrollHeight);
  }, [messagesProvider]);

  // onCorrect is called with the direction, number, and the correct answer.
  const onCorrectProvider = useCallback<
    Required<CrosswordProviderProps>['onCorrect']
  >(
    (direction, number, answer) => {
      addMessageProvider(`onCorrect: "${direction}", "${number}", "${answer}"`);
    },
    [addMessageProvider]
  );

  // onLoadedCorrect is called with an array of the already-correct answers,
  // each element itself is an array with the same values as in onCorrect: the
  // direction, number, and the correct answer.
  const onLoadedCorrectProvider = useCallback<
    Required<CrosswordProviderProps>['onLoadedCorrect']
  >(
    (answers) => {
      addMessageProvider(
        `onLoadedCorrect:\n${answers
          .map(
            ([direction, number, answer]) =>
              `    - "${direction}", "${number}", "${answer}"`
          )
          .join('\n')}`
      );
    },
    [addMessageProvider]
  );

  // onCrosswordCorrect is called with a truthy/falsy value.
  const onCrosswordCorrectProvider = useCallback<
    Required<CrosswordProviderProps>['onCrosswordCorrect']
  >(
    (isCorrect) => {
      addMessageProvider(`onCrosswordCorrect: ${JSON.stringify(isCorrect)}`);
    },
    [addMessageProvider]
  );

  // onCellChange is called with the row, column, and character.
  const onCellChangeProvider = useCallback<
    Required<CrosswordProviderProps>['onCellChange']
  >(
    (row, col, char) => {
      addMessageProvider(`onCellChange: "${row}", "${col}", "${char}"`);
    },
    [addMessageProvider]
  );

  const fromIpuz = useIpuz(ipuzData);

  return (
    <Page>
      <Header>REACT CROSSWORD</Header>
    

      {/* <footer className="footer">
        <p></p>
      </footer> */}
      
      {/* function App() {
  const crossword = useRef<CrosswordImperative>(null); */}
{/* 
      <p>
        This is a demo app that makes use of the @jaredreisinger/react-crossword
        component. It exercises most of the functionality, so that you can see
        how to do so.
      </p> */}

      {/* <Commands>
        <Command onClick={focus}>Focus</Command>
        <Command onClick={fillOneCell}>Fill the first letter of 2-down</Command>
        <Command onClick={fillAllAnswers}>Fill all answers</Command>
        <Command onClick={reset}>Reset</Command>
        <Command onClick={clearMessages}>Clear messages</Command>
      </Commands> */}

      {/* <CrosswordMessageBlock>
        <CrosswordWrapper>
          <Crossword
            ref={crossword}
            data={data}
            storageKey="first-example"
            onCorrect={onCorrect}
            onLoadedCorrect={onLoadedCorrect}
            onCrosswordCorrect={onCrosswordCorrect}
            onCellChange={onCellChange}
          />
        </CrosswordWrapper>

        <Messages ref={messagesRef}>{messages}</Messages>
      </CrosswordMessageBlock> */}

    {/*  <p>
        And here’s a decomposed version, showing more control of the individual
        components (intended for specific layout needs).
      </p>

      <Commands>
        <Command onClick={focusProvider}>Focus</Command>
        <Command onClick={fillOneCellProvider}>
          Fill the first letter of 2-down
        </Command>
        <Command onClick={fillAllAnswersProvider}>Fill all answers</Command>
        <Command onClick={resetProvider}>Reset</Command>
        <Command onClick={clearMessagesProvider}>Clear messages</Command>
      </Commands>

      <CrosswordMessageBlock>
        <CrosswordProviderWrapper>
          <CrosswordProvider
            ref={crosswordProvider}
            data={data}
            storageKey="second-example"
            onCorrect={onCorrectProvider}
            onLoadedCorrect={onLoadedCorrectProvider}
            onCrosswordCorrect={onCrosswordCorrectProvider}
            onCellChange={onCellChangeProvider}
          >
            <DirectionClues direction="across" />
            <CrosswordGrid />
            <DirectionClues direction="down" />
          </CrosswordProvider>
        </CrosswordProviderWrapper>

        <Messages ref={messagesProviderRef}>{messagesProvider}</Messages>
      </CrosswordMessageBlock>

      <p>A proof-of-concept for non-square crosswords:</p>

      <CrosswordMessageBlock>
        <CrosswordWrapper>
          <Crossword
            data={{
              across: {
                1: {
                  clue: 'one plus one',
                  answer: 'TWO',
                  row: 0,
                  col: 0,
                },
              },
              down: {
                2: {
                  clue: 'opposite of "off"',
                  answer: 'ON',
                  row: 0,
                  col: 2,
                },
              },
            }}
            theme={{ allowNonSquare: true }}
            storageKey="third-example"
          />
        </CrosswordWrapper>
      </CrosswordMessageBlock>

      <p>And support for IPUZ crosswords:</p> */}

      <IpuzWrapper>
        <CrosswordProvider data={fromIpuz!} storageKey="ipuz-example">
          <DirectionClues direction="across" />
          <CrosswordGrid />
          <DirectionClues direction="down" />
        </CrosswordProvider>
      </IpuzWrapper>
       
      {/* <Commands>
        <Command onClick={focus}>Focus</Command>
        <Command onClick={fillOneCell}>Fill the first letter of 2-down</Command>
        <Command onClick={fillAllAnswers}>Fill all answers</Command>
        <Command onClick={reset}>Reset</Command>
        <Command onClick={clearMessages}>Clear messages</Command>
      </Commands> */}
  <section className="button-section">
        <Link to="/level-one">
          <button className="btn btn-level-one">Level One</button>
        </Link>
        {/* <Link to="/level-two">
          <button className="btn btn-level-two">Level Two</button>
        </Link> */}
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
        <a href="https://github.com/codeDeviator" target="_blank">GitHub</a> 
    </div>
</footer>
{/* 
       <CrosswordMessageBlock> 
       <CrosswordWrapper>
          <Crossword data={fromIpuz!} storageKey="ipuz-example" />
        </CrosswordWrapper>
       </CrosswordMessageBlock>  */}
    </Page>
    // return (
    //   <Router>
    //     <Routes>
    //       {/* Landing page route */}
    //       <Route path="/" element={<LandingPage />} />
    //       {/* Crossword page route */}
    //       <Route
    //         path="/crossword"
    //         element={
    //           <div>
    //             <h1>Crossword Puzzle</h1>
    //             <Crossword
    //               data={ipuzData}
    //               onCorrect={onCorrect}
    //               onLoadedCorrect={onLoadedCorrect}
    //               onCrosswordCorrect={onCrosswordCorrect}
    //               onCellChange={onCellChange}
    //               ref={crossword}
    //             />
    //           </div>
    //         }
    //       />
    //     </Routes>
    //   </Router>
    );
  }
  
export default Appp;
