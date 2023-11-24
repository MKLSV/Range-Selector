import React, { useState } from 'react'
import './assets/App.css'
function App() {

  const maxPrice = '1000' //Максимальное значение 


  const [minRangeValue, setMinRangeValue] = useState('100')
  const [maxRangeValue, setMaxRangeValue] = useState('900')
  const [minInputValue, setMinInputValue] = useState('100')
  const [maxInputValue, setMaxInputValue] = useState('900')


  const handleminValueChange = (e) => {
    const value = e.target.value
    if (e.target.className === 'range') {
      if (parseInt(value) < parseInt(maxRangeValue) - parseInt(maxPrice) / 10) {
        setMinRangeValue(value)
        setMinInputValue(value)
      }
    }
    else {
      if (value === '') setMinInputValue(0)
      if (value === '-' || parseInt(value) < 0) setMinInputValue(0)
      if(parseInt(value) == value && parseInt(value) < parseInt(maxPrice)){
        setMinInputValue(parseInt(value))
        if (parseInt(value) < parseInt(maxRangeValue) - parseInt(maxPrice) / 10) setMinRangeValue(parseInt(value))
      }
    }
  }

  const handlemaxValueChange = (e) => {
    const value = e.target.value
    if (e.target.className === 'range') {
      if (parseInt(value) > parseInt(minRangeValue) + parseInt(maxPrice) / 10) {
        setMaxRangeValue(value)
        setMaxInputValue(value)
      }
    }
    else {
      if (value === '') setMaxInputValue(0)
      if (value === '-' || parseInt(value) < 0) setMaxInputValue(0)
      if (parseInt(value) == value) {
        setMaxInputValue(parseInt(value))
        if (parseInt(value) > parseInt(minRangeValue) + parseInt(maxPrice) / 10) setMaxRangeValue(value)
        if (parseInt(value) > parseInt(maxPrice)){
          setMaxRangeValue(maxPrice)
          setMaxInputValue(maxPrice)
        } 
      }
    }
  }

  return (
    <div className="App">
      <div className="range-container">
        <div className="value-container">
          <div className="value-section">
            <input className='value' type="text" value={minInputValue} onChange={handleminValueChange} />
            <span>₽</span>
          </div>
          <div className="value-section" style={parseInt(maxInputValue) > 9999 ? { width: '52px' } : { width: '50px' }}>
            <input className='value' type="text" value={maxInputValue} onChange={handlemaxValueChange} style={parseInt(maxInputValue) > 9999 ? { width: '38px' } : { width: '30px' }} />
            <span>₽</span>
          </div>
        </div>
        <div className="range-section">
          <div className="slider">
            <div className="progres"
              style={{
                left: parseInt(minRangeValue) / parseInt(maxPrice) * 90 + '%',
                right: 100 - parseInt(maxRangeValue) / parseInt(maxPrice) * 90 + '%'
              }}
            ></div>
          </div>

          <div className="ranges">
            <input
              className='range'
              type="range"
              min="0" max={maxPrice}
              value={minRangeValue}
              onChange={handleminValueChange}
            />
            <input
              className='range'
              type="range"
              min="0" max={maxPrice}
              value={maxRangeValue}
              onChange={handlemaxValueChange}
            />

          </div>
        </div>
      </div>
    </div>
  )
}
export default App
