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

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
      return database.ref(`expenses/${id}`).remove().then(() => {
        dispatch(removeExpense({ id }));
      });
    };
  };


//EDIT EXPENSE
export const editexpense=((id,updates)=>({
    type:'EditExpense',
    id,
    updates
}))

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
      return database.ref(`expenses/${id}`).update(updates).then(() => {
        dispatch(editexpense(id, updates));
      });
    };
  };

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  });


  export const startSetExpenses = () => {
    return (dispatch) => {
      return database.ref('expenses').once('value').then((snapshot) => {
        const expenses = [];
  
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setExpenses(expenses));
      });
    };
  };