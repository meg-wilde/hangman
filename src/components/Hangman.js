import React from "react";
import state0 from "../images/state0.gif"; //import all the images
import state1 from "../images/state1.gif";
import state2 from "../images/state2.gif";
import state3 from "../images/state3.gif";
import state4 from "../images/state4.gif";
import state5 from "../images/state5.gif";
import state6 from "../images/state6.gif";
import state7 from "../images/state7.gif";
import state8 from "../images/state8.gif";
import state9 from "../images/state9.gif";
import state10 from "../images/state10.gif";

//create an array of the images so you can reference them easily
const stateImages = [
  state0,
  state1,
  state2,
  state3,
  state4,
  state5,
  state6,
  state7,
  state8,
  state9,
  state10,
];

//function to show the hangman images based on the number of incorrect guesses
const Hangman = ({ incorrectGuesses }) => {
  return (
    <img
      src={stateImages[incorrectGuesses]} //the image src is the index of the number of incorrect guesses in the array
      alt={`Hangman stage ${incorrectGuesses}`}
      className="hangman-image" //alt text uses the number of incorrect guesses to add the name
    />
  );
};

export default Hangman;
