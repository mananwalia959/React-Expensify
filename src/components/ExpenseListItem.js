import React from 'react';
import {Link} from 'react-router-dom'
import moment from 'moment'



 const ExpenseListItem =({id,description,amount,createdAt,transaction}) => (
    <Link className='list-item' to={`/edit/${id}`}>
    <div>
    <h3 className='list-item__title'>{transaction[0].toUpperCase()+ transaction.slice(1)}:{description}</h3>
    <span className='list-item__sub-title'>{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <div>
    <h3 className='list-item__data'> Rs.{(amount/100)}</h3>
    </div>
    </Link>
)

export default ExpenseListItem;


//    <Link to={'/edit/'+id}>