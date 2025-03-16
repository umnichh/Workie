import { useEffect, useRef, useState } from "react";
interface Project {
  id: number,
  name: string,
  CreatedAt: Date;
}
export const useWebSocket = () => {
  const socket = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    socket.current = new WebSocket('ws://62.113.98.50:8080/ws')

    socket.current.onopen = () => {
      console.log('Websocket connected')
      setIsConnected(true)
    }

    socket.current.onclose = (event) => {
      console.log('Websocket disconnected with code: ' + event.code + ', reason: ' + event.reason);
      setIsConnected(false)
    }

    socket.current.onmessage = (event) => {
      const object = JSON.parse(event.data);
      console.log('Websocket message', object)
      switch (object.type) {
        case "projects": {
          setProjects(object.data)
        }
      }
      console.log(object)
    }

    socket.current.onerror = (error) => {
      console.error(error);
    }

    return () => {
      socket.current?.close();
    };  
  }, []);

  return {
    isConnected,
    projects,
  }
}

