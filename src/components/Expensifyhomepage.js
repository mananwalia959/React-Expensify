import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'
const Expensifyhomepage = () => (
    <div>
        <ExpenseListFilters />   
        <ExpenseList />
    </div>
);


export default Expensifyhomepage;