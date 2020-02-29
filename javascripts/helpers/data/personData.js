const persons = [
    { id: 'person1', name: 'Zoe Ames', isDead: false },
    { id: 'person2', name: 'Mary West', isDead: false },
    { id: 'person3', name: 'Luke Lancaster', isDead: false },
    { id: 'person4', name: 'Aaron Lain', isDead: false },
    { id: 'person5', name: 'Anca Simon', isDead: false },
    { id: 'person6', name: 'Beth Whitworth', isDead: false },
    { id: 'person7', name: 'Chris Johnson', isDead: false },
    { id: 'person8', name: 'Davis Lindell', isDead: false },
    { id: 'person9', name: 'David Everett', isDead: false },
    { id: 'person10', name: 'Dylan Rowe', isDead: false },
    { id: 'person11', name: 'Beth Nielsen', isDead: false },
    { id: 'person12', name: 'Joey Petrone', isDead: false },
    { id: 'person13', name: 'John Fleming', isDead: false },
    { id: 'person14', name: 'Jose Marquez', isDead: false },
    { id: 'person15', name: 'Kayla Melton', isDead: false },
    { id: 'person16', name: 'Kenny McEastland', isDead: false },
    { id: 'person17', name: 'Liza Star', isDead: false },
    { id: 'person18', name: 'Michele Rawlins', isDead: false },
    { id: 'person19', name: 'Monique Bass', isDead: false },
    { id: 'person20', name: 'Ola Oladinni', isDead: false },
    { id: 'person21', name: 'Sarah Holder', isDead: true },
    { id: 'person22', name: 'Stephen Castaneda', isDead: true },
    { id: 'person23', name: 'Steven Zelenak', isDead: true },
    { id: 'person24', name: 'Todd Spainhour', isDead: true },
    { id: 'person25', name: 'Zac Crumpton', isDead: true }
  ];

  //filter is a loop that returns a conditional - in this case the conditional is isDead===false;
  const getAlivePersons = () => {
    return persons.filter((x) => x.isDead === false);
  };

  const getDeadPersons = () => {
    return persons.filter((x) => x.isDead === true);
  };

// we create an array of alive people
// then we pick a random index out of that array of living
// then we create an id out of that id of that random index
// then we use findIndex to find that person with that index and kill them
//that findIndex method gives us where the perosn we just randomly picked is in the main array
//and then you change the status to dead.

  const randomMurder = () => {
    console.log('somone died');
    const alivePeople = getAlivePersons();
    //pick someone random
    //and then change the boolean isDead to true
    //use the index to find the person to murder!!! not the id!
    const randomNum = Math.floor(Math.random() * alivePeople.length);
    const deadPersonsId = alivePeople[randomNum].id;
    console.log(randomNum);
    const deadMan = persons.findIndex((x) => x.id === deadPersonsId);
    persons[deadMan].isDead = true;
  };

  export default { getAlivePersons, getDeadPersons, randomMurder };