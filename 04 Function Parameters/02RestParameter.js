var allPeopleIWantToInvite = [];
var pushToPartyList = function () {
    var people = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        people[_i] = arguments[_i];
    }
    console.log(people);
    var newPeopleArray = people;
    allPeopleIWantToInvite = allPeopleIWantToInvite.concat(newPeopleArray);
    console.log(allPeopleIWantToInvite);
    return allPeopleIWantToInvite;
};
pushToPartyList("Aditya", "Sanjana", "Pooja");
pushToPartyList("Hena", "Jaya", "Shushma");
