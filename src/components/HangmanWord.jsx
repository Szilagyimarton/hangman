import './HangmanWord.css'

function HangmanWord({guessedLetters,randomWord,isWinner,isLoser}) {
  return (
    <div className='hangmanWord'>
      <p>{isWinner ? "You Win" : isLoser ? "You Lost" : null}</p>
      <div>{randomWord.split("").map((letter,index) => (
        <span className="wordToGuess" key={index} >
          <span  style={{visibility:guessedLetters.includes(letter) || isLoser ? "visible" : "hidden", color: guessedLetters.includes(letter) ? "black" : "red"}}>{letter}</span>
        </span>
      ))}</div>
    </div>
  )
}

export default HangmanWord