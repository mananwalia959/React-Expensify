import {createStore} from 'redux';

const incrementCount = ({incrementby = 1} = {}) => ({
    type:'Increment',
    incrementby: incrementby,
})
const decrementCount=({decrementby=1}={})=> ({
    type:'Decrement',
    decrementby:decrementby
})

const reset = () =>({
    type:'Reset'
})

const set = ({value}) => ({
    type: 'Set',
    value:value
})

const countReducer = (state = {count:0},action) => {
    switch(action.type) {
        case "Increment" :
            return {
                count:state.count + action.incrementby
            }
        case "Reset" :
            return {
                count:0
            }
        case "Set" :
            return {
                count:action.value
            }
        case "Decrement" :
            return {
                count:state.count - action.decrementby
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

 const unsubscribe = store.subscribe(()=> {
     console.log(store.getState());
 })
store.dispatch(incrementCount({incrementby:5}))
store.dispatch({
    type: 'Increment',
    incrementby:5
})
store.dispatch(incrementCount());
// store.dispatch({
//     type: 'Increment'
// })
store.dispatch(reset())

store.dispatch(decrementCount({decrementby:25}));
store.dispatch(decrementCount());

store.dispatch(set({value:15}));
console.log(store.getState());
