import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';

const DecrementButton:React.FC = () => {
    const counterContext = useContext(CounterContext);

    if(!counterContext){
        return
    }

  return (
    <button className='decrement' onClick={counterContext.decrement}>Decrement</button>
  )
}

export default DecrementButton