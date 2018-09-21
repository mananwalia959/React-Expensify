import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses';
export const ExpenseList = (props) => (
    <div className='content-container'>
      <div>
       <div className='list-header'>
        <div className='show-for-mobile'>Expenses</div>
        <div className='show-for-desktop'>Expense</div>
        <div className='show-for-desktop'>Amount</div>    
      </div>
    </div>


    <div className='list-body'>
    {
        props.expenses.length === 0?(
            <div className='list-item listitem--message'>
            <span>No Transactions</span>
            </div>
        ):(
            props.expenses.map((expense) => {
                return <ExpenseListItem key = {expense.id} {...expense}  />
            })
        )
    }
    </div> 
   
    </div>
)

const MapStateToProps = (state)=>{
    return {
        expenses:SelectExpenses(state.expenses,state.filters)
    }
}
export default connect(MapStateToProps)(ExpenseList);


