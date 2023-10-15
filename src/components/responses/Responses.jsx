import { useState } from 'react'
import './Responses.css'

import { PiCheckFatFill } from 'react-icons/pi'
import { ImCross } from 'react-icons/im'

const Responses = () => {

    const [response, setResponse] = useState('')

    const handleResponseSelected = (responseSelected) => {
        setResponse(responseSelected)
      }

    return (
        <div className="responses-container">
            <div className={`response ${response === 'YES' ? 'selected' : ''} response-yes`} onClick={() => handleResponseSelected('YES')}>
                <PiCheckFatFill className='response-icon' />
                <h3>SÍ</h3>
            </div>
            <div className={`response ${response === 'NO' ? 'selected' : ''} response-no`} onClick={() => handleResponseSelected('NO')}>
                <ImCross className='response-icon' />
                <h3>NO</h3>
            </div>
        </div>
    )
}

export default Responses