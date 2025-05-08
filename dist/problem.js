"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    //
    const formatString = (input, toUpper) => {
        if (toUpper === false) {
            return input.toLowerCase();
        }
        return input.toUpperCase();
    };
    //
}
{
    const filterByRating = (items) => {
        const higherRatings = items.filter(item => item.rating >= 4);
        return higherRatings;
    };
    //
}
{
    //
    const concatenateArrays = (...arrays) => {
        const concatType = [];
        const result = concatType.concat(...arrays);
        return result;
    };
    const result1 = concatenateArrays(["a", "b"], ["c"]);
    const result2 = concatenateArrays([1, 2], [3, 4], [5]);
    //
}
{
    //
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            return `the model is ${this.model}`;
        }
    }
    //
}
{
    const processValue = (value) => {
        if (typeof value === 'string') {
            return value.length;
        }
        return value * 2;
    };
    //
}
{
    const getMostExpensiveProduct = (products) => {
        if (products.length == 0) {
            return null;
        }
        else {
            const highestPricedProduct = products.reduce((preProduct, currentProduct) => currentProduct.price > preProduct.price ? currentProduct : preProduct);
            return highestPricedProduct;
        }
    };
    //
}
{
    //
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    const getDayType = (day) => {
        if (day === 5 || day === 6) {
            return "Weekend";
        }
        return "Weekday";
    };
    //
}
{
    //
    const squareAsync = (n) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (n >= 0) {
                setTimeout(() => {
                    resolve(n * n);
                }, 1000);
            }
            else {
                reject('Negative number not allowed');
            }
        });
    });
    //
}
