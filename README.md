
# Welcome to the blog of Typescript interview questions.

## How Does TypeScript Help in Improving Code Quality and Project Maintainability?

- TypeScript enhances code quality and maintainability through type checking, code suggestions and catching errors directly in the editor. Typescript is sweetable for learger projects.

- With clear type definitions, developers can quickly understand what a function or variable is supposed to do without reading the entire code.

- We don’t have to explicitly define types everywhere because TypeScript is smart enough to predict the correct type automatically. If we try to reassign a variable with a different type, TypeScript will show an error.

- TypeScript provides smart suggestions while coding. For example, if we use a variable of type number, TypeScript suggests number-related methods. Similarly, for string types, it suggests string methods.

- TypeScript checks types at compile time, meaning you catch many errors before running the code.

- TypeScript also helps with auto-completion, making coding faster and more accurate.

- TypeScript can infer types even if you don’t explicitly define them, providing type safety with high accuracy.

- We can reuse types, making the code cleaner, easier to maintain, and more understandable.

- By using TypeScript, we can reduce bugs because its strong typing system makes the code more secure and reliable.


## Union and intersection types examples in TypeScript:

- Union means a variable can be one of multiple types.

```
let year: string | number;

year = "2025";
year = 2025;
```
if we provite the id as string or number both will be okay.

- Intersection means combining multiple types into one type that set all the properties from each type .

```
type Person1 = {
  name: string;
};

type Person2 = {
  age: number;
};

type Person = Person1 & Person2;

const person: Person = {
  name: "Rakib",
  age: 30
};
```
