import axios from 'axios';
import {
  fetchCardRequest,
  fetchCardSuccess,
  fetchCardError,
} from '../actions/index';

const fetchingCard = ({ dispatch, url }) => {
  dispatch(fetchCardRequest);
  const requestingCard = async () => {
    try {
      const request = await axios.get(`https://api.magicthegathering.io/v1/cards/${url}`);
      const { data } = request;
      console.log(data);
      dispatch(fetchCardSuccess(data.card));
      return data;
    } catch (error) {
      dispatch(fetchCardError(error.message));
      return error;
    }
  };
  requestingCard();
};

export default fetchingCard;
