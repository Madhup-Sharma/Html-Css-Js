let multiply = function(num1, num2){
    return num1 * num2;
}

console.log(multiply(3,4));

// let runTwice = function(task){
//     task();
//     task();
// }

// console.log(runTwice(multiply(3,4))); 

let growClass = i =>{
    return `
        height: ${30 * i}px;
        width: ${60 * i}px;
    
    `;
};

let button = document.querySelector('#btn');
let count = 1;
let grow = () => {
    
    button.style.cssText = growClass(count++);
};


button.addEventListener('click', () => {
    setTimeout(grow, 2000);
});



// using the for each loop for summation ---> Accumulator Pattern

let numbers = [1,2,3,4,5,6,7,8,9];
let sum = 0;
numbers.forEach((num) => {

    sum+=num;
});


// using the map function  for squaring
let squares = num => num * num;
console.log(sum);

let finalArray = numbers.map(squares);

console.log(finalArray);