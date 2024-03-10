
document.addEventListener("DOMContentLoaded", function() {
  
    document.querySelector(".calResult").addEventListener("click", calResult);

    document.querySelector(".Resetbtn").addEventListener("click", reset);

    function calResult(){
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var operation = document.getElementById('operation').value;
            var resultField = document.getElementById('result');
        
            
        
            switch (operation) {
                case 'add':
                    resultField.value = num1 + num2;
                    break;
                case 'subtract':
                    resultField.value = num1 - num2;
                    break;
                case 'multiply':
                    resultField.value = num1 * num2;
                    break;
                case 'divide':
                    if (num2 !== 0) {
                        resultField.value = num1 / num2;
                    } else {
                        resultField.value = 'Cannot divide by zero';
                    }
                    break;
                default:
                    resultField.value = 'Invalid operation';
                    break;
            }
        }

    function reset() {
        location.reload();
    }
});