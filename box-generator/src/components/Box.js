import React, { useState } from 'react'

const Box = () => {
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [colorArr, setColorArr] = useState([])

  const handleAddingBox = e => {
    e.preventDefault()
    setColorArr([...colorArr, { color: color, size: size + 'px' }])
    setColor('')
    setSize('')
  }

  return (
    <div>
      <form className='form' onSubmit={handleAddingBox}>
        <label> Color </label>
        <input
          type='text'
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <label> Box size </label>
        <input
          type='number'
          value={size}
          onChange={e => setSize(e.target.value)}
        ></input>
        <button> Submit </button>
      </form>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {colorArr.map((item, index) => (
          <div
            style={{
              margin: '10px',
              height: item.size,
              width: item.size,
              backgroundColor: item.color
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Box
