import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startaddExpense,addExpense,removeExpense,editexpense,setExpenses,startSetExpenses,startRemoveExpense,startEditExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk])


beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt,transaction }) => {
      expensesData[id] = { description, note, amount, createdAt,transaction };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
  });

test('should setup remove expense action object',() =>{
    const action =removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'remove',
        id:'123abc'
    })
})

test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'remove',
        id
      });
      console.log(`users/${uid}/expenses/${id}`)
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
  });

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
test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { amount: 21045 };
    store.dispatch(startEditExpense(id, updates)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EditExpense',
        id,
        updates
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
  });

test('should setup add expense with provided values',() => {
    
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type:'AddExpense',
        expense:expenses[2]
    })
});

test('should setup add expense to database and store',(done)=> {
  const store =createMockStore(defaultAuthState);
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
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData);
    done();
})
});

test('should setup add expense with defaults to database and store',(done)=> {
    const store =createMockStore(defaultAuthState);
    const expenseDefaults ={
        description:'',
        amount:0,
        note:'',
        createdAt:0,
        transaction:'expense'
  
    }
    store.dispatch(startaddExpense({})).then(()=>{
        const actions =store.getActions()
        expect(actions[0]).toEqual({
            type:'AddExpense',
            expense:{
                id:expect.any(String),
                ...expenseDefaults
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
  })
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
  });


  test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
      done();
    });
  });
