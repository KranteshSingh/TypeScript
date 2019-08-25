interface Point{
    x:number,
    y:number
    draw: () => void 
}


// let drawPoint = (point : Point) => {

// }

//Inline Annotation
let drawPoint = (point: {x: number, y:number}) => {
    //...
}

drawPoint({
    x:1,
    y:2
})