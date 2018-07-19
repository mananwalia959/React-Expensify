import moment from 'moment';
import filtersreducer from '../../reducers/filters';

test('should setup default filter values',()=> {
    const state=filtersreducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
    text:'',
    sortby:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month'),
    transactiontype:'both'
    });
})
test('should set sortby to amount', () => {
    const state = filtersreducer(undefined, { type: 'SortByAmount' });
    expect(state.sortby).toBe('amount');
  });
  
test('should set sortby to date', () => {
    const currentState = {
      text: '',
      startDate: undefined,
      endDate: undefined,
      sortby: 'date',
      transactiontype:'both'
    };
    const action = { type: 'SortByDate' };
    const state = filtersreducer(currentState, action);
    expect(state.sortby).toBe('date');
});
  
test('should set text filter', () => {
    const text = 'This is my filter';
    const action = {
      type: 'setTextFilter',
      text
    };
    const state = filtersreducer(undefined, action);
    expect(state.text).toBe(text);
});
  
test('should set startDate filter', () => {
    const date = moment();
    const action = {
      type: 'setstartDate',
      date
    };
    const state = filtersreducer(undefined, action);
    expect(state.startDate).toEqual(date);
});
  
test('should set startDate filter', () => {
    const date = moment();
    const action = {
      type: 'setendDate',
      date
    };
    const state = filtersreducer(undefined, action);
    expect(state.endDate).toEqual(date);
});