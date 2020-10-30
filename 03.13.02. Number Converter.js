// 2. Number Convertor
// Write a function that converts a decimal number to binary and hexadecimal. 
// The given number will always be in decimal format. The "From" select menu will only have a
// Decimal option, but the "To" select menu will have two options: Binary and Hexadeicmal. This means that our program should have the functionality to convert decimal to binary and
// decimal to hexadecimal. Note that "To" select menu by default is empty. You have to insert the two options ('Binary' and
// 'Hexadecimal') inside before continue. Also they should have values ('binary' and 'hexadecimal').  When the [Convert it] button is clicked, the expected result should appear in the [Result] input field. 
function solve() {
    //add select options
    let selectElement = document.querySelector('#selectMenuTo');
    let binaryOption = document.createElement('option');
    let hexadecimalOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.text = 'Binary';
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.text = 'Hexadecimal';
    selectElement.add(binaryOption);
    selectElement.add(hexadecimalOption);
    //add click event
    document.querySelector('button').addEventListener('click', clickEvent)
    function clickEvent() {
        //get values
        let decimalNumber = +document.querySelector('#input').value;
        let selectElement = document.querySelector('#selectMenuTo');
        let convertTo = selectElement.options[selectElement.selectedIndex].text;
        //convert
        let result;
        switch (convertTo) {
            case 'Binary':
                result = decimalNumber.toString(2);
                break;
            case 'Hexadecimal':
                result = decimalNumber.toString(16).toUpperCase();
                break;
        }
        //append output
        document.querySelector('#result').value = result;
    }
}