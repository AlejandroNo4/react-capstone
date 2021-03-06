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

const fetchCardRequest = () => ({ type: 'FETCH_CARD_REQUEST' });

const fetchCardSuccess = (data) => ({
  type: 'FETCH_CARD_SUCCESS',
  payload: {
    data,
  },
});

const fetchCardError = (errorMsg) => ({
  type: 'FETCH_CARD_ERROR',
  payload: {
    error: errorMsg,
  },
});

const cleanCardData = () => ({ type: 'CLEAN_CARD_DATA' });

const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  payload: {
    filter,
  },
});

const removeFilter = () => ({ type: 'REMOVE_FILTER' });

export {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  fetchCardRequest,
  fetchCardSuccess,
  fetchCardError,
  cleanCardData,
  changeFilter,
  removeFilter,
};
