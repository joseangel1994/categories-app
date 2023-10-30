import { useState } from 'react'
import './App.css'

import { MdFoodBank, MdFamilyRestroom } from 'react-icons/md'
import { FaRegSmileBeam } from 'react-icons/fa'
import { PiPlusCircleBold } from 'react-icons/pi'

import data3 from './cards'
import Navigation from './components/navigation/Navigation'
import Responses from './components/responses/Responses'


function App() {
  const [isMainPage, setIsMainPage] = useState(true)
  const [cards, setCards] = useState(data3.filter(_card => _card.parentCategory === 'HABITACIONES'))
  const [card, setCard] = useState(null)

  const handleCardSelected = (cardSelected) => {
    const filteredCards = data3.filter(_card => _card.parentCategory.includes(cardSelected.name))
    if (filteredCards.length > 0) {
      setCards(filteredCards)
    } else {
      setCard(cardSelected)
    }

    setIsMainPage(false)

  }

  const handleNavigateBack = () => {
    setCards(data3.filter(_card => _card.parentCategory === 'HABITACIONES'))
    setCard(null)
    setIsMainPage(true)
  }

  return (
    <>
      <h1 className='title'>Categorías</h1>
      {isMainPage ? (
        <Responses />
        ) : (
        <Navigation onNavigateBack={handleNavigateBack} />
      )}

      <div className='card-container'>
        {cards.map(_card => (
          <div key={_card.name} className={`card ${card && _card.name.includes(card.name) ? 'selected' : ''}`} onClick={() => handleCardSelected(_card)}>
            <img src={_card.picture} alt={_card.name} />
            <h4>{_card.name}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
