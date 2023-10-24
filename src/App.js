import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Greeting from './components/greeting.jsx';
import { fetchGreeting } from './redux/greeting/GreetingSlice.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className="App">
      < Greeting />
    </div>
  );
}

export default App;
