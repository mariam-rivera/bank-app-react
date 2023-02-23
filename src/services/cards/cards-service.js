import axios from 'axios';
const url = 'https://bank-app-react-default-rtdb.firebaseio.com/cards.json';

export const cardService = async () => {
  const res = await axios.get(url);
  return res.data;
};
