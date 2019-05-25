var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//defining a class
var AnimalGen = /** @class */ (function () {
    // instead of declaring properties separately we can declare it inside constructor by using access specifier with them.
    // pass the properties in the constructor itself only adding a access specifier
    // telling to typescriot that boss i am trying to declare property as well
    function AnimalGen(limbs, typeOfAnimal, diet) {
        var _this = this;
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;
        this.getDietType = function () {
            return _this.diet;
        };
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;
    } // end of constructor
    return AnimalGen;
}()); // end of class
// here we've declared another class Dog which inherited the properties of class Animal
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // Constructor for derived class must contain a 'super' call.
    function Dog(limbs, typeOfAnimal, diet) {
        var _this = _super.call(this, limbs, typeOfAnimal, diet) || this;
        _this.limbs = limbs;
        _this.typeOfAnimal = typeOfAnimal;
        _this.diet = diet;
        _this.canBark = function () {
            return true;
        };
        return _this;
    }
    return Dog;
}(AnimalGen));
var germanShep = new Dog(4, "Mammal", "Carnivore");
console.log(germanShep.canBark());
console.log(germanShep.getDietType());
