import confetti from "canvas-confetti";
import { useState } from "react";
import "./App.css";

function App() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [yesButtonSize, setYesButtonSize] = useState(1);

  const handleYesClick = () => {
    setIsAccepted(true);
    // Trigger Confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff4d6d", "#ff758f", "#ffb3c1", "#ffffff"],
    });
  };

  const moveButton = () => {
    // Mobile & Desktop safe bounds
    const padding = 20;
    const maxWidth = window.innerWidth - 100 - padding;
    const maxHeight = window.innerHeight - 50 - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxHeight));

    setNoButtonStyle({
      position: "fixed",
      left: `${randomX}px`,
      top: `${randomY}px`,
      zIndex: 999,
    });

    // Make the Yes button grow to encourage clicking it
    setYesButtonSize((prev) => prev + 0.15);
  };

  if (isAccepted) {
    return (
      <div className="container">
        <div className="card">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueXlyZ3R3YnJueHh6eXJueHh6eXJueHh6eXJueHh6eXJueHgmZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/c76IJLufpNwSULPk77/giphy.gif"
            alt="Success"
            className="cat-img"
          />
          <h1 className="success-text" style={{ color: "red" }}>
            Hehe, I knew it! ❤️
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <div className="cat-icon-container">
          <div className="cat-face">
            <div className="cat-ear left"></div>
            <div className="cat-ear right"></div>
            <div className="cat-eye-left"></div>
            <div className="cat-eye-right"></div>
            <div className="cat-nose"></div>
          </div>
          <div className="heart-icon">❤️</div>
        </div>

        <h1 className="question">Will you be my Valentine?</h1>

        <div className="btn-group">
          <button
            className="yes-btn"
            style={{ transform: `scale(${yesButtonSize})` }}
            onClick={handleYesClick}
          >
            Yes
          </button>

          <button
            className="no-btn"
            onMouseEnter={moveButton}
            onTouchStart={moveButton}
            style={noButtonStyle}
          >
            No
          </button>
        </div>
        <p className="subtext">"No" seems a bit shy 😈</p>
      </div>
    </div>
  );
}

export default App;
