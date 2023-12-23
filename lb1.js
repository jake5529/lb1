function addition(a, b) {
    return a + b;
  }
  
  function subtraction(a, b) {
    return a - b;
  }
  
  function multiplication(a, b) {
    return a * b;
  }
  
  function division(a, b) {
    return a / b;
  }
  
  function remainder(a, b) {
    return a % b;
  }
  
  // Пример использования функций
  var operand1 = 5;
  var operand2 = 3;
  
  var result = addition(operand1, operand2);
  console.log('Сумма:', result);
  
  result = subtraction(operand1, operand2);
  console.log('Вычитание:', result);
  
  result = multiplication(operand1, operand2);
  console.log('Умножение:', result);
  
  result = division(operand1, operand2);
  console.log('Деление:', result);
  
  result = remainder(operand1, operand2);
  console.log('Остаток от деления:', result);