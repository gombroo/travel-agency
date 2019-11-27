import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe ('Component OrderOption', () => {
  it('should render without crashing', () => {
    const expectedName = 'component name';
    const expectedType = 'component type';
    const component = shallow(<OrderOption name={expectedName} type={expectedType} />);
    //const component = shallow(<OrderOption name="Lorem ipsum" type="text" />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct title', () => {
    const expectedTitle = 'Lorem ipsum';
    const component = shallow(<OrderOption name={expectedTitle} type="text" />);

    expect(component.find('.title').text()).toEqual(expectedTitle);
  });
});
