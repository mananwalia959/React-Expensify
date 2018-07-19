import React from 'react';
import {shallow} from 'enzyme';
import NotfoundPage from '../../components/NotfoundPage';

test('should render Header correctly',() => {
    const wrapper =shallow(<NotfoundPage />);
    expect(wrapper).toMatchSnapshot();
});