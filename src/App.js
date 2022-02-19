import React from 'react';
import Greetings  from './Greetings/Greetings';
import Counter  from './Counter/Counter';
import CounterWithHook  from './Counter/CounterWithHook';
import LoginForm from './LoginForm/LoginForm';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';
function App() {
  return (
    <div>
      {/* <Greetings name="Svetlana" />
      <Counter/>
      <CounterWithHook />
      <h2>My Name is Svetlana</h2> */}
      {/* <LoginForm /> */}
      <ConditionalRendering />
    </div>
  );
  }

export default App;
