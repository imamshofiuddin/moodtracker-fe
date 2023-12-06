import { useState } from 'react';
import Button from './Button.tsx';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)}>
      count is
      <span className="ml-1">{count}</span>
    </Button>
  );
}
