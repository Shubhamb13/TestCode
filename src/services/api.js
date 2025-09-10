import axios from 'axios';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=1000');
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
