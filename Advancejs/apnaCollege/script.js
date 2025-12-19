console.log("Hello Word");

let a = 6;
let b = 3;
console.log( "a+b ="+ (a+b));
console.log( "a-b ="+ (a-b));
console.log( "a*b ="+ a*b);
console.log( "a/b ="+ a/b);


// let no = prompt("Hello");
// console.log(no);

// let num = prompt("Enter a Number");

// if(num % 5 === 0)
// {
//     console.log(num, "is a multiple of 5");
// }
// else
// {
//     console.log(num, "is not a multiple of 5");
// }


// let score = prompt("Enter the score")

// if(score>=90 && score<=100)
// {
//     console.log("Grade - A");
// }

// else if(score>=70 && score<90)
// {
//     console.log("Grade - B");
// }
// else if(score>=60 && score<70)
// {
//     console.log("Grade - C");
// }
// else if(score>=50 && score<60)
// {
//     console.log("Grade - D");
// }
// else 
// {
//     console.log("Grade - F");
// }

// let str = "BAIJU YADAV";

// let size = 0;
// for(let val of str)
// {
//     console.log("val = ",val);
//     size++;
// }

// console.log("String size = ", size);

// let student = 
// {
//     Name: "Baiju Yadav",
//     age: 22,
//     cgpa: 9.2,
//     isPass: true,
// };

// for(let key in student)
// {
//     console.log("key = ", key, "Value = ", student[key]);
// }

// for( let num=0; num<=100;  num++)
// {
//     if(num % 2 ===0)
//     {
//         console.log("num = ",num);
//     }
    
// }

// let gamno = 30;

// let userno = prompt("Guess the game number : ");

// while(gamno!=userno)
// {
//     userno = prompt("You entered wrong number. Guess again: ");
// } 

// console.log("Congratulation, You entered the right number");


// let fullname = prompt("Enter your full name withot space");

// let username = "@"+fullname + fullname.length;

// console.log(username);

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let val of marks)
// {
//     sum += val;
// }

// let avg = sum/marks.length;

// console.log(`Avg marks of Class = ${avg}`);

// let items = [250, 645, 300, 900, 50];

// let i = 0;

// for(let val of items)
// {
//     // console.log(`Value at index ${i} = ${val}`);

//     let offer = val/10;

//     items[i] = items[i]-offer;

//     // console.log(`Value after Offer = ${items[i]}`);
//     i++;
// }

// console.log(items);
   

// let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// // console.log(comp);
// // comp.shift();

// // comp.splice(2,1,"Ola");

// comp.push("Amazon");

let n = prompt("enter a Number : ");

let arr = [];

for(let i=1; i<=n; i++)
{
    arr[i-1] = i;

}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res+curr;
});

console.log("Sum = ",sum);

let factorial = arr.reduce((res, curr) => {
    return res*curr;
})

console.log("Factorial = ",factorial);



