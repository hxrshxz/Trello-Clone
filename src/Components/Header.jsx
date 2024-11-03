import React from 'react'

export default function Header({ isOpen }) {
  return (
    <div>
      <div style={{
        display: 'flex',
        height: '50px',
        backgroundColor: 'rgba(186, 191, 192, 0.8)',
        color: '#172b4d',
        flexDirection: 'row',
        position: 'fixed',
        zIndex: -1, // Set zIndex to positive value to bring the header to the front
        justifyContent: 'space-between',
        alignItems: 'center',
        left: isOpen ? '200px' : '10px',  // Dynamically adjust the 'left' based on isOpen
        width: isOpen ? '70vw' : '99vw',
        transition: 'width 0.5s ease, left 0.5s ease',  // Add transition for left positioning as well
        boxSizing: 'border-box',
      }}>
        <div style={{ marginLeft: '20px' }}>Header</div>
        <div style={{ marginRight: '20px' }}>Share</div>
      </div>
    </div>
  )
}
