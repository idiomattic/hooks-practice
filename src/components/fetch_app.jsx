import React, { useState } from 'react'

const FetchApp = props => {
  const [fact, setFact] = useState('')
  
  const getRandomFact = async () => {
    const response = await fetch('https://catfact.ninja/fact')
    const data = await response.json()
    setFact(data.fact)
  }

  return(
    <div>
      <button onClick={e => getRandomFact()}>Get a Cat Fact</button>
      <h3>{fact}</h3>
    </div>
  )

}

export default FetchApp