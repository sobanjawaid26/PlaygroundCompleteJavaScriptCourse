// Constructor 

// var john = {
//     name: 'john',
//     yearOfBirth: 1995,
//     job: 'Developer'
// }

// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calculateAge = function(){
//     console.log(2019 - this.yearOfBirth);
// };
// Person.prototype.lastName = 'Smith';

// var mary = new Person('Mary', 1998, 'Tester');

// // console.log(mary);
// // mary.calculateAge();
// // console.log(mary.lastName);

// console.log(Person);




// Object.create

// var personProto = {
//     calculateAge: function(){
//         console.log(2019 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto,{
//     name: {value: 'John'},
//     yearOfBirth: {value: 1998}
// })

// john.calculateAge();

// // Primitives
// var a = 10;
// var b = 20;

// var b = a;
// var a = 30;

// // Objects
// var obj1 = {
//     name: 'Soban',
//     age: 24
// }
// var obj2 = obj1;
// obj1.name ='Mohit';
// console.log(obj2.name);
// console.log(a);
// console.log(b);

// // Functions
// var age = 24;
// var obj = {
//     name: 'Alex'
// }
// function change(a , b){
//     a = 30;
//     b.name = 'Alexa';
// }
// change(age, obj);
// console.log(age);
// console.log(obj.name);

// Passing Functions as arguments


// var years = [1990, 1965, 1937, 2005, 1998];
// function arrCalc(arr, func){
//     res = [];
//     for (let index = 0; index < arr.length; index++) {
//         res.push(func(arr[index]));
//     }
//     return res;
// }

// function double(n){
//     return n*2;
// }
// function calcAge(n){
//     return 2019 - n;
// }

// console.log(arrCalc(years, double));

// functions returning functions

// function getQuestion(role){
//     if(role == "teacher"){
//         return function(name){
//             console.log('What subject do u teach ' + name + ' ?');
//         }
//     }
//     else if( role == 'designer'){
//         return function(name){
//             console.log('What is UX design ' + name + ' ?');
//         }
//     }
//     else {
//         return function(name){
//             console.log('What is it that u do ' + name  + ' ?');
//         }
//     }
// }
// var designerQuestion = getQuestion('designer');
// var teacherQuestion = getQuestion('teacher');
// // teacherQuestion('Soban');
// // designerQuestion('Soban');

// getQuestion('designer')('Soban');

// IIFE

// function game(){
//     score = Math.floor(Math.random() * 10);
//     console.log(score >= 5);
// }
// game();

// (function() {
//     var score = Math.floor(Math.random() * 10);
//     console.log(score >= 5);
// })();

// (function(luckyNumber) {
//     var score = Math.floor(Math.random() * 10);
//     console.log(score >= 5 - luckyNumber);
// })(5);


// CLOSURES

// function retirement(retirementAge){
//     var s = ' years left until retirement ';
//     return function(age){
//         console.log(retirementAge - age + s); 
//     }
// }

// var func = retirement(66);
// func(60);
// retirement(70)(60);




// function getQuestion(role){
//     return function(name){
//         if(role == 'teacher'){
//             console.log('What subject do u teach ' + name + ' ?');
//         }
//         else if(role == 'designer'){
//             console.log('What is UX design ' + name + ' ?');
//         }
//         else {
//             console.log('What is it that u do ' + name  + ' ?');
//         }
//     }
// }

// getQuestion('designer')('soban');
























