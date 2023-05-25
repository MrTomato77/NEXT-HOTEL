import axios from "axios";

const BASE_URL = "https://run.mocky.io/v3/8116ef29-0632-413e-81a6-0686a279e82f";

export default async function handler(req, res) {
  try {
    const response = await axios.get(BASE_URL);
    const paymentData = response.data;
    res.status(200).json(paymentData);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching payment data" });
  }
}
