import React from 'react';
import {Link} from 'react-router-dom'



 const ExpenseListItem =({id,description,amount,createdAt,transaction}) => (
    <div>
    <Link to={`/edit/${id}`}>
    <h3>{transaction[0].toUpperCase()+ transaction.slice(1)}:{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem;


//    <Link to={'/edit/'+id}>