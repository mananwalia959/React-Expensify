const expensesReducerDefaultState =[]

export default (state=expensesReducerDefaultState,action) => {
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
        case 'SET_EXPENSES':
        return action.expenses;
        default:
        return state
        
    }
};