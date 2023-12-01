import React, { useState, useEffect } from "react";
import Hangman from "./components/Hangman";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Help from "./components/Help";
import "./App.css";

const App = () => {
  const [word] = useState(["d", "e", "v", "e", "l", "o", "p", "e", "r"]); //winning word
  const [guessedLetters, setGuessedLetters] = useState([]); //create state array to add guessed letters
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); //create state to add number of incorrect guesses

  useEffect(() => {
    // Check for win or loss conditions
    const guessedWord = word.every((letter) => guessedLetters.includes(letter)); //if every letter matches the word = win
    const lostGame = incorrectGuesses >= 11; //if the have more than 11 incorrect guesses

    if (guessedWord) {
      alert("You won!"); //if they win alert You Won
    } else if (lostGame) {
      alert("You lost!"); //if they lose alert You Lost
    }
  }, [guessedLetters, incorrectGuesses, word]);

  //if a letter is clicked and its not already in the guessesLetters array
  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]); //add it to the guessed letters array

      //if the letter is not in the winning word
      if (!word.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1); //increase number of incorrect guesses by 1
      }
    }
  };

  //if the user wants to restart
  const handleRestart = () => {
    setGuessedLetters([]); //empty the guessed letters array
    setIncorrectGuesses(0); //reset the incorrect guesses to 0
  };

  return (
    <>
      <h1>Hangman Game</h1>
      {/* pull the images from Hangman component */}
      <Hangman incorrectGuesses={incorrectGuesses} />
      <Word word={word} guessedLetters={guessedLetters} />
      {/* trigger the handleLetterClick function if a letter is clicked */}
      <Keyboard onClick={handleLetterClick} />
      {/* trigger the handleRestart function is restart is clicked */}
      <button onClick={handleRestart} className="restart-button">
        Restart Game
      </button>
      {/* handle the show/hide help from the Help component */}
      <Help />
    </>
  );
};

export default App;
