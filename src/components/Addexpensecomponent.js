import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';
export class Addexpensecomponent extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');

    }
    render() {
        return (
            <div>
            This is from my dashboard create component
            <ExpenseForm 
            onSubmit={this.onSubmit}
        />
    </div>

        )
    }
    
}

const mapDispatchToProps=(dispatch) => ({
    addExpense:(expense) => dispatch(addExpense(expense))
})


export default connect(undefined,mapDispatchToProps)(Addexpensecomponent);