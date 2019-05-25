function message(txt){
    console.log(this)
    console.log(this + "says hello to" + txt)
}

message("Krantesh Singh")
// this keyword will give the scope where it has been called.
// in this case its called outside the function i.e., it gives window object as output.