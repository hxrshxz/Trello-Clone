import React from 'react'

export default function CardAdd() {

  const addCard = document.getElementById('addCard')
  addCard.addEventListener('click', () => {
    addCard.toggleAttribute('hidden');
  })


  return (
    <div>

    </div>
  )
}
