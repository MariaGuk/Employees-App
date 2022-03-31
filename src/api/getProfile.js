import axios from 'axios';

const getProfile = async () => {
  const { data } = await axios.get('https://api-for-masha.herokuapp.com/api/profile');
  return data
};

export { getProfile }