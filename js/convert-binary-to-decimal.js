$(document).ready(function() {
  $('#binary-button-convert').click(function() {
    const binary = $('#binary-input').val();

    if (binary.trim() === '') {
      alert('Insert a binary value, please.');
      return;
    } else if(!isValidBinary(binary)){
      alert('Entered characters can only be 0 or 1');
      return;
    }
    
    const sum = convertBinaryToDecimal(binary);
    $('#binary-text-area').val(sum);
  });
});

function isValidBinary(binary) {
  const validChars = /^[01]+$/;
  return validChars.test(binary);
}

const convertBinaryToDecimal = (binary) => {
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

const calculatePowerOfTwo = (exponent) => {
  let result = 1;
  
  for (let index = 0; index < exponent; index++) {
    result *= 2;
  }
  
  return result;
}

const multiplyResultByCharacter = (result, char) => {
  return result * (char - '0');
}