import {addExpense,removeExpense,editexpense} from '../../actions/expenses';

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
    const expenseData ={
        description:'Rent',
        amount:109500,
        createdAt:55,
        note:'this was last months rent',
        transaction:'expense'
    };

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'AddExpense',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
});
test('should setup add expense with provided values',() => {
    const expenseData ={
        description:'',
        amount:0,
        createdAt:0,
        note:'0',
        transaction:'expense'
    };
    
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'AddExpense',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
});