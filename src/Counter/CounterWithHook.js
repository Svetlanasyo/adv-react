import React from 'react';

function CounterWithHook()  {
  
  let title = "Counter";
  const [clickCounter, setClickCounter] = React.useState(0);

  function setCounter(counter)
  {
    console.log("setCounter");
    setClickCounter(counter);
  }

  function setTitle()
  {
    console.log(title);
    title = "Updated counter";
    console.log(title);

  }

  function renderClickCount()
  {
    return <p>Counter: {clickCounter}</p>
  }
    return (
      <div>
        {title}
        {renderClickCount()}
        <button onClick={() => setCounter(clickCounter+1)}>+1</button>
        <button onClick={setTitle()}>Update title</button>
      </div>
    )

}

export default CounterWithHook;
