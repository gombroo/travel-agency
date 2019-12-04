import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('does <img> have valid src and alt', () => {
    const expectedSrc = 'someimage';
    const expectedAlt = 'sometext';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct prop name, cost and days', () => {
    const expectedName = 'somename';
    const expectedCost = '1000';
    const expectedDuration = '14';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDuration}/>);
    //expect(component.find('.title').text('')).toEqual(expectedName); // OK
    expect(component.find('.title').text('somename')).toEqual(expectedName);
    expect(component.find('.details span').at(0).text()).toEqual(`${expectedDuration} days`);
    expect(component.find('.details span').at(1).text()).toEqual(`from ${expectedCost}`);
  });

  /* it('should throw error without required props', () =>{
    expect(() => shallow(<TripSummary />)).toThrow();
  }); */

  it('should render correct link', () => {
    const expectedId = 'sometext';
    const component = shallow(<TripSummary id={expectedId}/>);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('should render correct tags array', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });
});
