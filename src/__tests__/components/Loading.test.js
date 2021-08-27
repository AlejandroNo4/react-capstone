import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Loading from '../../containers/Loading';

describe('Loading component', () => {
  it('Render component wothout errors', () => {
    const component = render(<Loading />);
    expect(component).toMatchSnapshot();
  });

  it('Precense of a image', () => {
    const component = render(<Loading />);
    const image = component.getByRole('img');
    expect(image).toBeTruthy();
  });
});
