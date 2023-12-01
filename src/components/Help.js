import React, { useState } from "react";

//create a function to toggle on or off a button to show help
const Help = () => {
  const [isHelpVisible, setHelpVisible] = useState(false);

  //if button is clicked change the toggle between help visible or help not visible
  const toggleHelp = () => {
    setHelpVisible(!isHelpVisible);
  };

  return (
    <div>
      <button
        onClick={toggleHelp}
        //button will have the classes help-selected or help-button depending on toggle state
        className={isHelpVisible ? "help-selected" : "help-button"}
      >
        {/* Text on button will say Show help or Hide help depending on toggle state */}
        {isHelpVisible ? "Hide Help" : "Show Help"}
      </button>

      {/* if button is toggled to show help then the rules will show */}
      {isHelpVisible && (
        <div>
          {/* Rules */}
          <p>Hangman Game Rules:</p>
          <p>
            1. Guess the word by clicking the letters to guess a letter.
            <br></br>
            2. If the letter is in the word it will fill in the blank space.
            <br></br>
            3. If the letter is not in the word you will lose a life.<br></br>
            4. You must guess the word within 11 guesses to win.<br></br>
          </p>
        </div>
      )}
    </div>
  );
};

export default Help;
