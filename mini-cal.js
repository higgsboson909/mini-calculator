
// refer the div having all the buttons
const allBtns = document.querySelector(".all-btns");

// refer text box in display
const displayText = document.querySelector(".display-text");

// array to collect inputj
let displayTextArray = [];

// control input length
const canInput = (arr) => {return arr.length < 5 ? true : false};
const getInput = (arr, boxText, char) => {
    if(canInput(arr)){
        arr.push(char);
        boxText.textContent = arr;
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
            displayTextArray= [];
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
            getInput(displayTextArray, displayText, "7");
            
            break;

        case "eight":
            
            getInput(displayTextArray, displayText, "8");
            break;
             
        case "nine":
            getInput(displayTextArray, displayText, "9");
            break;
        
        case "six":
            getInput(displayTextArray, displayText, "6");
            break;
        
        case "five":
            getInput(displayTextArray, displayText, "5");
            break;

        case "four":
            getInput(displayTextArray, displayText, "4");
            break;

        case "three":
            getInput(displayTextArray, displayText, "3");
            break;
        
        case "two":
            getInput(displayTextArray, displayText, "2");
            break;
        
        case "one":
            getInput(displayTextArray, displayText, "1");
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


    console.log(canInput(displayTextArray));
});
