import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/Editexpensecomponent'
import expenses from '../fixtures/expenses';

let editexpense,removeExpense,history,wrapper ;

beforeEach(()=> {
    editexpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper=shallow(<EditExpensePage
        editexpense={editexpense}
        removeExpense={removeExpense}
        history={history}
        expense={expenses[2]}
        />);
});

test('should render EditExpensePage',()=>{
    expect(wrapper).toMatchSnapshot();

});

test('should handle editExpense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editexpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
});

test('should handle removeExpense',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[2].id});
});
