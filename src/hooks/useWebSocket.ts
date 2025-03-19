import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Project } from "@/types/sidebar.types";
import { useNavigate } from "react-router-dom";

export const useWebSocket = () => {
  const socket = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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
      const { data, type} = JSON.parse(event.data);
      console.log('Websocket message', data)
      switch (type){
        case 'project': {
          navigate(`/projects/${data.id}`)
          queryClient.setQueryData(["projects"], (prev : Project[]) => prev ? [...prev, data] : data);
          
        }
      }
    }

    socket.current.onerror = (error) => {
      console.error(error);
    }

  }, []);

  return {
    isConnected,
  }
}

