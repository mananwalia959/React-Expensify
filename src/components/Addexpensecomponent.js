import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startaddExpense} from '../actions/expenses';
export class Addexpensecomponent extends React.Component {
    onSubmit = (expense) => {
        this.props.startaddExpense(expense);
        this.props.history.push('/');

    }
    render() {
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
            onSubmit={this.onSubmit}
        />
    </div>

        )
    }
    
}

const mapDispatchToProps=(dispatch) => ({
    startaddExpense:(expense) => dispatch(startaddExpense(expense))
})


export default connect(undefined,mapDispatchToProps)(Addexpensecomponent);