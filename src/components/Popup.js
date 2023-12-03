import React from "react";

//create a function to display a popup when the game is over
const Popup = ({ message, onRestart }) => {
  return (
    <div className="popup">
      <p>{message}</p>
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
};

export default Popup;
