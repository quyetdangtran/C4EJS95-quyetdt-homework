// //-------- excercise 1
// // *question 1:1.	What are var and const in JavaScript?
// // var và const là từ khóa để  khai báo tên biến.
// // *question 2.	What are the differences between let and var?
// // var sẽ có scope là global scoped khi ra khỏi block thì biến vẫn tồn tại.
// // let có scope là block scoped nghĩa là mọi thay đổi của biến chỉ tồn tại trong scoped nếu ra khỏi scope thì sẽ không sử dụng được.
// // *question 3. What are the differences between let and const?
// // let can be resigned and const can't be resign.
// //  *4.	What to use in what cases?

// // -------excercise 2
// // *question 1.	What is Boolean?
// //  Boolean là một kiểu dữ liệu trong javascript.
// // *question 2.	What results in Boolean?
// // kết quả của kiểu dữ liệu boolean là 2 giá trị 'true' và 'false'.
 // -------excercise 3
 // part a.	7 numbers, starting from 0 (no user input)
 for (i=0;i<7;i++){
 console.log(i)
 }
// // part Bb.	n numbers, starting from 0, n entered by user
 let number = prompt('Enter a number')
 for(i=0;i<number;i++){
 console.log(i)
 }
 //part cc.	A sequence of numbers, starting from 3, ending before n, n entered by user
let n_number = prompt('Enter a number')
 for(i=3;i<n_number;i++){ console.log(i)
 }
 // part Dd.	A sequence of numbers, starting from c, ending before n, c and n entered by user


 let stratFrom = c= prompt('enter c')
 let endBefore = n= prompt('enter n ')
 for(i=c;i<n;i++){
 console.log(i)
 }
 // part ee.	A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
 let a= prompt('enter a')
 let b= prompt('enter b ')
 for(i=a;i<b;i+=3){
 console.log(i)
 }
// part f.	A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user

// excercise 4.	Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
let factorialOfN = prompt('enter a number')
 let fact = 1
 for (i=1;i<=factorialOfN;i++){
 fact = fact * i
 console.log(fact)
 }
 alert('the factorial of 5 is '+ fact)
 // part 5.	Write a program asking users their age, and then decide if they are old enough to view a 14+ content
 let age = prompt ('How old are you ?')
 if (age < 14){
 alert('you are not old enough to view this content.')
 }else if(age > 14){
 alert('enioy!') }
 // part 6.	Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
 // let x = prompt('enter a number')
 // part 7.	Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
 // part 8.	Write a script to check if a number is even (divisible by 2) or odd number
 let y = prompt( ' y =')
 for (i = 1; i <= y; i++){
 if(y% 2 ===0){
 alert(y +'is a even  number  ')
 }else if (y % 2 !== 0){
     alert( y +'is an odd number')
 }
 }
// part 10
let mass  = prompt('your weight in kg?')
let height  = prompt('your height in cm?')
let BMI = mass / ((height*0.01)* (height*0.01) )
alert('Your BMI is '+ BMI)
if(BMI <16){
alert('you are severely underweight')
}else if(16<BMI && BMI < 18.5 ){
alert('you are underweight')
}else if(BMI > 18.5 && BMI <25){
alert('you are normal weight')
}else if( BMI > 25 && BMI <30){
alert('you are overweight')
}else if(BMI >30){
alert('you are obese')
}