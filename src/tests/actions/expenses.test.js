import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startaddExpense,addExpense,removeExpense,editexpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object',() =>{
    const action =removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'remove',
        id:'123abc'
    })
})

test('should update expense ',()=>{
    const action = editexpense('123abc',{note:'new note value'})
    expect(action).toEqual({
        type:'EditExpense',
        id:'123abc',
        updates:{
            note:'new note value'
        }

    })
})

test('should setup add expense with provided values',() => {
    
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type:'AddExpense',
        expense:expenses[2]
    })
});

test('should setup add expense to database and store',(done)=> {
  const store =createMockStore({});
  const expenseData ={
      description:'Mouse',
      amount:3000,
      note:'hhhh',
      createdAt:1000,
      transaction:'expense'

  }
  store.dispatch(startaddExpense(expenseData)).then(()=>{
      const actions =store.getActions()
      expect(actions[0]).toEqual({
          type:'AddExpense',
          expense:{
              id:expect.any(String),
              ...expenseData
          }
      })
      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData);
    done();
})
});

test('should setup add expense with defaults to database and store',()=> {
    const store =createMockStore({});
    const expenseDefaults ={
        description:'',
        amount:0,
        note:'',
        createdAt:0,
        transaction:'expense'
  
    }
    store.dispatch(startaddExpense()).then(()=>{
        const actions =store.getActions()
        expect(actions[0]).toEqual({
            type:'AddExpense',
            expense:{
                id:expect.any(String),
                ...expenseDefaults
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
  })
});


// test('should setup add expense with provided values',() => {
//     const expenseData ={
//         description:'',
//         amount:0,
//         createdAt:0,
//         note:'0',
//         transaction:'expense'
//     };
    
//     const action = addExpense(expenseData)
//     expect(action).toEqual({
//         type:'AddExpense',
//         expense:{
//             ...expenseData,
//             id:expect.any(String)
//         }
//     })
// });