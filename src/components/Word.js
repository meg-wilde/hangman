import React from "react";

//function to map the letters of the guessed letters into the spaces of the word
const Word = ({ word, guessedLetters }) => {
  const displayWord = word.map((letter, index) => (
    <span key={index}>{guessedLetters.includes(letter) ? letter : "_"}</span> //if the letter is not in the work leave a _
  ));
  //show the guessed work with letters and _ s
  return <div className="guessed-word">{displayWord}</div>;
};

export default Word;
