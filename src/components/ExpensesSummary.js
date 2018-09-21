import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensestotal';

export const ExpensesSummary = ({expenseCount,transactiontotals}) => {
    const expenseWord = expenseCount === 1 ? "transaction":"transactions";
    const formattedExpenseTotal = (transactiontotals.total_expense/100)
    const formattedIncomeTotal   = (transactiontotals.total_income/100)


    return (
        <div className='page-header'>
         <div className='content-container'>
          <h1 className='page-header__title'> Viewing <span>{expenseCount}</span> {expenseWord} with Net Amount = <span>{formattedIncomeTotal-formattedExpenseTotal}</span> <br/>Expenses =<span>Rs.{formattedExpenseTotal}</span> and Incomes = <span>Rs.{formattedIncomeTotal}</span> </h1>
           <div>
            <Link className ='button' to='/create'>Add Transaction</Link>
           </div>
         </div>
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