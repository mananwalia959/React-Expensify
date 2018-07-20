import React from 'react';
import {Link} from 'react-router-dom'
import moment from 'moment'



 const ExpenseListItem =({id,description,amount,createdAt,transaction}) => (
    <div>
    <Link to={`/edit/${id}`}>
    <h3>{transaction[0].toUpperCase()+ transaction.slice(1)}:{description}</h3>
    </Link>
    <p> Rs.{(amount/100)}
     __ 
    {moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
)

export default ExpenseListItem;


//    <Link to={'/edit/'+id}>