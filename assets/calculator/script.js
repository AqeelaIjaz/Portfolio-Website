let screen = document.getElementById('screen');
let expression = '';

function add(value) {
    expression = expression + value;
    screen.value = expression;
}

function clearAll() {
    expression = '';
    screen.value = '0';
}

function getAnswer() {
    let calc = expression.replace(/%/g, '/100');
    let result = eval(calc);
    screen.value = result;
    expression = result;
}

clearAll();