import axios from "axios";

const BASE_URL = "https://run.mocky.io/v3/0533212a-52c3-413a-9fa4-f9549f8997fe";

export default async function handler(req, res) {
  try {
    const response = await axios.get(BASE_URL);
    const userData = response.data;
    res.status(200).json(userData);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching user data" });
  }
}
