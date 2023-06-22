const binaryInput = document.getElementById('binary-input') as HTMLInputElement;
const convertButton = document.getElementById('binary-button-convert') as HTMLButtonElement;
const textArea = document.getElementById('binary-text-area') as HTMLTextAreaElement;

convertButton.addEventListener('click', () => {
    const binaryString = binaryInput.value;
    const decimalValue = convertBinaryToDecimal(binaryString);
    textArea.value = decimalValue.toString();
});

const isValidBinary = (binary: string): boolean => {
    const validChars = /^[01]+$/;
    return validChars.test(binary);
}

const showAlert = (message: string) => {
    alert(message);
};

const convertBinaryToDecimal = (binaryString: string): number => {
    if (binaryString.trim() === '') {
        showAlert('Insert a binary value, please.');
        return 0;
    }

    if (!isValidBinary(binaryString)) {
        showAlert('Entered characters can only be 0 or 1');
        return 0;
    }

    const exponent = binaryString.length - 1;
  
    const sum = binaryString.split('').reduce((accumulator, char, charNum) => {
      const result = calculatePowerOfTwo(exponent - charNum);
      const multipliedResult = multiplyResultByCharacter(result, char);
      return accumulator + multipliedResult;
    }, 0);
  
    return sum;
  };
  
  const calculatePowerOfTwo = (exponent: number): number => {
    let result = 1;
  
    for (let index = 0; index < exponent; index++) {
      result *= 2;
    }
  
    return result;
  };
  
  const multiplyResultByCharacter = (result: number, char: string): number => {
    return result * (Number(char) - 0);
  };
  


