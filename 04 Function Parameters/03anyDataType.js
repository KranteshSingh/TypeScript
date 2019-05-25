var numberOfFriends = function (friends) {
    if (typeof friends == 'string') {
        return 'You have 1 Friend';
    }
    else {
        var message = "You have " + friends.length + " friends";
        return message;
    }
};
console.log(numberOfFriends("Krantesh"));
console.log(numberOfFriends(["Krantesh", "Rakesh"]));
