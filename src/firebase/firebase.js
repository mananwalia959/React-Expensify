 import * as firebase from 'firebase';
 
 const config = {
    apiKey: "AIzaSyCLj8Oq5VJQ2bLUH9Dez9nQDP_Jdmm0qzg",
    authDomain: "react-node-expensify.firebaseapp.com",
    databaseURL: "https://react-node-expensify.firebaseio.com",
    projectId: "react-node-expensify",
    storageBucket: "react-node-expensify.appspot.com",
    messagingSenderId: "262006975953"
  };


firebase.initializeApp(config); 

const database=firebase.database()

export {firebase,database as default}

// const onValuChange = database.ref().on('value',(snapshot)=> {
// const info =snapshot.val()
// console.log(info)
// },(e)=> {
//   console.log(e)
// })


// const onValuChange = database.ref().on('value',(snapshot)=> {
//   console.log(snapshot.val())
// },(e)=> {
//   console.log(e)
// })




// setTimeout(()=>{
//   database.ref().update({
//     age:30
//   })
// },3500)

// setTimeout(()=>{
//   database.ref().off('value',onValuChange)
// },7000)
// setTimeout(()=>{
//   database.ref().update({
//     age:27
//   })
// },10000)
 
// database.ref(location/city)
//   .once('value')
//   .then((snapshot)=> {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e)=>{
//     console.log('Error fetchin data',e)
//   })

// database.ref().set({
//       name:'Manan',
//       age:18,
//       stresslevel:6,
//       job:{
//         title:'dev',
//         company:'MW'
//       },
//       location : {
//           city:'Raipur Rani',
//           country:'India'
//       }
// }).then(()=> {
//   console.log('Data is saved');
// }).catch((e)=>{
//   console.log('Error:',e);
// });

// database.ref().update({
//   stresslevel:6,
//   'job/title':'superdev',
//   'location/city':'Chandigarh'
// }).then(()=> {
//   console.log('Data is saved');
// }).catch((e)=>{
//   console.log('Error:',e);
// });



// database.ref('age').set(21);
// database.ref('location/city').set('Chandigarh')
// database.ref('attributes').set({
// height:185,
// weight:89
// }).then(()=> {
//   console.log('successful')
// }).catch((e)=>{
//   console.log(e);
// })

// database.ref('isFunny').remove().then(()=> {
//     console.log('successful')
//   }).catch((e)=>{
//     console.log(e);
//   })




