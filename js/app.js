
 while (true){
    let inputHours = prompt("choose and print: add, sub, mult or div");
    let firstNumb = prompt("Input first number please");
    let secondNumb = prompt("Input second number please");
    let result;
    if (inputHours == "add"){
       result=parseInt(firstNumb)+parseInt(secondNumb);
    }   else if (inputHours == "sub"){
      result=parseInt(firstNumb)-parseInt(secondNumb);
    }   else if (inputHours == "mult"){
      result=parseInt(firstNumb)*parseInt(secondNumb);
    }   else if (inputHours == "div"){
      result=parseInt(firstNumb)/parseInt(secondNumb);
    }   
    alert(result)
}

