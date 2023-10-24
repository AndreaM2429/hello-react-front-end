import React from 'react';
import { useSelector } from 'react-redux';

function Greeting() {
  const { greeting } = useSelector((state) => state.greeting);
  return (
    <main>
      <h1>Random greeting</h1>
      <span>{greeting.text}</span>
    </main>
  );
}

export default Greeting;
