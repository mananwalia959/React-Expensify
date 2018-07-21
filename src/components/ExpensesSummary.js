import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensestotal';

export const ExpensesSummary = ({expenseCount,transactiontotals}) => {
    const expenseWord = expenseCount === 1 ? "transaction":"transactions";
    const formattedExpenseTotal = (transactiontotals.total_expense/100)
    const formattedIncomeTotal   = (transactiontotals.total_income/100)


    return (
        <div>
        <h1> Viewing {expenseCount} {expenseWord} with Expenses ={formattedExpenseTotal} and Incomes = {formattedIncomeTotal} </h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
  
    return {
      expenseCount: visibleExpenses.length,
      transactiontotals: selectExpensesTotal(visibleExpenses)
    };
  };
  
  export default connect(mapStateToProps)(ExpensesSummary);