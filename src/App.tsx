import './App.css'
import DecrementButton from './components/DecrementButton';
import IncrementButton from './components/incrementButton';
import MainCounter from './components/mainCounter';
import ResetButton from './components/ResetButton';
import { CounterProvider } from './context/CounterContext'


const App: React.FC = () => {

  return (
    <CounterProvider>
      <div className='contaner'>
          <MainCounter/>
          <IncrementButton/>
          <DecrementButton/>
          <ResetButton/>
      </div>
    </CounterProvider>
  );
};


export default App
