import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate,setstartDate,setendDate,settransactiontype} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

export class ExpenseListFilters extends React.Component{
    state={
        calendarFocused:null
    }
    onDatesChange=({startDate,endDate}) => {
        this.props.setstartDate(startDate);
        this.props.setendDate(endDate);
    };
    onFocusChange = (calendarFocused)=> {
        this.setState(()=>({calendarFocused}) )
    }
    onTextChange=(e) =>{
        this.props.setTextFilter(e.target.value)
    }
    onSortChange=(e) =>{
        if(e.target.value==='date'){
        this.props.sortByDate();
        }
        else if(e.target.value==='amount'){
        this.props.sortByAmount();
        }
    }
    onTransactionTypeChange=(e) =>{
        const option=e.target.value
        this.props.settransactiontype(option)
    }


    render(){
        return(
            <div>
        <input 
        type ='text' 
        value={this.props.filters.text} 
        onChange={this.onTextChange} 
        /> 

        <select 
        value={this.props.filters.sortby} 
        onChange={this.onSortChange}>
        <option value = 'date' > Date </option>
        <option value = 'amount'> Amount </option>
        </select>
        <select value={this.props.filters.transactiontype} 
        onChange={this.onTransactionTypeChange}>
        <option value = 'both' > Both </option>
        <option value = 'expense'> Expense </option>
        <option value = 'income' > Income </option>
        </select>
        <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={()=>false}
        />
        </div>
        )
        
    }
}
const MapStatetoProps=(state) => ({
    filters:state.filters
});

const MapDispatchToProps=(dispatch) => ({
    setTextFilter: (text)=> dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount:() => dispatch(sortByAmount()),
    setstartDate:(startDate)=>dispatch(setstartDate(startDate)),
    setendDate:(endDate)=> dispatch(setendDate(endDate)),
    settransactiontype:(tranaction)=> dispatch(settransactiontype(tranaction))
})


export default connect (MapStatetoProps,MapDispatchToProps)(ExpenseListFilters);
