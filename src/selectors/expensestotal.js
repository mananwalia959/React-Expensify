export default (expenses)=> {
    const totalexpense= expenses
        .map((expense) => {
            if (expense.transaction ==='expense'){
            return (expense.amount)
            }
            else{
                return 0
            }
        })
        .reduce((sum,value) => sum+value,0);


        const totalincome= expenses
        .map((expense) => {
            if (expense.transaction === 'income'){
            return (expense.amount)
            }
            else{
                return 0
            }
        })
        .reduce((crix,crox) => crix+crox,0);
        return {
            total_expense:totalexpense,
            total_income:totalincome
        }
    
}

// export default (expenses) => {
//     let totalincome = 0
//     let totalexpense=0
//     expenses.forEach(expense => {
//         if(expense.transaction === ''){
//             totalexpense=totalexpense+expense.amount
//         }
//         else if(expense.transaction ==='income')
//     });
//     return {
//         total_expense:totalexpense,
//         total_income:totalincome
//     }

// }