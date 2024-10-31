

const allBtns = document.querySelector(".all-btns");

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
            console.log(7);
            break;

        case "eight":
            console.log(8);
            break;
        
        case "nine":
            console.log(9);
            break;
        
        case "six":
            console.log(6);
            break;
        
        case "five":
            console.log(5);
            break;

        case "four":
            console.log(4);
            break;

        case "three":
            console.log(3);
            break;
        
        case "two":
            console.log(2);
            break;
        
        case "one":
            console.log(1);
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
            console.log("zero");
            break;
        
        case "decimal":
            console.log("deci");
            break;
        
        case "equal":
            console.log("equal");
            break;
            

        

    }

});
