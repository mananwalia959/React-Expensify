import moment from 'moment';

export default (expenses,{text,sortby,startDate,endDate,transactiontype})=> {
    return expenses.filter((expense)=>{
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate?startDate.isSameOrBefore(createdAtMoment,'day'):true;
        const endDateMatch = endDate?endDate.isSameOrAfter(createdAtMoment,'day'):true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;
        const typeMatch= transactiontype==='both'?true:expense.transaction===transactiontype;

        return startDateMatch && endDateMatch && textMatch && typeMatch;
    }).sort((a,b)=> {
        if(sortby === 'date') {
            return a.createdAt < b.createdAt?1:-1;
        }
        if (sortby==='amount'){
            return a.amount<b.amount?1:-1
        }
    })
}