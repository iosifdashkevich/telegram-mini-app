import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const testAPI = async () => {
    const res = await fetch('/api/test');
    const data = await res.json();
    setMessage(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Telegram Mini App с ff.io</h1>
      <button onClick={testAPI} style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
        Проверить API
      </button>
      <pre style={{ marginTop: '1rem', background: '#f0f0f0', padding: '1rem' }}>
        {message}
      </pre>
    </div>
  );
}
