let allPeopleIWantToInvite:string[] = []

let pushToPartyList = (...people:string[])=>{
    console.log(people)
    let newPeopleArray = people
    allPeopleIWantToInvite = allPeopleIWantToInvite.concat(newPeopleArray)
    console.log(allPeopleIWantToInvite)
    return allPeopleIWantToInvite
}

pushToPartyList("Aditya","Sanjana","Pooja")
pushToPartyList("Hena","Jaya","Shushma") 