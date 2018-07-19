import uuid from 'uuid';


//ADD EXPENSE
export const addExpense = ({
    description='',
    note='',
    amount=0,
    createdAt=0,
    transaction="expense"
} ={}) => ({
    type:'AddExpense',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt,
        transaction
    }
});
//REMOVE EXPENSE
export const removeExpense=(( {id} )=> ({
    type:'remove',
    id
}))
//EDIT EXPENSE
export const editexpense=((id,updates)=>({
    type:'EditExpense',
    id,
    updates

}))