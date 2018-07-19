import moment from 'moment'

const filtersReducerDefaultState={
    text:'',
    sortby:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month'),
    transactiontype:'both'
    

};
export default (state= filtersReducerDefaultState,action) => {
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
