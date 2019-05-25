// Optional Parameters

let multiplyOrSquare = (x:number,y?:number) =>{
    if(y){
        return x*y
    }
    else{
        return x*x;
    }
}

console.log(multiplyOrSquare(2))
console.log(multiplyOrSquare(2,6))