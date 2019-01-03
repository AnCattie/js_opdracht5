/**
 * Opdracht over Functiechaning
 * There are multiple ways to solve this so find the most
 * effecient one.
 */

// Give the size of the string
let CountString = function (text) {
return text.length;
}

// Replace the first word in the chain to a C
let ReplaceThis = function (text) {
    return text.replace(/^\S+/g, 'C');
}

// Concatenate the two strings
let ConcatString = function (text1, text2) {
    return text1.concat(text2);
}

// Display the fifth character of the string
let DisplayChar5 = function (text) {
    return text.charAt(4);
}

// Display the first 9 characters
let DisplayChar9 = function (text) {
return text.slice(0,9);
}
// Capitalize the string
let CapitalString = function (text) {
    return text.toUpperCase();
}

// Put the string in lowercase
let MinimalizeString = function (text) {
    return text.toLowerCase();
}

// Delete spaces before and after the chain
let SupprEspaceString = function (text) {
    return text.trim();
}

// Show true if the input parameter of the function is of type string
let IsString = function (text) {
    if (typeof text === "string");
    return true;
}

// Display the file extension
let ExtensionString = function (text) {
    return text.split('.').pop();
}

// Count the number of spaces in the chain
let NumberEspaceString = function (text) {
    return text.split(' ').length-1;
}

// Reverse a string of characters
let InverseString = function (text) {
    let splitString = text.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

/**
 * Oefeningen over getallen en wiskundige berekeningen
 */

 // Calculate the power of one number in relation to another (x to the power y)
let CalculationPower = function (x, y) {
    return Math.pow(x,y);
}

// Display the absolute value of a number
let ValueAbsolute = function (number) {
    return Math.abs(number);
}

// Display the absolute values of several numbers
let ValueAbsoluteArray = function (array) {
    for (let i=0; i<array.length; i++){
        array[i] = Math.abs(array[i]);
    }
    return array;
}

// Calculate the surface area of a circle according to its radius. Round it up to the nearest integer
let SufaceCircle = function (radius) {
    return Math.ceil(Math.PI * radius * radius);
}

// Calculate the hypothenuse of a rectangular triangle
let Hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}

// Calculate the BMI (Weight / (height x height). Keep only two digits after the decimal point.
let CalcIBM = function (weight, height) {
    let BMI = (weight / (height * height)).toFixed(2);
	
	return parseFloat(BMI);
}

