"use strict";
const formatString = (input, toUpper) => {
    if (!toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
};
formatString('Habib');
