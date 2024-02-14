function HangmanWord({guessedLetters,randomWord,isWinner,isLoser}) {


  return (
    <div>
      <p>{isWinner ? "You Win" : isLoser ? "You Lost" : null}</p>
      <p>{randomWord.split("").map((letter,index) => (
        <span className="letter" key={index} >
          <span  style={{visibility:guessedLetters.includes(letter) ? "visible" : "hidden"} }>{letter}</span>
        </span>
      ))}</p>
    </div>
  )
}

export default HangmanWord