import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3/8116ef29-0632-413e-81a6-0686a279e82f';

export function usePaymentData() {
  const [paymentData, setPaymentData] = useState(null);
  const [paymentLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPaymentData = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPaymentData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentData();
  }, []);

  return { paymentData, paymentLoading, error };
}

export function usePaymentID(id) {
  const { paymentData, paymentLoading, error } = usePaymentData();
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    if (id && paymentData) {
      const foundPayment = paymentData.find((payment) => payment.id === id);
      setPayment(foundPayment || null);
    }
  }, [id, paymentData]);

  return { payment, paymentLoading, error };
}
