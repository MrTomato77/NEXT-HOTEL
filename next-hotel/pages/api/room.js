import axios from "axios";

const BASE_URL = "https://run.mocky.io/v3/f8f7aca8-015a-4d52-bf26-f459a785a3dc";

export default async function handler(req, res) {
  try {
    const response = await axios.get(BASE_URL);
    const roomData = response.data;
    res.status(200).json(roomData);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching room data" });
  }
}
