var input = { 'array': [] };

input.getInput = function () {
    return this.array.join("");
}

var output = {};
output.text = document.getElementById('output');

var clickNumbers = function (event) {
    var str = event.target.innerHTML;
    //event.target: <button id="9" onclick="clickNumbers(event)">9</button>
    //event.garget.innerHTML: 9
    console.log(str);

    switch (str) {
        case 'BS':
            input.array.pop();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            input.array.push(' ' + str + ' ');
            break;
        default:
            input.array.push(str);
    }

    if(input.array.length === 0){
        output.text.innerHTML = "Empty";
    } else{
    output.text.innerHTML = input.getInput();
    }
}

var showResult = function (event) {
    output.text.innerHTML = input.getInput();
}

// var input = {};

// input.init = function (str) {
//     this.list = str.split(" ");
// };

// input.empty = function () {
//     return this.list.length == 0;
// };

// input.getValue = function () {
//     var str = this.list.shift();
//     var n = Number(str);
//     return n;
// };

// input.getOperator = function () {
//     var op = this.list.shift();
//     if (op === "+" || op === "-" || op === "*" || op === "/" || op === "q") {
//         return op;
//     } else {
//         alert("올바른 연사자를 입력하세요.");
//     }
// };

// calculator = {};
// calculator.calculate = function (first, second, op) {
//     var ret;
//     switch (op) {
//         case "+":
//             ret = first + second;
//             break;
//         case "-":
//             ret = first - second;
//             break;
//         case "*":
//             ret = first * second;
//             break;
//         case "/":
//             ret = first / second;
//             break;
//         default:
//             return NaN;
//     }
//     return ret;
// };

// var output = {};
// output.out = document.getElementById('output');

// output.print = function (value) {
//     this.out.innerHTML = "최종 결과값은" + value + "입니다.";
// };

// function calc() {
//     var str = document.getElementById('input').value;
//     input.init(str);
//     var result = input.getValue();
//     while (!input.empty()) {
//         var op = input.getOperator();
//         var second = input.getValue();
//         result = calculator.calculate(result, second, op);
//     }
//     output.print(result);
// };