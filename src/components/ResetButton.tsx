import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const ResetButton: React.FC = () => {
    const counterContext = useContext(CounterContext);

    if(!counterContext){
        return
    }
  return (
    <button className='reset' onClick={counterContext.reset}>Reset</button>
  )
}

export default ResetButton