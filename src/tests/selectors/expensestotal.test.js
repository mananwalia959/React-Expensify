import selectExpensesTotal from '../../selectors/expensestotal';
import moment from 'moment';


const expenses=[{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0,
    transaction:'expense'
  }, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    transaction:'expense'
  }, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 450,
    createdAt: moment(0).add(4, 'days').valueOf(),
    transaction:'expense'
  },{
    id: '4',
    description: 'Gum',
    note: '',
    amount: 1000,
    createdAt: 0,
    transaction:'income'
  },{
    id: '5',
    description: 'crix',
    note: '',
    amount: 2000,
    createdAt: 0,
    transaction:'income'
  },];
  

test('should return 0 if no expenses',()=>{
    const res = selectExpensesTotal([])
    expect(res).toEqual({
        total_expense:0,
        total_income:0
    });
})

test('should return amount if one expense',()=>{
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toEqual({
        total_expense:195,
        total_income:0
    });
})

test('should return amount if one income',()=>{
    const res = selectExpensesTotal([expenses[4]])
    expect(res).toEqual({
        total_expense:0,
        total_income:2000
    });
})


test('should return total amount if multiple expense',()=>{
    const res = selectExpensesTotal(expenses)
    expect(res).toEqual({
        total_expense:110145,
        total_income:3000
    })
   // expect(res).toBe(110145);
})

