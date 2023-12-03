import React, { useState, useEffect } from "react";
import Hangman from "./components/Hangman";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Help from "./components/Help";
import Popup from "./components/Popup";
import "./App.css";

const App = () => {
  const [word] = useState(["d", "e", "v", "e", "l", "o", "p", "e", "r"]); //winning word
  //sync the state of the 3 functions into a combined state called gameState
  const [gameState, setGameState] = useState({
    guessedLetters: [],
    incorrectGuesses: 0,
    keyboardKey: 0,
  });
  const [showPopup, setShowPopup] = useState(false); // New state for showing/hiding the popup
  const [popupMessage, setPopupMessage] = useState(""); // Message to display in the popup
  // const [keyboardKey, setKeyboardKey] = useState(0); // Add a state for the key prop

  useEffect(() => {
    // Check for win or loss conditions
    const guessedWord = word.every((letter) =>
      gameState.guessedLetters.includes(letter)
    ); //if every letter matches the word = win
    const lostGame = gameState.incorrectGuesses >= 10; //if the have more than 11 incorrect guesses

    if (guessedWord) {
      handlePopup("You won!"); //if they win show popup with You Won
    } else if (lostGame) {
      handlePopup("You lost!"); //if they lose show popup with You Lost
    }
  }, [gameState.guessedLetters, gameState.incorrectGuesses, word]);

  const handlePopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  //if a letter is clicked and its not already in the guessesLetters array
  const handleLetterClick = (letter) => {
    if (!gameState.guessedLetters.includes(letter)) {
      setGameState((prevGameState) => ({
        ...prevGameState,
        guessedLetters: [...prevGameState.guessedLetters, letter],
      })); //add it to the guessed letters array

      //if the letter is not in the winning word
      if (!word.includes(letter)) {
        setGameState((prevGameState) => ({
          ...prevGameState,
          incorrectGuesses: prevGameState.incorrectGuesses + 1,
        }));
      }
    }
  };

  //function to restart the same
  const handleRestart = () => {
    //use synced state for resetting the game state
    setGameState((prevGameState) => ({
      guessedLetters: [],
      incorrectGuesses: 0,
      keyboardKey: prevGameState.keyboardKey + 1,
    }));
    setShowPopup(false);
  };

  return (
    <>
      <main>
        <h1>Hangman</h1>
        <p>Lets play hangman</p>
        {/* pull the images from Hangman component */}
        <Hangman incorrectGuesses={gameState.incorrectGuesses} />
        <Word word={word} guessedLetters={gameState.guessedLetters} />
        <p>Pick a letter</p>
        {/* trigger the handleLetterClick function if a letter is clicked */}
        <Keyboard key={gameState.keyboardKey} onClick={handleLetterClick} />
        {/* trigger the handleRestart function is restart is clicked */}
        <button onClick={handleRestart} className="restart-button">
          Restart Game
        </button>
        {/* handle the show/hide help from the Help component */}
        <Help />
      </main>
      {showPopup && <Popup message={popupMessage} onRestart={handleRestart} />}
    </>
  );
};

export default App;
