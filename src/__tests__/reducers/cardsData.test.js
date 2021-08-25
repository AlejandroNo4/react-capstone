import cardsDataReducer from '../../reducers/cardsData';

describe('Cards Data Reducer', () => {
  it('Return the state in case the action is not one of the listed ones', () => {
    const initialObj = { data: {}, errors: '', loading: true };
    const newState = cardsDataReducer(undefined, {});
    expect(newState).toEqual(initialObj);
  });

  it('Return loading when the fetch is made', () => {
    const newState = cardsDataReducer(undefined, {
      type: 'FETCH_DATA_REQUEST',
    });
    expect(newState).toEqual({ data: {}, errors: '', loading: true });
  });

  it('Replace the data with the one given from payload', () => {
    const data = { name: 'testNAme', id: 'fia924k1' };
    const newState = cardsDataReducer(undefined, {
      type: 'FETCH_DATA_SUCCESS',
      payload: {
        data,
      },
    });
    expect(newState).toEqual({
      data: { id: 'fia924k1', name: 'testNAme' },
      errors: '',
      loading: false,
    });
  });

  it('Replace the error mesage with the one given from payload', () => {
    const errorMsg = 'This is the expected error';
    const newState = cardsDataReducer(undefined, {
      type: 'FETCH_DATA_ERROR',
      payload: {
        error: errorMsg,
      },
    });
    expect(newState).toEqual({
      data: {},
      errors: 'This is the expected error',
      loading: false,
    });
  });

  it('Throw TypeError if there is no action', () => {
    const badExample = () => cardsDataReducer(undefined, undefined);
    expect(badExample).toThrow(TypeError);
  });

  it('Throw TypeError if there with an invalid prop', () => {
    const badExample = () => cardsDataReducer('jflka');
    expect(badExample).toThrow(TypeError);
  });
});
