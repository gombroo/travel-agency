import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('<img> has valid src and alt', () => {
    const expectedSrc = 'image';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary src={expectedSrc} alt={expectedAlt}/>);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct prop name, cost and days', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDuration = 'days';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDuration}/>);

    expect(component.find('.title').prop('name')).toEqual(expectedName);
    expect(component.find('.details').prop('cost')).toEqual(expectedCost);
    expect(component.find('.details').prop('days')).toEqual(expectedDuration);
  });

  it('should throw error without required props', () =>{
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct link', () => {
    const expectedId = 'sometext';
    const component = shallow(<TripSummary id={expectedId}/>);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });
});
