$(document).ready(function() {
  $('#binary-button-convert').click(function() {
    const binary = $('#binary-input').val();
    const sum = convertBinaryToDecimal(binary);
    $('#txtDecimal').val(sum);
  });
});

function convertBinaryToDecimal(binary) {
  let exponent = binary.length - 1;
  let sum = 0;

  for (let charNum = 0; charNum < binary.length; charNum++) {
    const char = binary.charAt(charNum);
    const result = calculatePowerOfTwo(exponent);
    const multipliedResult = multiplyResultByCharacter(result, char);
    sum += multipliedResult;
    exponent--;
  }

  return sum;
}

function calculatePowerOfTwo(exponent) {
  let result = 1;
  
  for (let index = 0; index < exponent; index++) {
    result *= 2;
  }
  
  return result;
}

function multiplyResultByCharacter(result, char) {
  return result * (char - '0');
}