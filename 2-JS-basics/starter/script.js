// var age = 16;
// console.log(!(age < 40));

// age > 30 ? console.log("true") : console.log("false");

// var drink = age >= 18 ? "Beer" : "Juice";
// console.log(drink);

// var job = "developer";
// switch (job) {
//     case 'teacher':
//     case 'developer':
//         console.log("John is a teacher");
//         break;
//     case "doctor":
//         console.log("John is a doctor");
//         break;
//     default:
//         console.log("John is looking for a job")
// }

// // truthy and falsy values

// var height = 0;
// (height || height === 0) ? console.log("height is defined") : console.log("height is not defined");

// var myNum = 23;
// (myNum === '23') ? console.log('Type coersion is done') : console.log('Type coersion not done');




//function expressions

// var printDetails = function(profession){
//     switch(profession){
//         case 'teacher':
//             return 'Is a teacher';
//         case 'doctor':
//             return 'cures patients';
//         default:
//             return 'does something else';
//     }
// }

// console.log(printDetails('sds'));


// arrays

// var myArray = ['John', 'Mary', true, 44];
// console.log(myArray);

// myArray.push(25);
// console.log(myArray);

// myArray.unshift('Mr.');
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// function tipCalculator(bill){
//     var percentage;
//     if(bill < 50)
//         percentage = .2;
//     else if(bill >= 50 && bill < 200)
//         percentage = .15;
//     else
//         percentage = .1;
//     return percentage * bill;
// }

// var bills = [120, 50, 305];
// var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

// var totalBill = [
//                 bills[0] + tips[0],
//                 bills[1] + tips[1],
//                 bills[2] + tips[2]
// ];
// console.log(totalBill)


// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     calcAge: function(){
//         this.age = 2018 - this.birthYear;
//     }
// };
// john.calcAge();
// console.log(john);
// console.log(a);

// var a = 'Hello';

// myFunc();

// var myFunc = function(){
//     console.log(a + ' from myFunc');
// }

// func();

// function func(){
//     console.log(a + ' from func');
// }

// var a = 'Hello';
// first();

// function first(){
//     var b = 'Hi';
//     second();

//     function second(){
//         var c = 'Hey';
//         console.log(a + b + c);
//         third();
//     }
// }
// function third(){
//     console.log(a);
// }

// this

// console.log(this);
// myFunc();
// function myFunc(){
//     var a = 23;
//     console.log(a);
//     console.log(this);
// }


// var john = {
//     name: 'john',
//     year: 1995,
//     getAge: function(){
//         console.log(2019-this.year);
//         console.log(this);
        
//     }
// }
// john.getAge();

// var mark = {
//     name: 'mark'
// }

// mark.year = john.year;
// mark.getAge = john.getAge;
// mark.getAge();






















// var firstName = 'John';

// var lastName = 'Smith';
 
// var age = 25;

// var fullAge = true;

// var job, isMarried;

// console.log(firstName + ' ' + lastName);

// console.log(fullAge);

// job = 'Teacher';
// isMarried = false;

// console.log(job);

// console.log(firstName + ' is a ' + age +' year old ' + job + '. Is he Married? ' + isMarried);

// // alert(firstName + ' is a ' + age +' year old ' + job + '. Is he Married? ' + isMarried)

// // prompt(firstName + ' is a ' + age +' year old ' + job + '. Is he Married? ' + isMarried);
// var ageMark = 30;
// var currYear = 2019;
// var yearJohn = currYear - age;
// var yearMArk = currYear - ageMark;

// console.log(yearJohn);
// console.log('Hi');

// console.log(typeof yearJohn);
// console.log(typeof 'soban');
// console.log(typeof isMarried);



// Single Line comment

/*  
    Multi Line Comment
*/

// var weightMark  = 78;
// var heightMark = 1.9;

// var weightJohn = 89;
// var heightJohn = 1.78;

// var bmiMark = weightMark/(heightMark ** 2);
// var bmiJohn = weightJohn/(heightJohn ** 2);

// var isMarkBmiGreater = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn);

// console.log('Is Mark\'s BMI greater?');
// console.log(isMarkBmiGreater);

// var age = 25;