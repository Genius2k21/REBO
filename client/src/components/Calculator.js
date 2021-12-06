import React from 'react';

function load() {

    var btns = document.querySelectorAll('#calculator span');
    var operators = ['+', '-', 'x', '÷'];
    var inputScreen = document.querySelector('#screen');
    var btnValue;
    var input;

    for(var i=0; i< btns.length; i++) {

        var decimalAdded = false; // Flag used to avoid two decimal

        btns[i].addEventListener('click', function () {

            btnValue = this.innerHTML;
            input = inputScreen.innerHTML;

            switch (btnValue) {
                case 'C':
                    inputScreen.innerHTML = '';
                    decimalAdded = false;
                    break;
                case '=':

                    // Last char of string
                    var lastChar = input[input.length - 1];

                    // Replace x to *, + to / which could be calculated in eval
                    input = input.replace(/x/g, '*').replace(/÷/g, '/');

                    // Checking the last character of the input.
                    // If it's an operator or a decimal, remove it
                    // /.$/ means last char in regex
                    if(operators.indexOf(lastChar) > -1 || lastChar == '.')
                        input = input.replace(/.$/, '');

                    if(input) {
                        // If the argument is an expression, eval() evaluates the expression.
                        // If the argument is one or more JavaScript statements, eval() executes the statements.
                        inputScreen.innerHTML = eval(input);
                    }
                    decimalAdded = false;
                    break;
                case '.':
                    if(!decimalAdded) {
                        inputScreen.innerHTML += btnValue;
                        decimalAdded = true;
                    }
                    break;
                case '+':
                case '-':
                case 'x':
                case '÷':
                    // Last char of string
                    var lastChar = input[input.length - 1];

                    // Only add operator if input is not empty and there is no operator at the last
                    if(input != '' && operators.indexOf(lastChar) == -1)
                        inputScreen.innerHTML += btnValue;

                    // Allows minus if the string is empty. The first number could be under zero
                    else if(input == '' && btnValue == '-')
                        inputScreen.innerHTML += btnValue;

                    // Allows to represent the last operation
                    if(operators.indexOf(lastChar) > -1 && input.length > 1) {
                        inputScreen.innerHTML = input.replace(/.$/, btnValue);
                    }
                    decimalAdded = false;
                    break;
                default:
                    inputScreen.innerHTML += btnValue;
                    decimalAdded = false;
                    break;
            }
        });
    }
}

const Title = () => {
    return (
        // <div className="container">
        //     <h1 className="text-center" style={{paddingTop: "30%"}}>
        //         About
        //     </h1>

        // </div>
    
        <div className="container py-5">
           <div className="row text-center alignText">
               
             
               <div className="col-lg-5 col-xs-12">
                    <h1 className="about titleHeader">
                       Cost Calculator
                    </h1>
               </div>

               





               
               
            </div>

             <div className="row text-center alignText marginTop">
                        <div className="col-lg-5 col-xs-12">
                    <h2 className="about">
                       Feature coming soon!
                    </h2>
                    <img className="calculator" src="/calculatorImage.png" alt="Coming Soon Calculator"></img>
                    </div>
               </div>
        </div>
    )
}

export default Title;