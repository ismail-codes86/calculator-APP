let display = document.getElementById('display');
let currentInput = '';
let operation = '';
let firstOperand = null;

function appendDigit(digit) {
    if (currentInput === '0' && digit !== '.') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function appendOperation(op) {
    if (currentInput !== '') {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
            operation = op;
            currentInput = '';
        } else {
            calculate();
            operation = op;
        }
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operation = '';
    firstOperand = null;
    display.textContent = '0';
}

function calculate() {
    if (firstOperand !== null && currentInput !== '' && operation !== '') {
        let secondOperand = parseFloat(currentInput);
        let result;
        switch (operation) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    display.textContent = 'Error';
                    clearDisplay();
                    return;
                }
                result = firstOperand / secondOperand;
                break;
        }
        currentInput = result.toString();
        firstOperand = result;
        operation = '';
        updateDisplay();
    }
}

function updateDisplay() {
    if (currentInput === '') {
        display.textContent = firstOperand !== null ? firstOperand + operation : '0';
    } else {
        display.textContent = firstOperand !== null ? firstOperand + operation + currentInput : currentInput;
    }
}
