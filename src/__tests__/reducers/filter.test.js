import filterReducer from '../../reducers/filter';

describe('Filter reducer', () => {
  it('Return the state in case the action is not one of the listed ones', () => {
    const newState = filterReducer(undefined, {});
    expect(newState).toEqual({ filter: 'All' });
  });

  it('Changes the filter name to the given in the action', () => {
    const newState = filterReducer(undefined, {
      type: 'CHANGE_FILTER',
      payload: {
        filter: 'Expected result',
      },
    });
    expect(newState).toEqual({ filter: 'Expected result' });
  });

  it('Removes any filter', () => {
    const newState = filterReducer(undefined, {
      type: 'CHANGE_FILTER',
      payload: {
        filter: 'Expected result',
      },
    });
    expect(newState).toEqual({ filter: 'Expected result' });
    const removeState = filterReducer(undefined, { type: 'REMOVE_FILTER' });
    expect(removeState).toEqual({ filter: 'All' });
  });

  it('Throw TypeError if there is no action', () => {
    const badExample = () => filterReducer(undefined, undefined);
    expect(badExample).toThrow(TypeError);
  });

  it('Throw TypeError if there with an invalid prop', () => {
    const badExample = () => filterReducer('asdgkln');
    expect(badExample).toThrow(TypeError);
  });
});
