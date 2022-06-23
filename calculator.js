// a for Addition, s for Subtraction, m for Multiplication, & d for Division

function calculator(option, num1, num2){
    if (typeof(num1) === "number" & typeof(num2) === "number"){
        if (option === 'a'){
            return console.log(num1 + num2)
        }
        else if (option === 's'){
            return console.log(num1 - num2)
        }
        else if (option === 'm'){
            return console.log(num1 * num2)
        }
        else if (option === 'd'){
            return console.log(num1 / num2)
        }
        else{
            return console.log('Invalid option!')
        }
    }
    else{
        return console.log('Please enter valid numbers only!')
    }
};

// Addition Example
calculator('a', 2, 3)

// Subtraction Example
calculator('s', 2, 3)

// Multiplication Example
calculator('m', 2, 3)

// Division Example
calculator('d', 2, 3)
