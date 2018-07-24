import uuid from 'uuid';
import database from '../firebase/firebase'

//ADD EXPENSE
export const addExpense = (expense) => ({
    type:'AddExpense',
    expense
});

export const startaddExpense=(expenseData = {}) => {
    return (dispatch) => {
        const {
            description='',
            note='',
            amount=0,
            createdAt=0,
            transaction='expense'
        } = expenseData;
        const expense = {description,note,amount,createdAt,transaction};

        return database.ref('expenses').push(expense).then((ref)=>{
         dispatch(addExpense({
             id:ref.key,
             ...expense
         }))
        })
    }
}

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