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

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {

    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;

    beforeEach(() => {
      component = shallow(
        <OrderOption
          type={type}
        />
      );
      subcomponent = component.find(optionTypes[type]); //
      renderedSubcomponent = component.dive();
      console.log(subcomponent.debug());
      console.log(renderedSubcomponent.debug());
    });

    /* common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
      console.log(component.debug());
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        break;
      }
    }
  });
}
