const binaryInput = document.getElementById("binary-input") as HTMLInputElement;
const convertButton = document.getElementById(
  "binary-button-convert"
) as HTMLButtonElement;
const textArea = document.getElementById(
  "binary-text-area"
) as HTMLTextAreaElement;

convertButton.addEventListener("click", () => {
  const binaryString = binaryInput.value;
  const decimal = convertBinaryToDecimal(binaryString);
  textArea.value = decimal.toString();
});

const convertBinaryToDecimal = (binaryString: string): number => {
  //Fazer uma função para as duas validações
  if (binaryString.trim() === "") {
    showAlert("Insert a binary value, please.");
    return 0;
  }

  if (!isValidBinary(binaryString)) {
    showAlert("Entered characters can only be 0 or 1");
    return 0;
  }
  //

  const exponent = binaryString.length - 1;

  const decimal = binaryString
    .split("")
    .reduce((accumulator, char, index) => {
      //deixar nome do result mais descritivo
      //Base 2 vai virar uma variavel mágica
      const result = Math.pow(2, exponent - index);
      const multipliedResult = multiplyResultByCharacter(result, char);
      return accumulator + multipliedResult;
    }, 0);

  return decimal;
};

//Colocar a funções de acordo com a sequencias que elas são chamadas

const isValidBinary = (binary: string): boolean => {
  const BINARY_PARTTERN = /^[01]+$/;
  return BINARY_PARTTERN.test(binary);
};

const showAlert = (message: string) => {
  alert(message);
};

const convertCharacterToNumber = (char: string) => (char === "1" ? 1 : 0);

const multiplyResultByCharacter = (result: number, char: string): number =>{
  return result * convertCharacterToNumber(char);
};