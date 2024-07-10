import React from 'react'

const Titles = ({titles, url }) => {
  return (
    <>
        <div style={{borderRadius: '10px', backgroundColor: 'grey', padding: '10px'}}>
        <a href ={url} style={{color: 'white', cursor: 'pointer'}}>{titles}</a>
        </div>
    </>
    
  )
}

export default Titles