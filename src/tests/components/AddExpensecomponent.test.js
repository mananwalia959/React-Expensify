import React from 'react';
import {shallow} from 'enzyme';
import {Addexpensecomponent} from '../../components/Addexpensecomponent'
import expenses from '../fixtures/expenses';

let addExpense,history,wrapper ;

beforeEach(()=> {
    addExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<Addexpensecomponent addExpense ={addExpense} history ={history} /> )
})


test('Should render AddExpensePage correctly',() => {
    expect(wrapper).toMatchSnapshot();
});

test('Should Handle onSubmit correctly',() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenCalledWith(expenses[1]);

});