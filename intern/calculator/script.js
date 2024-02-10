let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function deleteLastDigit() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function calculateResult() {
    try {
        if (result.value.includes('%')) {
            const expression = result.value.replace('%', '*0.01');
            result.value = eval(expression);
        } else {
            result.value = eval(result.value);
        }
    } catch (error) {
        result.value = 'Error';
    }
}