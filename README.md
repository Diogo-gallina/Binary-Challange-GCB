# Binary Decimal to Conversion
👾GCB binary to decimal conversion challenge

<h1 align="center">👾GCB binary to decimal conversion challenge</h1>

> This project implements a binary to decimal conversion using JavaScript. It provides a simple web interface where users can input binary values and obtain the decimal conversion result.

## :page_facing_up: Explanation

### Code Operation

1. The code uses the jQuery library to ensure it executes after the HTML document has finished loading.

2. When the conversion button is clicked, the associated function is triggered.

3. The binary value entered by the user is retrieved and stored in a variable.

4. A check is performed to ensure that the binary value is not empty. If it's empty, an alert is displayed prompting the user to insert a valid binary value.

5. An additional check is made to ensure that the binary value contains only '0' and '1' characters. Otherwise, an alert is displayed indicating that only '0' and '1' characters are allowed.

6. If the binary value is valid, the binary-to-decimal conversion is performed by calling the `convertBinaryToDecimal()` function.

7. The `convertBinaryToDecimal()` function calculates the sum of the decimal values corresponding to the binary value provided.

8. The function iterates over each character of the binary value and calculates the power of two corresponding to the character's position.

9. The power of two is multiplied by the current character value to obtain the corresponding decimal value.

10. The partial sum is accumulated and returned as the result of the binary-to-decimal conversion.

11. The conversion result is displayed in a text element on the web page.

### Usage

1. Include the jQuery library in your project if it's not already being used.

2. Copy the provided JavaScript code into your project file.

3. In your HTML file, add a form with an input field for the binary value and a button for the conversion.

4. Add a text element to display the conversion result.

5. Ensure that the correct IDs are assigned to the HTML elements mentioned in the JavaScript code.

6. The code is set up to handle click events on the conversion button with the ID "binary-button-convert" and to retrieve the binary value from the input element with the ID "binary-input". If needed, you can adjust these IDs according to your HTML structure.

7. Test the project by entering valid binary values and verifying that the decimal conversion result is correctly displayed.

### Notes

- Make sure to include the jQuery library in your project if it's not already being used.

- This code assumes that the conversion is performed for positive integer decimal numbers.

- Invalid or empty binary values are handled with alerts to provide user feedback.

- You can customize the code as needed to meet the specific requirements of your project.

- Remember to provide clear instructions to users on how to use the project's interface and input correct binary values.

## :rocket: Technologies

The following tools were used in this project:

- [JavasScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Html](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JQuery](https://jquery.com/)

## :closed_book: Requirements ##

Before starting, you need to have [Git](https://git-scm.com), [Node](https://nodejs.org/en/) and [JQuery](https://jquery.com/) installed on your computer.

## 🤝 Contributors

We want to thank the following people who contributed to this project:

Diogo-gallina: https://github.com/Diogo-gallina

&#xa0;

<a href="#top">Back to top</a>
