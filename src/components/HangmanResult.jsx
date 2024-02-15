import './HangmanResult.css'

function HangmanResult({won,lost}) {
  return (
    <div className='result'>
      <span>Won: {won} </span>
      <span>Lost: {lost}</span>
    </div>
  )
}

export default HangmanResult