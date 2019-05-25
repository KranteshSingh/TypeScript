//defining a class
class Animal {

    // instead of declaring properties separately we can declare it inside constructor by using access specifier with them.
    // pass the properties in the constructor itself only adding a access specifier
    // telling to typescriot that boss i am trying to declare property as well

    constructor(public limbs: number, public typeOfAnimal: string, public diet: string) 
    {
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;
    } // end of constructor

    getDietType = () => {
        return this.diet
    }
} // end of class

// tiger & snake is an instance of the class Animal

let tiger = new Animal(4, "mammal", "carnivore")
let snake = new Animal(0, "reptile", "carnivore")
alert(tiger.getDietType())

//you can put ? in the property declaration and make it optional. so that in case you don't know some value you may skip it.