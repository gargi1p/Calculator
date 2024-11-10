let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput.length < 4) {
        currentInput += number;
        document.getElementById('display').value = previousInput + ' ' + operator + ' ' + currentInput;
    }
}

function setOperator(op) {
    if (currentInput) {
        operator = op;
        previousInput = currentInput;
        currentInput = '';
        document.getElementById('display').value = previousInput + ' ' + operator;
    }
}

function calculate() {
    if (previousInput && currentInput && operator) {
        let result;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Error';
                break;
            default:
                return;
        }

        document.getElementById('display').value = result;
        currentInput = result.toString().slice(0, 4); // Limit to 4 digits if needed
        previousInput = '';
        operator = '';
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
}
