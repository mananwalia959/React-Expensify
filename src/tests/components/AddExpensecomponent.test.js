import React from 'react';
import {shallow} from 'enzyme';
import {Addexpensecomponent} from '../../components/Addexpensecomponent'
import expenses from '../fixtures/expenses';

let startaddExpense,history,wrapper ;

beforeEach(()=> {
    startaddExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<Addexpensecomponent startaddExpense ={startaddExpense} history ={history} /> )
})


test('Should render AddExpensePage correctly',() => {
    expect(wrapper).toMatchSnapshot();
});

test('Should Handle onSubmit correctly',() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startaddExpense).toHaveBeenCalledWith(expenses[1]);

});