// a for Addition, s for Subtraction, m for Multiplication, & d for Division

function calculator(option, num1, num2){
    if (typeof(num1) === "number" & typeof(num2) === "number"){
        if (option === 'a'){
            return num1 + num2
        }
        else if (option === 's'){
            return num1 - num2
        }
        else if (option === 'm'){
            return num1 * num2
        }
        else if (option === 'd'){
            return num1 / num2
        }
        else{
            return ('Invalid option!')
        }
    }
    else{
        return ('Please enter valid numbers only!')
    }
};


// Running in the console
// Addition Example
console.log(calculator('a', 2, 3))

// Subtraction Example
console.log(calculator('s', 2, 3))

// Multiplication Example
console.log(calculator('m', 2, 3))

// Division Example
console.log(calculator('d', 2, 3))

/* // Running in the web browser
// Addition Example
alert(calculator('a', 2, 3))

// Subtraction Example
alert(calculator('s', 2, 3))

// Multiplication Example
alert(calculator('m', 2, 3))

// Division Example
alert(calculator('d', 2, 3)) */
