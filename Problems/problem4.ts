class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo() {
        console.log('get the info of the Vehicle')
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