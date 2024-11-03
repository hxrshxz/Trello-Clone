import React, { useState } from 'react'

export default function Sidebar({ isOpen, setIsOpen }) {


  return (
    <div style={{
      position: 'fixed',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: isOpen ? 'space-between' : 'center',
      top: '0',
      left: '0',
      // minWidth: '200px',
      height: '100vh',
      backgroundColor: '#0079bf',
      color: 'white',
      padding: '10px',
      boxSizing: 'border-box',
      width: isOpen ? '200px' : '10px',
      // overflow: isOpen ? 'visible' : 'hidden',  // Hide content when closed
      transition: 'width 0.4s ease',  // Add smooth transition
    }}>
      {isOpen && (
        <ul style={{ margin: '10px', padding: '0px', listStyleType: 'none' }}>
          <li>Home</li>
          <li>My Boards</li>
          <li>Notifications</li>
          <li>Settings</li>
        </ul>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          height: '30px',
          position: 'fixed',
          left: isOpen ? '161px' : '2px',
          width: isOpen ? '30px' : '15px',
          borderRadius: '10%',
          padding: '1px',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          cursor: 'pointer',
          marginLeft: '0px',
          transition: 'left 0.4s ',
        }}
      >
        {isOpen ? 'x' : '>'}
      </button>
    </div>
  )
}
