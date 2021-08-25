import React from "react";
import * as redux from "react-redux";
import { shallow, mount } from "enzyme";
import FilterType from "../../components/FilterType";

beforeEach(()=> {
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue({ filter: "All" });
})


describe("Fileter type component", () => {
  it("Render the component without errors", () => {
    const component = shallow(<FilterType />);
    const wrapper = component.find('form');
    expect(wrapper.length).toBe(1)
  });

  it("Render all the options from the types array", () => {
    const component = shallow(<FilterType />);
    const option = component.find('option');
    expect(option.length).toBe(6)
  });

  it('Call select handler when there is a change', () => {
    const selectMock = () => 'Test value';
    const compMount = mount(<FilterType selectHandler={selectMock} />);
    const select = compMount.find('select');
    select.simulate('change');
    expect(selectMock).toHaveBeenCalled;
  })

  it('Test correct props', ()=> {
    const component = shallow(<FilterType />);
    const wrapper = component.find('select');
    expect(wrapper.prop('value')).toBe('All')
    expect(typeof(wrapper.prop('onChange'))).toBe('function')
  });

  it('Test INCORRECT props', ()=> {
    const component = shallow(<FilterType />);
    const wrapper = component.find('select');
    expect(wrapper.prop('value')).not.toBe('')
    expect(typeof(wrapper.prop('onChange'))).not.toBe('string')
  });
});
