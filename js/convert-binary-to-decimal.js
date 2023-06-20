$(document).ready(function() {
  $('#binary-button-convert').click(function() {
    const binary = $('#binary-input').val();
    const sum = convertBinaryToDecimal(binary);
    $('#txtDecimal').val(sum);
  });
});

function calculatePowerOfTwo(exponent) {
  let result = 1;
  
  for (let index = 0; index < exponent; index++) {
    result *= 2;
  }
  
  return result;
}
