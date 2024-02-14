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
 const isWinner = randomWord.split("").every(letter => guessedLetters.includes(letter))
 const isLoser = wrongLetters.length > 6
 

  return (
    <div className='container'>
      <HangmanDrawing/>
      <HangmanWord  guessedLetters={guessedLetters} randomWord={randomWord} isWinner={isWinner} isLoser={isLoser}/>
      <HangmanLetters disabled={true} randomWord={randomWord} setWrongLetters={setWrongLetters} setGuessedLetters={setGuessedLetters}/>
    </div>
  )
}

export default App
