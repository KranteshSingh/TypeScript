// declaring String data type

let someName: string = "Krantsh"
let someAddress: string = "Lucknow, Uttar Pradesh"

// declaring Number data type

let myWeight: number = 55;
let myScore: number = 150;

// declaring Boolean data type

let isRegisteredUser: boolean = true
let isPaidUser: boolean = false

// declaring arrays

let popularSports: string[] = ["Soccer", "Cricket", "Football", "Basketball", "Tennis"]
let someNumberArray: number[] = [1, 2, 3, 4, 5, 6, 7,]

// another approach to declare array

let someNumberArray2: Array<number> = [1, 2, 3, 4, 5, 6, 7,]
 
// you can define tuples which are basically array's whose length and data types are known

let x : [string, number]
x = ["hello", 235]
// x=[10,"Hello"] // This will get an error.

let iCanStoreAnyValue:any
iCanStoreAnyValue = "Krantesh"
iCanStoreAnyValue = 3
iCanStoreAnyValue = ["Something","Someone"]
iCanStoreAnyValue = ["Running",1,5,"Ecert"]

// you can set null or undefined also as values.

let iDontHaveAValue: null
let iHaveUndefinedValue: undefined
let icanOnlyHaveNullAndUndefinedValues: void


// Just like languages have typecasting TypeScript has type assertions

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength)