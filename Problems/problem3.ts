
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const concatType = ([] as T[])
    const result = concatType.concat(...arrays)
    return result;
}

const result1 = concatenateArrays<string>(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
const result2 = concatenateArrays<number>([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

console.log(result1)
console.log(result2)