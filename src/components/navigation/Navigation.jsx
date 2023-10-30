import { PiArrowCircleLeftBold } from 'react-icons/pi'
import './Navigation.css'

const Navigation = ({category, onNavigateBack}) => {
    return (
        <div className='navigation' onClick={onNavigateBack}>
          <PiArrowCircleLeftBold className='category-icon' />
          <h2>Volver al inicio</h2>
        </div>
    )
}

export default Navigation