import axios from './axios';
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  fetchCardRequest,
  fetchCardSuccess,
  fetchCardError,
} from '../actions/index';

const fetchingData = ({ dispatch }) => {
  dispatch(fetchDataRequest);
  const requestingData = async () => {
    try {
      const request = await axios.get();
      const { data } = request;
      dispatch(fetchDataSuccess(data.cards));
      return data;
    } catch (error) {
      dispatch(fetchDataError(error.message));
      return error;
    }
  };
  requestingData();
};

const fetchingCard = ({ dispatch, url }) => {
  dispatch(fetchCardRequest);
  const requestingCard = async () => {
    try {
      const request = await axios.get(url);
      const { data } = request;
      dispatch(fetchCardSuccess(data));
      return data;
    } catch (error) {
      dispatch(fetchCardError(error.message));
      return error;
    }
  };
  requestingCard();
};

export { fetchingCard, fetchingData };
