let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = null;

function inputDigit(digit) {
    if (currentInput === '0') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function inputOperator(op) {
    if (operator && previousInput !== null) {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
}

function calculate() {
    let result;
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr !== 0 ? prev / curr : 'Error';
            break;
        case '%':
            result = prev % curr;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = null;
    previousInput = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}
