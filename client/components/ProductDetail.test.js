import React from 'react';
import { shallow } from 'enzyme';
import ProductDetail from './ProductDetail';
describe('ProductDetail', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ProductDetail/>);
    expect(component).toMatchSnapshot();
  });
});