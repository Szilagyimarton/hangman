import './HangmanDrawing.css'
function HangmanDrawing({wrongLetters}) {
  return (
    <div className='hangmanDrawing'>
      <div className="left-leg" style={{visibility: wrongLetters.length >= 10 ? "visible" : "hidden"}}></div>
      <div className="right-leg" style={{visibility: wrongLetters.length >= 9 ? "visible" : "hidden"}}></div>
      <div className="left-arm" style={{visibility: wrongLetters.length >= 8 ? "visible" : "hidden"}}></div>
      <div className="right-arm" style={{visibility: wrongLetters.length >= 7 ? "visible" : "hidden"}}></div>
      <div className="body" style={{visibility: wrongLetters.length >= 6 ? "visible" : "hidden"}}></div>
      <div className="head" style={{visibility: wrongLetters.length >= 5 ? "visible" : "hidden"}}></div>
      <div className="hanger" style={{visibility: wrongLetters.length >= 4 ? "visible" : "hidden"}}></div>
      <div className="topLine" style={{visibility: wrongLetters.length >= 3 ? "visible" : "hidden"}}></div>
      <div className="verticalLine" style={{visibility: wrongLetters.length >= 2 ? "visible" : "hidden"}}></div>
      <div className="bottomLine" style={{visibility: wrongLetters.length >= 1 ? "visible" : "hidden"}}></div>
      
    </div>
  );
}

export default HangmanDrawing;
