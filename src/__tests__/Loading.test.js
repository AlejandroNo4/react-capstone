import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../containers/Loading';

let component;

beforeEach(() => {
  component = shallow(<Loading />);
});

describe('Loading component', () => {
  it('Render the component without errors', () => {
    const wrapper = component.find('.loading-container');
    expect(wrapper.length).toBe(1);
  });

  it('Render the image and overlay', () => {
    const image = component.find('img');
    const overlay = component.find('.overlay');
    expect(image.length).toBe(1);
    expect(overlay.length).toBe(1);
  });
});
