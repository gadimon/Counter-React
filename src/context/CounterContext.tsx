import React, {createContext, ReactNode, useContext, useState } from "react";

interface CounterContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

interface CounterProviderProps {
    children: ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)
    const reset = () => setCount(0)
    return(
        <CounterContext.Provider value={ {count, increment, decrement, reset} }>
        { children }
        </CounterContext.Provider>
    );
};