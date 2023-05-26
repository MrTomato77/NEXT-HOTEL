import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = "https://run.mocky.io/v3/f8f7aca8-015a-4d52-bf26-f459a785a3dc";

export const useRoomData = () => {
  const [roomData, setRoomData] = useState([]);
  const [roomLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setRoomData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { roomData, roomLoading, error };
};

export const useRoomID = (id) => {
  const { roomData, roomLoading, error } = useRoomData();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    if (id && roomData.length > 0) {
      const foundRoom = roomData.find((room) => room.id === Number(id));
      setRoom(foundRoom || null);
    }
  }, [id, roomData]);

  return { room, loading, error };
};
