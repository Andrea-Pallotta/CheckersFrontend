import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:5050';

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on('from_api', data => {
      setResponse(data);
    });
  }, []);
  
  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}

export default App;
