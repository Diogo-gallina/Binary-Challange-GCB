#👾 Binary-Challange-GCB

This is a TypeScript code snippet that converts binary numbers to decimal numbers. It provides a user interface with an input field for binary input, a convert button, and a text area to display the decimal output. The code also includes validation for the binary input and helper functions for multiplication and conversion.

##Usage
To use the binary to decimal converter, follow these steps:

1 - Open the index.html file that includes the binary to decimal converter.
2 - Enter a binary number in the input field.
3 - Click the "Convert" button.
4 - The decimal equivalent of the binary number will be displayed.

##Functions

- isValidBinary(binary: string): boolean
This function checks if the given binary string is valid, i.e., it contains only 0s and 1s.

- showAlert(message: string): void
This function displays an alert with the provided message.

- convertBinaryToDecimal(binaryString: string): number
This function converts a binary string to a decimal number. It validates the input and returns the decimal value. If the input is invalid or empty, it shows an alert and returns 0.

- convertCharacterToNumber(char: string): number
This function converts a binary character ('0' or '1') to a corresponding number (0 or 1).

- multiplyResultByCharacter(result: number, char: string): number
This function multiplies the given result by the number representation of the binary character.


##Development

To run the code in development mode, you need to have the following technologies installed:

- Node.js
- TypeScript

###Follow these steps:

- Clone the repository.
- Install the dependencies using npm install.
- Run the TypeScript compiler in watch mode using npm run start.
- Make changes to the convert-binary-to-decimal.ts file and observe the compiled output in the dist directory.


##🤝 Contributors
We want to thank the following people who contributed to this project:

Diogo-gallina: https://github.com/Diogo-gallina