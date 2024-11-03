import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const MainCounter:React.FC = () => {
    const counterContext = useContext(CounterContext);

    if(!counterContext){
        return
    }

  return (
    <div>Count: {counterContext.count}</div>
  )
}

export default MainCounter