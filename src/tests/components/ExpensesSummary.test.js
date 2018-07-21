import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} transactiontotals={{
        total_expense:456,
        total_income:123
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} transactiontotals={{
        total_expense:123,
        total_income:456
    }} />);
    expect(wrapper).toMatchSnapshot();
  });