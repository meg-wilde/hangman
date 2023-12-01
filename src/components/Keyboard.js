import React from "react";

const Keyboard = ({ onClick }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; //create the alphabet

  return (
    <div className="keyboard">
      {alphabet.split("").map(
        (
          letter //split the alphabet into letters
        ) => (
          //assign each letter to a button
          <button
            key={letter}
            onClick={() => onClick(letter)}
            className="keyboard-button"
          >
            {letter}
          </button>
        )
      )}
    </div>
  );
};

export default Keyboard;
