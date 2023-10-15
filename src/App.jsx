import { useState } from 'react'
import './App.css'

import { MdFoodBank, MdFamilyRestroom } from 'react-icons/md'
import { FaRegSmileBeam } from 'react-icons/fa'
import { PiPlusCircleBold } from 'react-icons/pi'

import data from './cards'
import Navigation from './components/navigation/Navigation'
import Responses from './components/responses/Responses'


function App() {
  const [category, setCategory] = useState('')
  const [cards, setCards] = useState([])
  const [card, setCard] = useState(null)

  const handleCategorySelected = (categorySelected) => {
    setCategory(categorySelected)
    setCards(data.filter(card => card.category.includes(categorySelected)))
  }

  const handleCardSelected = (cardSelected) => {
    setCard(cardSelected)
  }

  const handleNavigateBack = () => {
    setCategory('')
  }

  return (
    <>
      {category === '' && (
        <>
          <h1 className='title'>Categorías</h1>
          <Responses />

          <div className="categories-container">
            <div className="category" onClick={() => handleCategorySelected('FAMILIA')}>
              <MdFamilyRestroom className='category-icon' />
              <h3>FAMILIA</h3>
            </div>
            <div className="category" onClick={() => handleCategorySelected('COMIDA')}>
              <MdFoodBank className='category-icon' />
              <h3>COMIDA</h3>
            </div>
            <div className="category" onClick={() => handleCategorySelected('ENTRETENIMIENTO')}>
              <FaRegSmileBeam className='category-icon' />
              <h3>ENTRETENIMIENTO</h3>
            </div>
            <div className="category" onClick={() => handleCategorySelected('OTROS')}>
              <PiPlusCircleBold className='category-icon' />
              <h3>OTROS</h3>
            </div>
          </div>
        </>
      )}
      {category !== '' && (
        <>
          <Navigation category={category} onNavigateBack={handleNavigateBack} />
          <div className='card-container'>
            {cards.map(_card => (
              <div key={_card.name} className={`card ${card && _card.name.includes(card.name) ? 'selected' : ''}`} onClick={() => handleCardSelected(_card)}>
                <img src={_card.picture} alt={_card.name} />
                <h4>{_card.name}</h4>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default App
