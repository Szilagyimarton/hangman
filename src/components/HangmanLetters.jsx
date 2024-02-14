import { useState } from "react"

function HangmanLetters({ setGuessedLetters,randomWord,setWrongLetters }) {
  const [clicked, setClicked] = useState([])
  
  const handleClick = (e,index) => {
       setGuessedLetters(prev => [...prev,e.target.value])
       setClicked(prev => [...prev, index])
    if(!randomWord.includes(e.target.value)){
      setWrongLetters(prev => [...prev,e.target.value])
    }
  }
  const isClicked = (index) => {
    return clicked.includes(index)
  }

  const letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  return (
    <div>
      {letters.map((letter,index) => <button disabled={isClicked(index)} value={letter} key={index} onClick={(e) =>handleClick(e,index)}>{letter}</button>)}
    </div>
  )
}

export default HangmanLetters