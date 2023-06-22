const binaryInput = document.getElementById('binary-input');
const convertButton = document.getElementById('binary-button-convert');
const textArea = document.getElementById('binary-text-area');
convertButton.addEventListener('click', () => {
    const binaryString = binaryInput.value;
    const decimalValue = convertBinaryToDecimal(binaryString);
    textArea.value = decimalValue.toString();
});
function convertBinaryToDecimal(binaryString) {
    const binaryArray = binaryString.split('');
    const decimalValue = binaryArray.reduce((accumulator, currentValue) => {
        if (currentValue === '0' || currentValue === '1') {
            return accumulator * 2 + parseInt(currentValue);
        }
        else {
            return accumulator;
        }
    }, 0);
    return decimalValue;
}
