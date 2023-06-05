import axios from "axios";

export const fetchSongs = async () => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL || '';
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
};