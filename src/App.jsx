import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

import { MdFoodBank, MdFamilyRestroom } from 'react-icons/md'
import { FaRegSmileBeam } from 'react-icons/fa'
import { PiPlusCircleBold, PiArrowCircleLeftBold } from 'react-icons/pi'

import data from './cards'


function App() {
  const [category, setCategory] = useState('')
  const [cards, setCards] = useState([])

  const handleCategorySelected = (categorySelected) => {
    setCategory(categorySelected)
    setCards(data.filter(card => card.category.includes(categorySelected)))
  }

  const handleNavigateBack = () => {
    setCategory('')
  }

  return (
    <>
      {category !== '' &&
        <div className='navigation'>
          <PiArrowCircleLeftBold className='category-icon' onClick={handleNavigateBack} />
        </div>
      }
      {category === '' && (
        <>
          <h1 className='title'>Categorias</h1>
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
        <div className='card-container'>
          {cards.map(card => (
            <div key={card.name} className="card">
              <img src={card.picture} alt={card.name} />
              <h4>{card.name}</h4>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default App
