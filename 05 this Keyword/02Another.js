//Lexical Binding
var myName = {
    firstName: 'Krantesh',
    lastName: 'Kumar',
    calculateFullName: function () {
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }
    /*  calculateFullName:()=>{
            console.log(this)
            return this.firstName+ ' '+this.lastName;
     }
     */
};
var someName = myName.calculateFullName();
// If we would have used arrow function inside the object then we'll have to face the Lexical Binding and output will be Window.
