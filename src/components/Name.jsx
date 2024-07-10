import React from 'react'

function Name({ name }) {
  return (
    <div style={{borderRadius: '10px', backgroundColor: 'grey', padding: '10px'}}>
      <span>{name}</span>
    </div>
  )
}

export default Name
