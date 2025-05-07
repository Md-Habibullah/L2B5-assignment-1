type stringOrNumber = string | number
const processValue = (value: stringOrNumber): number => {
    if (typeof value === 'string') {
        return value.length
    }
    return value * 2
}

console.log(processValue("hello")); // Output: 5
console.log(processValue(10));      // Output: 20