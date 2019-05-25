var myFullName = {
    firstName: 'Krantesh',
    lastName: 'Singh',
    calculateFullName: function () {
        return function () {
            console.log(this);
            return this.firstName + ' ' + this.lastName;
        };
        /* calculateFullName(){
            return ()=> {
                console.log(this)
                return this.firstName + ' ' + this.lastName
            }
        */
    }
};
var someOtherName = myFullName.calculateFullName();
someOtherName();
// someOtherName is being called in the context of whole browser.
// if we have used arrow function we will get Object as output in the console.
// Arrow function declares a local scope there.
// With Arrow Functions, the scope is bound to the original scope (where function is created) rather than the scope of where the function is being called.
