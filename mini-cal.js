
// refer the div having all the buttons
const allBtns = document.querySelector(".all-btns");

// refer text box in display
const displayText = document.querySelector(".display-text");

let displayTextContent = [];

// event listener for each button
allBtns.addEventListener("click", (e) => {
    let target = e.target;
    switch(target.id){
        case "clear":
            console.log("cleared");
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
            displayTextContent.push("7");
            displayText.textContent = displayTextContent;
            break;

        case "eight":
            displayTextContent.push("8");
            displayText.textContent = displayTextContent;
            break;
        
        case "nine":
            displayTextContent.push("9");
            displayText.textContent = displayTextContent;
            break;
        
        case "six":
            displayTextContent.push("6");
            displayText.textContent = displayTextContent;
            break;
        
        case "five":
            displayTextContent.push("5");
            displayText.textContent = displayTextContent;
            break;

        case "four":
            displayTextContent.push("4");
            displayText.textContent = displayTextContent;
            break;

        case "three":
            displayTextContent.push("3");
            displayText.textContent = displayTextContent;
            break;
        
        case "two":
            displayTextContent.push("2");
            displayText.textContent = displayTextContent;
            break;
        
        case "one":
            displayTextContent.push("1");
            displayText.textContent = displayTextContent;
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
            displayTextContent.push("0");
            displayText.textContent = displayTextContent;
            break;
        
        case "decimal":
            console.log("deci");
            break;
        
        case "equal":
            console.log("equal");
            break;
            

        

    }

});
