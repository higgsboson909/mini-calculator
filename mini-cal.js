
// refer the div having all the buttons
const allBtns = document.querySelector(".all-btns");

// refer text box in display
const displayText = document.querySelector(".display-text");

// array to collect input
let input = '';

let number;

// control input length
const canInput = (arr) => {return arr.length < 9 ? true : false};

// display array to screen
const displayInput = (arr, boxText, char) => {

    if(canInput(arr)){
        // concatenate with next char
        input = arr + char;
        // update the Screen
        boxText.textContent = input;
    }
    else
        alert("Screen is Full");   
    
}

// event listener for each button
allBtns.addEventListener("click", (e) => {
    let target = e.target;
    switch(target.id){
        
        case "clear":
            // make text empty
            displayText.textContent = "";

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

        case "div":
            console.log("divide");
            break;

        case "product":
            console.log("product");
            break;
        
        case "subtract":
            console.log("subtract");
            break;
        
        case "add":
            console.log("add");
            break;
        
        case "zero":


            break;
        
        case "decimal":
            console.log("deci");
            break;
        
        case "equal":
            console.log("equal");
            break;


        

    }


    console.log(canInput(input));
});
