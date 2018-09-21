import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates'

const now=moment()

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?(props.expense.amount/100).toString():'',
            createdAt: props.expense?moment(props.expense.createdAt):moment(),
            transaction:props.expense?props.expense.transaction:'expense',
            calendarFocused: false,
            error:''
        }


    }
    onTransactiontypeChange=(e) =>{
        const transaction=e.target.value
        this.setState({transaction})
    }
    onDescriptionChange=(e) =>{
        const description =e.target.value ;
        this.setState(() => ({description}));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=> ({note}))
    }
    onAmountChange = (e) =>{
        const amount = e.target.value;
        if(!amount ||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=> ({amount}))
        } 
    }
    onDateChange = (createdAt) =>{
        if (createdAt){
            this.setState(()=> ({createdAt}))
        }
        
    }
    onFocusChange=({focused})=>{
        this.setState(()=>({calendarFocused:focused}))
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            //
            this.setState(()=>({error:'Enter the Description and amount'}))
        }
        else{
            //Clear the error
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note,
                transaction:this.state.transaction

            })

        
        }
    }

    render(){
        return (
                <form className='form' onSubmit={this.onSubmit}>
                {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <input
                    type = "text"
                    placeholder='Description'
                    className='text-input'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type = "text"
                    placeholder='Amount'
                    className='text-input'
                    value={this.state.amount}
                    onChange={this.onAmountChange}

                />

                <select 
                value={this.state.transaction} 
                className='select'
                onChange={this.onTransactiontypeChange}>
                <option value = 'expense'> Expense </option>
                <option value = 'income' > Income </option>
                </select>

                <SingleDatePicker
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  id = {this.state.createdAt.toString()}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                  block
                />

                <textarea 
                className='textarea'
                placeholder='Add a note for your expense(optional)'
                value={this.state.note}
                onChange={this.onNoteChange}
                />
                <div >
                <button className='button'>Confirm</button>
                </div>
                </form>
        )
    }
}