// const person = {
//     name:'Manan',
//     age:20,
//     location:{
//         city:'Delhi',
//         temp:50
//     }
// };
// const {name = 'Anonymous',age} =person;

// console.log(`${name} is ${age}`)

// const {city,temp:temprature} = person.location;
// if (city && temprature){
//     console.log(`it's ${temprature} in ${city}`)
// }

const book = {
    title: 'Mistborn',
    author:'Brandon Sanderson',
    publisher:{
        name:'penguin'
    }
}
const {name:publisherName = 'SelfPublished'} = book.publisher;

console.log(publisherName)


const item =['coffee','$2.00','$2.50','2.75'];
const [name,,price]=item
console.log(`a medium ${name} costs ${price}`);