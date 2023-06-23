var binaryInput = document.getElementById('binary-input');
var convertButton = document.getElementById('binary-button-convert');
var textArea = document.getElementById('binary-text-area');
convertButton.addEventListener('click', function () {
    var binaryString = binaryInput.value;
    var decimalValue = convertBinaryToDecimal(binaryString);
    textArea.value = decimalValue.toString();
});
var isValidBinary = function (binary) {
    var validChars = /^[01]+$/;
    return validChars.test(binary);
};
var showAlert = function (message) {
    alert(message);
};
var convertBinaryToDecimal = function (binaryString) {
    if (binaryString.trim() === '') {
        showAlert('Insert a binary value, please.');
        return 0;
    }
    if (!isValidBinary(binaryString)) {
        showAlert('Entered characters can only be 0 or 1');
        return 0;
    }
    var exponent = binaryString.length - 1;
    var decimal = binaryString.split('').reduce(function (accumulator, char, charNum) {
        var result = Math.pow(2, exponent - charNum);
        var multipliedResult = multiplyResultByCharacter(result, char);
        return accumulator + multipliedResult;
    }, 0);
    return decimal;
};
var convertCharacterToNumber = function (char) {
    return char === '1' ? 1 : 0;
};
var multiplyResultByCharacter = function (result, char) { return result * convertCharacterToNumber(char); };
