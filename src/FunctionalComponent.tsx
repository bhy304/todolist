import { useState } from 'react';

const FunctionalComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>함수형 컴포넌트</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default FunctionalComponent;
