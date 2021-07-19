const number1 = document.getElementById("num1")! as HTMLInputElement;
const number2 = document.getElementById("num2")! as HTMLInputElement;
const btnAdd = document.getElementById("add")! as HTMLInputElement;

function sum(number1:number, number2:number) {
    return number1+number2;
}

btnAdd.addEventListener('click', function() {
    console.log(sum(+number1.value, +number2.value))
});