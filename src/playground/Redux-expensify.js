import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';
//ADD EXPENSE
const addExpense = ({
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
const removeExpense=(( {id} )=> ({
    type:'remove',
    id
}))
//EDIT EXPENSE
const editexpense=((id,updates)=>({
    type:'EditExpense',
    id,
    updates

}))

//SORT BY Date
const sortByDate= (()=>({
    type:'SortByDate'
}))
//SORT BY Amount
const sortByAmount= (()=>({
    type:'SortByAmount'
}))
//SET TEXT FILTER
const setTextFilter = ((text="") => ({
    type:'setTextFilter',
    text
}))
//SET Start_date
const setstartDate=((date)=>({
    type:'setstartDate',
    date
}))
//Set End Date
const setendDate=((date)=>({
    type:'setendDate',
    date
}))
const settransactiontype=((transaction)=>({
    type:'settransactiontype',
    transaction
}))


//Expenses Reducer 
const expensesReducerDefaultState =[]

const expensesReducer =(state=expensesReducerDefaultState,action) => {
    switch(action.type){
        case 'AddExpense':
        return [
            ...state,
            action.expense
        ];
        case 'remove':
        return state.filter(({id})=> id !== action.id)

        case 'EditExpense':
        return state.map((expense)=>{
            if(expense.id===action.id){
                return({
                    ...expense,
                    ...action.updates})
            }
            else{
                return expense
            }
        })
        default:
        return state
        
         
    }
};

const filtersReducerDefaultState={
    text:'',
    sortby:'date',
    startDate:undefined,
    endDate:undefined,
    transactiontype:'both'

};
const filtersReducer = (state= filtersReducerDefaultState,action) => {
    switch(action.type) {
        case 'setTextFilter':
        return ({
            ...state,
            text:action.text
        })
        case "SortByAmount":
         return ({
             ...state,
             sortby:'amount'
        })
        case "SortByDate":
        return ({
            ...state,
            sortby:'date'
       })
       case 'setstartDate':
       return ({
           ...state,
           startDate:action.date
       })
       case 'setendDate':
       return ({
            ...state,
            endDate:action.date
        })
        case 'settransactiontype':
        return ({
            ...state,
            transactiontype:action.transaction
        })

       default:
       return state
    }
}


const getVisisbleExpenses=(expenses,{text,sortby,startDate,endDate,transactiontype})=> {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number'|| expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;
        const typeMatch= transactiontype==='both'?true:expense.transaction===transactiontype;

        return startDateMatch && endDateMatch && textMatch && typeMatch ;
    }).sort((a,b)=> {
        if(sortby === 'date') {
            return a.createdAt<b.createdAt?1:-1;
        }
        if (sortby==='amount'){
            return a.amount<b.amount?1:-1
        }
    })
}
//Store creation

const store =createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);



store.subscribe(() => {
    const state=store.getState();
     const visibleExpenses=getVisisbleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
    // console.log(store.getState());
})

const Expenseone=store.dispatch(addExpense({description:'Rent',amount:500,createdAt:1000}));
const ExpenseTwo=store.dispatch(addExpense({description:'tea',amount:1000,createdAt:-1000}));
const Expensethree=store.dispatch(addExpense({description:'bill',amount:6600,createdAt:1000,transaction:'income'}));

// store.dispatch(removeExpense({id:Expenseone.expense.id}));
// store.dispatch(editexpense(ExpenseTwo.expense.id,{amount:1500}));
// store.dispatch(setTextFilter('te'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(settransactiontype('income'))
// store.dispatch(setstartDate(125))
// store.dispatch(setstartDate())
// store.dispatch(setendDate(1250))

const demostate = {
    expenses:[{
        id:'cedcedfce',
        description:'January Rent',
        note:'This was the final payment for that address',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortby: 'amount',
        startDate: undefined,
        endDate:undefined
    }
};
// const user = {
//     name:'jen',
//     age:24
// }
// console.log({
//     ...user,
//     age:25
// });