{
    //
    const formatString = (input: string, toUpper?: boolean): string => {
        if (toUpper === false) {
            return input.toLowerCase()
        }
        return input.toUpperCase()
    }

    //
}

{
    //
    type Product = { title: string; rating: number };

    const filterByRating = (items: Product[]): Product[] => {
        const higherRatings = items.filter(item => item.rating >= 4)
        return higherRatings
    }
    //
}

{
    //
    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
        const concatType = ([] as T[])
        const result = concatType.concat(...arrays)
        return result;
    }

    const result1 = concatenateArrays<string>(["a", "b"], ["c"]);
    const result2 = concatenateArrays<number>([1, 2], [3, 4], [5]);
    //
}

{
    //
    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year)
            this.model = model;
        }

        getModel() {
            return `the model is ${this.model}`
        }
    }
    //
}

{
    //
    type stringOrNumber = string | number
    const processValue = (value: stringOrNumber): number => {
        if (typeof value === 'string') {
            return value.length
        }
        return value * 2
    }
    //
}

{
    //
    interface Product {
        name: string;
        price: number;
    }

    const getMostExpensiveProduct = (products: Product[]): Product | null => {
        if (products.length == 0) {
            return null
        }
        else {
            const highestPricedProduct = products.reduce((preProduct, currentProduct) =>
                currentProduct.price > preProduct.price ? currentProduct : preProduct
            );
            return highestPricedProduct;
        }
    }
    //
}

{
    //
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    const getDayType = (day: Day): string => {
        if (day === 5 || day === 6) {
            return "Weekend"
        }
        return "Weekday"
    }
    //
}

{
    //
    const squareAsync = async (n: number): Promise<number> => {
        return new Promise((resolve, reject) => {
            if (n >= 0) {
                setTimeout(() => {
                    resolve(n * n)
                }, 1000);
            } else {
                reject('Negative number not allowed')
            }
        })
    }
    //
}