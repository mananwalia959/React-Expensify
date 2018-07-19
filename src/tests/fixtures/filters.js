import moment from 'moment';
const filters = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined,
    transactiontype:'both'
}

const altfilters = {
    text:'bill',
    sortBy:'amount',
    startDate:moment(0),
    endDate:moment(0).add(3,'days'),
    transactiontype:'both'
}

export {filters,altfilters};