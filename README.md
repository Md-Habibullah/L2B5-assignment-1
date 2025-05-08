
## Welcome to the blog of Typescript interview questions.

### How Does TypeScript Help in Improving Code Quality and Project Maintainability?

- TypeScript enhances code quality and maintainability through type checking, code suggestions and throw error in editor code ground. Typescript is sweetable for learger projects.

- With clear types, developers can quickly understand what a function or variable is supposed to do without reading the entire code.

- We dont have to explicitly define type in everywhere because typescript is so smart that itself predict what type should it be. Than when we give another type to reassign its gives error in code.

- Typescript gives us suggestion while coding. when we use a type that belogs number than typescript gives us numbers method as suggestion and when we use string types it suggests us the strings methods.

- TypeScript checks types at compile time. This means you catch many errors early, before your code compilation.

- Typescript also helps to auto complete the codes .

- TypeScript can infer types even if you don’t explicitly write them, its gives us type safty with 100% accuracy.

- We can reuse the types so the code looks more clean and easier to maintain and understand.

- By using typescript we can reduce the bugs because its so powerful and secure types.


### Union and intersection types examples in TypeScript:

- Union means a variable can be one of multiple types.

```
let userId: string | number;

userId = "abc123";
userId = 101;
```
if we provite the id as string or number both will be okay.

- Intersection means combining multiple types into one type that set all the properties from each type .
```
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Staff = Person & Employee;

const staff1: Staff = {
  name: "Shuvo",
  salary: 30000
};
```
