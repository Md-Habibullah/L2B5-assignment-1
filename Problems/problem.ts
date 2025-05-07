{
    //
    const formatString = (input: string, toUpper?: boolean): string => {
        if (toUpper === false) {
            return input.toLowerCase()
        }
        return input.toUpperCase()
    }

    const result = formatString('Hello World', true)
    console.log(result)
    //
}

{
    //
    type Product = { title: string; rating: number };

    const filterByRating = (items: Product[]): Product[] => {
        const higherRatings = items.filter(item => item.rating >= 4)
        return higherRatings
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book D", rating: 2.5 },
    ];

    console.log(filterByRating(books))
    // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
    //
}

{
    //

    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
        const concatType = ([] as T[])
        const result = concatType.concat(...arrays)
        return result;
    }

    const result1 = concatenateArrays<string>(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
    const result2 = concatenateArrays<number>([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

    console.log(result1)
    console.log(result2)
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
            console.log(`the model is ${this.model}`)
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();
    myCar.getModel();
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

    console.log(processValue("hello")); // Output: 5
    console.log(processValue(10));      // Output: 20
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

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];

    getMostExpensiveProduct(products);
    // Output: { name: "Bag", price: 50 }
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

    getDayType(Day.Monday);   // Output: "Weekday"
    getDayType(Day.Sunday);   // Output: "Weekend"
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

    squareAsync(4).then(console.log);        // Output after 1s: 16
    squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed


    //
}