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

  const sum = binary.split('').reduce((accumulator, char, charNum) => {
    const result = calculatePowerOfTwo(exponent - charNum);
    const multipliedResult = multiplyResultByCharacter(result, char);
    return accumulator + multipliedResult;
  }, 0);

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