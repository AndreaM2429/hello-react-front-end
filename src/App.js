import './App.css';
import Greeting from './components/greeting';
import { useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/greeting/GreetingSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;
