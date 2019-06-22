// const sayHello = function() {
//     console.log('Hello');
// }
// const sayHello = () =>{
//     console.log('Hello');
// }
// //One Line function does not need braces

// const sayHello = () => console.log('Hello');
// sayHello();

//One line returns
// const sayHello = () =>  'Hello';
// const sayHello = function() {
//     return 'ha';
// }
// console.log(sayHello());

//return object
// const sayhello = () => ({msg: 'asdasd'});
// console.log(sayhello());

//Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('Hakdog');

//Multiple param need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('Necca','Sabanal');

const users = ['Nathan','John','William'];
// const nameLengths = users.map(function(name) {
//     return name.length;
// });

//Shorter way
// const nameLengths = users.map((name) =>{
//     return name.length;
// });

//Shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);