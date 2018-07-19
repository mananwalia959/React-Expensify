import moment from 'moment'

export default [{
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
  }];