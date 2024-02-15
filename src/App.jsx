import {  useState } from 'react'
import './App.css'
import words from './wordsForGame.json'
import HangmanLetters from './components/HangmanLetters'
import HangmanWord from './components/HangmanWord'
import HangmanDrawing from './components/HangmanDrawing'

function App() {
 const [randomWord,setRandomWord] = useState(() => words[Math.floor(Math.random() * words.length)])
 const [guessedLetters,setGuessedLetters] = useState("")
 const [wrongLetters,setWrongLetters] = useState([])
 const [clicked, setClicked] = useState([])
 const isWinner = randomWord.split("").every(letter => guessedLetters.includes(letter))
 const isLoser = wrongLetters.length === 10
 

  return (
    <div className='container'>
      <HangmanDrawing wrongLetters={wrongLetters}/>
      <HangmanWord  guessedLetters={guessedLetters} randomWord={randomWord} isWinner={isWinner} isLoser={isLoser}/>
      <HangmanLetters isWinner={isWinner} isLoser={isLoser} randomWord={randomWord} setWrongLetters={setWrongLetters} setGuessedLetters={setGuessedLetters} clicked={clicked} setClicked={setClicked}/>
      <button className="newGame" onClick={() => {
        setGuessedLetters("")
        setWrongLetters([])
        setClicked([])
        setRandomWord(() => words[Math.floor(Math.random() * words.length)])
      }} style={{visibility: isLoser || isWinner ? "visible" : 'hidden'}}>New Game</button>
    </div>
  )
}

export default App
