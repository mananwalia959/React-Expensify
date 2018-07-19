//SET TEXT FILTER
export const setTextFilter = ((text="") => ({
    type:'setTextFilter',
    text
}))
//SORT BY Date
export const sortByDate= (()=>({
    type:'SortByDate'
}))
//SORT BY Amount
export const sortByAmount= (()=>({
    type:'SortByAmount'
}))
//SET Start_date
export const setstartDate=((date)=>({
    type:'setstartDate',
    date
}))
//Set End Date
export const setendDate=((date)=>({
    type:'setendDate',
    date
}))

export const settransactiontype=((transaction)=>({
    type:'settransactiontype',
    transaction
}))