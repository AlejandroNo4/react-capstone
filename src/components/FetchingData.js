import axios from './axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from '../actions/index';

const FetchingData = ({ dispatch }) => {
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

export default FetchingData;
