import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';


const IncrementButton:React.FC = () => {
    const counterContext = useContext(CounterContext);

    if(!counterContext){
        return
    }

  return (
    <button className='increment' onClick={counterContext.increment}>Imcrement</button>
  )
}


export default IncrementButton