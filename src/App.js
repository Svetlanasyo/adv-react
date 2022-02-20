import React from 'react';
import Greetings  from './Greetings/Greetings';
import Counter  from './Counter/Counter';
import CounterWithHook  from './Counter/CounterWithHook';
import LoginForm from './LoginForm/LoginForm';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';
import Quiz from './Quiz/Quiz';
import BoardGame from './BoardGame/BoardGame';
import Lifecycle from './Lifecycle/Lifecycle';
import FetchApi from './FetchApi/FetchApi';
function App() {
  return (
    <div>
      {/* <Greetings name="Svetlana" />
      <Counter/>
      <CounterWithHook />
      <h2>My Name is Svetlana</h2> */}
      {/* <LoginForm /> */}
      {/* <ConditionalRendering /> */}
      {/* <Quiz /> */}
      {/* <BoardGame /> */}
      {/* <Lifecycle /> */}
      <FetchApi />
    </div>
  );
  }

export default App;
