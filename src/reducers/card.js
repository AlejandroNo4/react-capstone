const initialState = {
  loading: true,
  data: {},
  errors: '',
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CARD_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_CARD_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case 'FETCH_CARD_ERROR':
      return {
        ...state,
        loading: false,
        data: {},
        errors: action.payload.error,
      };
    case 'CLEAN_CARD_DATA':
      return { ...initialState };
    default:
      return state;
  }
};

export default cardReducer;
