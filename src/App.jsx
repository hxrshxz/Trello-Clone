import React, { useState } from 'react'
import Board from './Components/Board'
import Card from './Components/Card'
import List from './Components/List'
import './styles.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

export default function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Header */}
            <Header isOpen={isOpen} />

            <div style={{ display: 'flex', flex: 1, marginTop: '50px',zIndex: 1000    }}>
                {/* Sidebar */}
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

                {/* Main content area (List component) */}
                <div
                    style={{
                        zIndex: -1,
                        flex: 1, // Take up remaining space after Sidebar
                        marginLeft: isOpen ? '200px' : '20px', // Adjust padding based on sidebar state
                        transition: 'all 0.5s ease', // Smooth transition for padding change
                        position: 'relative',
                    }}
                >
                    <List />
                </div>
            </div>
        </div>
    )
}
