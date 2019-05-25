//defining a class
class AnimalGen {

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

// here we've declared another class Dog which inherited the properties of class Animal

class Dog extends AnimalGen{

    // Constructor for derived class must contain a 'super' call.
    constructor(public limbs: number, public typeOfAnimal: string, public diet: string){
        super(limbs,typeOfAnimal,diet);
    }

    canBark=()=>{
        return true
    }
}

let germanShep = new Dog(4,"Mammal","Carnivore")

console.log(germanShep.canBark())
console.log(germanShep.getDietType())