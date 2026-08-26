// var myAge;
// myAge=21;
// console.log(myAge);
// var myName="JavaScript";
// var MyName="JavaScript";
// var my_name="JavaScript";
// var undefined;
// console.log(typeof undefined);
// let mySymbol = Symbol(10);
// mySymbol=11;
// console.log( mySymbol);
// var BigInt =11111111111n;
// console.log(++BigInt);
// var myScore=10;
// console.log(myScore);
// myScore=11;
// console.log(myScore);
// var isAvailable =null;
// console.log(isAvailable);
// isAvailable=true;
// console.log(isAvailable);
// document.write(" salah ");
// console.log('<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio amet earum </p>')
// document.write(myAge>myScore);
// var num1=10;
// var num2=20;
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%2==0);

// var name =prompt('please enter your name ');
// var age =prompt('please enter your age ');
// // age=Number(age)+5;
// // age=parseInt(age)+5;
// age=(+age)+5;
// alert("Hello"+name+", in 5 years you will be"+age+" years old");
// var stringNumber="123";
// var stringFloat="45.67";
// var boolean=true;
// console.log(" Before Casting "+typeof(stringNumber));
// stringNumber=parseInt(stringNumber);
// console.log(" During Casting "+stringNumber);
// console.log(" After Casting "+typeof(stringNumber));

// console.log(" Before Casting "+typeof(stringFloat));
// stringFloat=parseFloat(stringFloat);
// console.log(" During Casting "+stringFloat);
// console.log(" After Casting "+typeof(stringFloat));

// console.log(" Before Casting "+typeof(boolean));
// boolean=Number(boolean);
// console.log(" During Casting "+boolean);
// console.log(" After Casting "+typeof(boolean));

// console.log(" Before Casting "+typeof(boolean));
// boolean=string(boolean);
// console.log(" During Casting "+boolean);
// console.log(" After Casting "+typeof(boolean));

// for (var i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }
// var a = 0;
// var b = 1;
// var count = 0;

// while (count < 15) {

//     console.log(a);

//     var next = a + b;
//     a = b;
//     b = next;

//     count++;
// }
// var numbers = [10, 20, 30, 40, 50];
// var doubled = [];

// for (var i = 0; i < numbers.length; i++) {

//     doubled.push(numbers[i] * 2);
// }

// console.log(doubled);
// for (var i = 1; i <= 10; i++) {

//     for (var j = 1; j <= 10; j++) {

//         console.log(i + " x " + j + " = " + (i * j));
//     }

//     console.log("----------------");
// }



// var size=Number(prompt(" please enter the sise li array "));
// var arr=[size];

// for(var i=0;i<arr.length;i++)
// {
// arr[i] = Number(prompt("Enter number " + (i + 1)));
// }

// function sumArray(arr) {
//     if (!Array.isArray(arr)) {
//         return "Input must be an array";
//     }

//     var sum = 0;

//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }

// console.log("the sum of number :"+sumArray(arr));

// function numString(string)
// {
//     return string.length;
// }
// var name=prompt(" please enter string name ")
// numString(name);

// var num= Number(prompt(" please enter number to calculate the factorial  "));
// console.log("the factorial of "+num+"="+factorial(num))
// function factorial(num)
// {
//     if(num<=1)
//         return 1 ;

//     return(num*factorial(--num))
// }

// var student = {
//   firstname: 'Salah',
//   age: 22,
//  grades: [60, 50,90],
//  birthYear: 2005,
 
//   averageGrade: function () {
//    var sum=0;
//    for (let i = 0; i < this.grades.length; i++) {
//             sum += this.grades[i];
//         }

//         return sum / this.grades.length;
//   },

// updateAge: function() {
//         let currentYear = new Date().getFullYear();
//         this.age = currentYear - this.birthYear;
//     }
// };
// student.updateAge();
// console.log("Name: " + student.name);
// console.log("Age: " + student.age);
// console.log("Grades: " + student.grades);
// console.log("Average: " + student.averageGrade());


// document.write("-------Thank YOU-------") 

// var numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// const uniqueNumbers = numbers.filter(function(num, index) {
//     return numbers.indexOf(num) === index;
// });
// console.log(uniqueNumbers);

// var newArr = numbers.map(function (num) {
//   return Math.pow(num, 2);
// });
// console.log(newArr);
// var newArr1 = newArr.filter(function (num) {
//   return num>10;
// });
// console.log(newArr1 );
// var sum = newArr1.reduce(function (total, num) {
// total += num;
//     return total;

// }, 0);

// console.log(sum);
// const nestedNumbers = [[1, 2], [3, 4], [5, [6, 7]]];

// const step1 = nestedNumbers.flat();

// console.log(step1);

// const step2 = nestedNumbers.flat(2);

// console.log(step2);


// var students = [
//   { name: 'Salah', age: 20, grade: 85 },
//   { name: 'Hassan Al Dash', age: 40, grade: 90 },
//   { name: 'soliman', age: 19, grade: 78 },  
//   { name: 'Ali', age: 22, grade: 92 },
//   { name: 'Ahmed', age: 21, grade: 88  },

  
// ];
// students.sort(function(a, b) {
//   return a.name.localeCompare(b.name);
// });
// console.log(students);

// var student = students.find(function(a) {
//   return a.grade >= 90 && a.age < 100;
// });
// console.log(student);

// var filteredStudents = students.filter(function(a) {
//   return a.grade <60;
// });
// console.log(filteredStudents);
// students.push({ name: 'Omar', age: 23, grade: 95 });
// console.log(students);
// for (var i in students) {
//   console.log(i);
//   console.log(students[i]);
// }
// students.pop();
// console.log(students);

// for (var value of students) {
//   console.log(value);
// }

// students.splice(2, 0, { name: 'Khalid', age: 24, grade: 80 }    );
// students.splice(3, 1);

// console.log(students);
// document.write("-------Thank YOU-------") 




// Lab اخر مرة قبل انهاردة 
//  function divideNumbers(num1, num2) {

//     // Check if both values are numbers
//     if (typeof num1 !== "number" || typeof num2 !== "number") {
//         throw new TypeError("Both values must be numbers");
//     }

//     // Check division by zero
//     if (num2 === 0) {
//         throw new Error("Cannot divide by zero");
//     }

//     // Return division result
//     return num1 / num2;
// }


// // Test 1: Two valid numbers
// try {
//     console.log("Result:", divideNumbers(10, 2));
// } catch (error) {
//     console.log("Error Name:", error.name);
//     console.log("Error Message:", error.message);
//     console.log("Complete Error:", error);
// } finally {
//     console.log("Division operation completed.");
// }


// // Test 2: String and number
// try {
//     console.log("Result:", divideNumbers("10", 2));
// } catch (error) {
//     console.log("Error Name:", error.name);
//     console.log("Error Message:", error.message);
//     console.log("Complete Error:", error);
// } finally {
//     console.log("Division operation completed.");
// }


// // Test 3: Number divided by zero
// try {
//     console.log("Result:", divideNumbers(10, 0));
// } catch (error) {
//     console.log("Error Name:", error.name);
//     console.log("Error Message:", error.message);
//     console.log("Complete Error:", error);
// } finally {
//     console.log("Division operation completed.");
// }

// // 1. Create an object representing the current date and time
// const now = new Date();


// // 2. Print current date and time
// console.log("Full Date and Time:", now);


// // Current year
// console.log("Current Year:", now.getFullYear());


// // Current month
// // JavaScript months start from 0
// console.log("Current Month:", now.getMonth() + 1);


// // Current day of the month
// console.log("Day of Month:", now.getDate());


// // Current day of the week
// // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
// console.log("Day of Week:", now.getDay());


// // Current hour
// console.log("Hour:", now.getHours());


// // Current minute
// console.log("Minute:", now.getMinutes());


// // Current second
// console.log("Second:", now.getSeconds());


// // 3. Create a date representing the student's next exam

// const examDate = new Date(2026, 8, 15, 10, 0, 0);
// // 8 = September
// // 15 = day
// // 10 = hour


// // 4. Calculate remaining days

// const difference = examDate.getTime() - now.getTime();

// const remainingDays = Math.ceil(
//     difference / (1000 * 60 * 60 * 24)
// );

// console.log("Remaining Days:", remainingDays);


// // 5. Display exam date in readable format

// console.log("Exam Date:", examDate.toDateString());

// // 1. Original training date

// const trainingDate =
//     Temporal.PlainDate.from("2026-07-20");

// console.log("Original Training Date:", trainingDate);


// // 2. Add ten days

// const afterTenDays =
//     trainingDate.add({ days: 10 });

// console.log("After Adding 10 Days:", afterTenDays);


// // 3. Subtract three days

// const finalDate =
//     afterTenDays.subtract({ days: 3 });

// console.log("After Subtracting 3 Days:", finalDate);


// // 4. Calculate difference

// const difference =
//     trainingDate.until(finalDate, {
//         largestUnit: "days"
//     });

// console.log("Difference in Days:", difference.days);


// // 5. Lecture starting time

// const lectureStartTime =
//     Temporal.PlainTime.from("09:00");

// console.log("Lecture Start Time:", lectureStartTime);


// // 6. Add three hours

// const lectureEndTime =
//     lectureStartTime.add({ hours: 3 });

// console.log("Lecture End Time:", lectureEndTime);


//lAB today 
var trainingName ="Summer Training";
console.log(trainingName);
console.log(window.trainingName);
console.log(window);
console.log(globalThis);
console.log(window === globalThis);

function showBrowserInfo() {
    console.log(" •	Browser inner width: " + window.innerWidth);
    console.log(" •	Browser outer width: " + window.outerWidth);
    console.log(" •	Browser outer height: " + window.outerHeight);
    console.log(" • Browser language: " + window.navigator.language);
    console.log(" • the browser is online: " + window.navigator.onLine);
    console.log(" • Current page URL: " + window.location.href);
    console.log(" • Current URL protocol: " + window.location.protocol);
    console.log(" •	Current hostname: " + window.location.hostname);
    console.log(" •History length: " + window.history.length);
}
showBrowserInfo();



// window.alert("Welcome to the Summer Training Program!");
// var userName = window.prompt("Welcome to the Summer Training Program! What is your name?");
// var userConfirmed = window.confirm("Do you want to continue?");
// console.log("User Name: " + userName);
// console.log("User Confirmed: " + userConfirmed);


let count = 5;

const intervalId = setInterval(function () {

    console.log(count);

    if (count === 1) {
        clearInterval(intervalId);
        console.log("Training Started!");
    }

    count--;

}, 1000);

console.log("A"); // 1

setTimeout(function() {

    console.log("B"); // 7

}, 0);

Promise.resolve().then(function() {

    console.log("C"); // 5

});

console.log("D"); // 2

queueMicrotask(function() {

    console.log("E"); // 6

});

console.log("F"); // 3

setTimeout(function() {

    console.log("G"); // 8

}, 0);

console.log("H"); // 4




