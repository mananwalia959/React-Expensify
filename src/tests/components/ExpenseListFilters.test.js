import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altfilters} from '../fixtures/filters';

let setTextFilter,sortByDate,sortByAmount,setstartDate,setendDate,settransactiontype,wrapper;


beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setstartDate = jest.fn();
    setendDate = jest.fn();
    wrapper = shallow(
      <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setstartDate={setstartDate}
        setendDate={setendDate}
      />
    );
  });



test('should render ExpenseListFilters correctly',() => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters correctly with altfilters',() => {
    wrapper.setProps({
        filters:altfilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
      target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})


test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
      filters: altfilters
    });
    wrapper.find('select').at(0).simulate('change', {
      target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
  });
  

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').at(0).simulate('change', {
      target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
  });

// test('should handle date changes', () => {
//     const startDate = moment(0).add(4, 'years');
//     const endDate = moment(0).add(8, 'years');
//     wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
//     expect(setstartDate).toHaveBeenLastCalledWith(startDate);
//     expect(setendDate).toHaveBeenLastCalledWith(endDate);
//   });
  
//   test('should handle date focus changes', () => {
//     const calendarFocused = 'endDate';
//     wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
//     expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
//   });
  




