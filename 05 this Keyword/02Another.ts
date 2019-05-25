//Lexical Binding

let myName = {
    firstName: 'Krantesh',
    lastName: 'Kumar',

    calculateFullName(){ 
        console.log(this)
        return this.firstName+ ' '+this.lastName;
    }

    /*  calculateFullName:()=>{
            console.log(this)
            return this.firstName+ ' '+this.lastName;
     }
     */     
}

let someName = myName.calculateFullName()

// If we would have used arrow function inside the object then we'll have to face the Lexical Binding and output will be Window.