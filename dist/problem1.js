"use strict";
const formatString = (input, toUpper) => {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
};
const result = formatString('Hello World', true);
console.log(result);
