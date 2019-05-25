let numberOfFriends = (friends:any)=>{
    if(typeof friends == 'string'){
        return 'You have 1 Friend'
    }
    else{
        let message = `You have ${friends.length} friends`
        return message 
    }
}

console.log(numberOfFriends("Krantesh"));
console.log(numberOfFriends(["Krantesh","Rakesh"]))