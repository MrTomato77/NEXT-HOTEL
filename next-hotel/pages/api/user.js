import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3/0533212a-52c3-413a-9fa4-f9549f8997fe';

export function useUserData() {
  const [userData, setUserData] = useState(null);
  const [userLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setUserData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return { userData, userLoading, error };
}

export function useUserID(id) {
  const { userData, userLoading, error } = useUserData();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id && userData) {
      const foundUser = userData.find((user) => user.id === id);
      setUser(foundUser || null);
    }
  }, [id, userData]);

  return { user, userLoading, error };
}
