import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from '../actions/index';

const FetchingData = ({ dispatch }) => {
  dispatch(fetchDataRequest);

  const requestingData = async () => {
    const api = 'https://botw-compendium.herokuapp.com/api/v2';
    try {
      const request = await axios.get(api);
      const { data } = request.data;
      dispatch(fetchDataSuccess(data));
      return data;
    } catch (error) {
      dispatch(fetchDataError(error.message));
      return error;
    }
  };
  requestingData();
};

export default FetchingData;
