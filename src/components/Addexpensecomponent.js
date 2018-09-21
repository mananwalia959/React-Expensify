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
            <div classname='page-header'>
            <div className='content-container'>
            <h1 className='page-header__title'>Add Transaction</h1>
            </div>
            <div className='content-container'>
            <ExpenseForm 
            onSubmit={this.onSubmit}
            />
            </div>
    </div>

        )
    }
    
}

const mapDispatchToProps=(dispatch) => ({
    startaddExpense:(expense) => dispatch(startaddExpense(expense))
})


export default connect(undefined,mapDispatchToProps)(Addexpensecomponent);