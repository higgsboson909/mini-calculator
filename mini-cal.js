
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
            // getInput(displayTextArray, displayText, "7");
            
            if(canInput(displayTextArray)){
                displayTextArray.push("7");
                displayText.textContent = displayTextArray;
            }
            else
            alert("Screen is Full");
            break;

        case "eight":
            displayTextArray.push("8");
            displayText.textContent = displayTextArray;
            break;
        
        case "nine":
            displayTextArray.push("9");
            displayText.textContent = displayTextArray;
            break;
        
        case "six":
            displayTextArray.push("6");
            displayText.textContent = displayTextArray;
            break;
        
        case "five":
            displayTextArray.push("5");
            displayText.textContent = displayTextArray;
            break;

        case "four":
            displayTextArray.push("4");
            displayText.textContent = displayTextArray;
            break;

        case "three":
            displayTextArray.push("3");
            displayText.textContent = displayTextArray;
            break;
        
        case "two":
            displayTextArray.push("2");
            displayText.textContent = displayTextArray;
            break;
        
        case "one":
            displayTextArray.push("1");
            displayText.textContent = displayTextArray;
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
            displayTextArray.push("0");
            displayText.textContent = displayTextArray;
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
