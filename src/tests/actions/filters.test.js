import moment from 'moment'
import {setstartDate,
    setendDate,
    setTextFilter,
    sortByDate,
    sortByAmount,
    settransactiontype,
} from '../../actions/filters'

test('should generate set start date action object',() => {
    const action=setstartDate(moment(0));
    expect(action).toEqual({
        type:'setstartDate',
        date:moment(0)
    })
})

test('should generate set end date action object',()=>{
    const action=setendDate(moment(0));
    expect(action).toEqual({
        type:'setendDate',
        date:moment(0)
    })
});

test('should generate set text filter action object',()=>{
    const text ='Something in'
    const action=setTextFilter(text);
    expect(action).toEqual({
        type:'setTextFilter',
        text
    })
});

test('should generate action object for sort by amount',()=>{
    expect(sortByAmount()).toEqual({
        type:'SortByAmount'
    })
});

test('should generate action object for sort by amount',()=>{
    expect(sortByDate()).toEqual({
        type:'SortByDate'
    })
});


test('should generate set transaction action object',()=>{
    const transaction ='expense'
    const action=settransactiontype(transaction);
    expect(action).toEqual({
        type:"settransactiontype",
        transaction
    })
});