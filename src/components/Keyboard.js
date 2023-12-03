import React, { useState } from "react";

//set a state for the keyboard button to track if it has been clicked
const KeyboardButton = ({ letter, onClick }) => {
  const [clicked, setClicked] = useState(false);

  //when the button is clicked set the clicked state to true
  const handleClick = () => {
    setClicked(true);
    onClick(letter);
  };

  //when the button is clicked add the class name
  const buttonClassName = clicked
    ? "keyboard-button-clicked"
    : "keyboard-button";

  return (
    <button key={letter} onClick={handleClick} className={buttonClassName}>
      {letter}
    </button>
  );
};

const Keyboard = ({ onClick }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; //create the alphabet

  //split the letters into keys
  return (
    <div className="keyboard">
      {alphabet.split("").map((letter) => (
        <KeyboardButton key={letter} letter={letter} onClick={onClick} />
      ))}
    </div>
  );
};

export default Keyboard;
