const formatString = (input: string, toUpper?: boolean): string => {
    if (toUpper === false) {
        return input.toLowerCase()
    }
    return input.toUpperCase()
}

const result = formatString('Hello World', true)
console.log(result)