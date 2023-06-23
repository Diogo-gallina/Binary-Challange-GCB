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
  
    const decimal = binaryString.split('').reduce((accumulator, char, charNum) => {
      const result = Math.pow(2, exponent - charNum);
      const multipliedResult = multiplyResultByCharacter(result, char);
      return accumulator + multipliedResult;
    }, 0);
  
    return decimal;
  };
  
  
  const convertCharacterToNumber = (char: string) => {
    return char === '1' ? 1 : 0;
  }

  const multiplyResultByCharacter = (result: number, char: string): number => result * convertCharacterToNumber(char);
 
  


