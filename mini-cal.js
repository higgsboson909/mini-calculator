
// refer the div having all the buttons
const allBtns = document.querySelector(".all-btns");

// refer text box in display
const displayText = document.querySelector(".display-text");

displayText.textContent = "0";      // show 0 on screen by default

// perform operations on numbers
let operate = (o, num1, num2) => {
    switch(o){
        // num1 as output if no operation is performed 
        case '':
            return num1;
            break;
        case '+':
            return num1 + num2;
            break;
    }
}

// to collect string input
let input = '';

// initial values
let inputNum1 = 0;
let inputNum2 = 0;
let op = '';

// check for operator pressing
let isOpPressed = (operator) => {return (operator !== '') ? true : false};

// control input length
const canInput = (str) => {return str.length < 9 ? true : false};

// display input to screen
const displayInput = (num, boxText, char) => {

    if(canInput(num)){
        // concatenate with next char
        input = num + char;
        boxText.textContent = input;

        // if no operator is pressed
        if(!isOpPressed(op)){
            // take input as 1st number
            inputNum1 = +input;

        } // if not
        else if(isOpPressed(op)){
            // take as 2nd number 
            inputNum2 = +input;
        }
    }
    else
        alert("Screen is Full");       
}

// calculate previous operations
function calculatePrevious(op){
    if(isOpPressed(op)){
        
        // calculate the previous values and insert as 1st value 
        inputNum1 = operate(op, inputNum1, inputNum2);
        // display the calculated value
        displayText.textContent = inputNum1;
        inputNum2 = 0;
   }
}  


// event listener for each button
allBtns.addEventListener("click", (e) => {
    let target = e.target;
    switch(target.id){
        
        case "clear":
            // show 0 on clearing the screen
            displayText.textContent = "0";
            inputNum1 = inputNum2 = 0;
            op = '';
            // empty the  input array 
            input= '';
            break;

        case "change-sign":

            console.log("sign-changed");

            break;

        case "percent":
            console.log("percent");
            break;

        case "div":
            console.log("divide");
            break;

        case "seven":
            displayInput(input, displayText, "7");
            break;

        case "eight":            
            displayInput(input, displayText, "8");
            break;
             
        case "nine":
            displayInput(input, displayText, "9");
            break;
        
        case "six":
            displayInput(input, displayText, "6");
            break;
        
        case "five":
            displayInput(input, displayText, "5");
            break;

        case "four":
            displayInput(input, displayText, "4");
            break;

        case "three":
            displayInput(input, displayText, "3");
            break;
        
        case "two":
            displayInput(input, displayText, "2");
            break;
        
        case "one":
            displayInput(input, displayText, "1");
            break;

        case "zero":
            // control the default zero on screen 
            if(displayText.textContent !== '0'){
                displayInput(input, displayText, "0");
            }
            break;
        
        case "decimal":
            // allow only 1 decimal in string
            if(!(displayText.textContent.includes('.'))){
                (displayText.textContent === '0') ? displayInput(input, displayText, "0.") : displayInput(input, displayText, "."); 
            }
            break;
        
        case "div":
            op = '/';
            break;

        case "product":
            console.log("product");
            break;
        
        case "subtract":
            op = '-';
            console.log("subtract");
            break;
        
        case "sum":
            calculatePrevious(op);
            op = '+';
            input = '';
            break; 

        case "equal":
            
            inputNum1 =  (operate(op, inputNum1, inputNum2));
            displayText.textContent = inputNum1; 
            input = '';
            inputNum2 = 0;
            op = '';
            break;
    }



});


