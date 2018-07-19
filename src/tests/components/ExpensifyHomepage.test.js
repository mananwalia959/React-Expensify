import React from 'react';
import {shallow} from 'enzyme';
import Expensifyhomepage from '../../components/Expensifyhomepage';

test('should render Header correctly',() => {
    const wrapper =shallow(<Expensifyhomepage />);
    expect(wrapper).toMatchSnapshot();
});