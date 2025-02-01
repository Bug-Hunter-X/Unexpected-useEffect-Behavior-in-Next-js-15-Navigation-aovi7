```javascript
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

export default function About() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, [router.asPath]); // Add router.asPath as a dependency

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```