import { useState, useEffect } from 'react';

export const useWebSocket = (url: string) => {
  const [message, setMessage] = useState<string | null>(null);

useEffect(() => {
  const socket = new WebSocket(url);

  socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
  });

  socket.onopen = () => {
    console.log('WebSocket connected');
  };

  socket.onmessage = (event) => {
    console.log('Message received:', event.data);
    setMessage(event.data)
  };

  socket.onclose = (event) => {
    console.log('WebSocket disconnected:', event.code, event.reason);
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  // return () => {
  //   console.log('Unmount');
  //   socket.close(1000, 'Component unmounted'); 
  // };
}, []);

  return message;
};