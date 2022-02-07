import React, { useState, useEffect } from 'react'

const FetchApp = props => {
  const [fact, setFact] = useState('')
  const [fruitData, setFruitData] = useState([])

  useEffect(async () => {
    const response = await fetch('https://whiskyhunter.net/api/distilleries_info/', {
      method: 'GET',
      mode: 'cors'
    })
    const data = await response.json()
    console.log(data.slice(0, 10))
    setFruitData(data.slice(0, 10))
  }, [])
  
  const getCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact')
    const data = await response.json()
    setFact(data.fact)
  }

  return(
    <div>
      <button onClick={e => getCatFact()}>Get a Cat Fact</button>
      <h3>{fact}</h3>
      <br />
      <ul>
        {fruitData.map((datum, i) => (
          <li key={i}>
            <p>{datum.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default FetchApp