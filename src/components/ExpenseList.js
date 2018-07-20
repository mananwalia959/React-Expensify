import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses';
export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0?(
            <p> No Transactions </p>
        ):(
            props.expenses.map((expense) => {
                return <ExpenseListItem key = {expense.id} {...expense}  />
            })
        )
    }
    

    </div>
)

const MapStateToProps = (state)=>{
    return {
        expenses:SelectExpenses(state.expenses,state.filters)
    }
}
export default connect(MapStateToProps)(ExpenseList);


