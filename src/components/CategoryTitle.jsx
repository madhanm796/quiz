import React from 'react'

function CategoryTitle({name}) {
  return (
    <div style={{
      width: '100%',
      padding: '16px',
      textAlign: 'left'
    }}>
        <h2 style={{
            margin: 0, }}>
                {name || 'All Topics'}
        </h2>
    </div>
  )
}

export default CategoryTitle