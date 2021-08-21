const fetchDataRequest = () => ({ type: 'FETCH_DATA_REQUEST' });

const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: {
    data,
  },
});

const fetchDataError = (errorMsg) => ({
  type: 'FETCH_DATA_ERROR',
  payload: {
    error: errorMsg,
  },
});

const restartData = () => ({ type: 'RESTART_DATA' });

const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  payload: {
    filter,
  },
});

const removeFilter = () => ({ type: 'REMOVE_FILTER' });

export {
  fetchDataRequest, fetchDataSuccess, fetchDataError, changeFilter, removeFilter, restartData,
};
