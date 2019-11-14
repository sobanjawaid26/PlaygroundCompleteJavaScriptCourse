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



// Bind , call And apply

// var john = {
//     name: 'john',
//     age: 25,
//     job: 'designer',
//     presentation: function(occasion, timeOfDay){
//         if(occasion === 'formal'){
//             console.log('Good ' + timeOfDay + '. My name is ' + this.name + ', I am ' + this.age + ' years old, I am a ' + this.job);
//         } else if(occasion === 'casual'){
//             console.log('Hey everyone '  + '. My name is ' + this.name + ', I am ' + this.age + ' years old, I am a ' + this.job + ' Have a great ' + timeOfDay);
//         }
//     }
// }
// // john.presentation('formal', 'morning');

// var emily = {
//     name: 'emily',
//     age: 30,
//     job: 'teacher'
// }

// john.presentation.call('emily','casual','evening');

// var johnCasual = john.presentation.bind('john', 'casual');
// johnCasual('afternoon');

// john.presentation.apply('john', ['formal', 'morning'])

// var emilyCasual = john.presentation.bind('emily','casual');
// emilyCasual('afternoon');

(function() {
    function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer; 
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for (let index = 0; index < this.answers.length; index++) {
            console.log(index + " - " + this.answers[index]);
            
        }
    }
    
    Question.prototype.checkAnswer = function(){
        if(ans === this.correctAnswer){
            console.log('Correct answer!');
        }
        else{
            console.log('Wrong answer');
        }
    }
    
    var q1 = new Question('What is the name of the course tutor', ['Jack', 'Max', 'Jonas'], 2);
    var q2 = new Question('Is Javascript the best language', ['yes', 'no'], 0);
    var q3 = new Question('How do You describe Javascript', ['boring', 'fun', 'tiring'], 1);
    
    var questions = [q1,q2,q3];

    function nextQuestion(){
    
        var n = Math.floor(Math.random() * questions.length);
    
        questions[n].displayQuestion();
    
        var ans = parseInt(prompt('Please select the correct answer'));
    

        if(ans !== 'exit'){
            questions[n].checkAnswer(ans);

            nextQuestion();
        }
       
    }
    nextQuestion();
})();










