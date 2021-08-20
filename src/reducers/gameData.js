const initialState = {
  loading: true,
  data: {},
  errors: '',
};

const gameDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        loading: false,
        data: {},
        errors: action.payload.msg,
      };
    default:
      return state;
  }
};

export default gameDataReducer;
