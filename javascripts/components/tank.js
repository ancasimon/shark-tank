import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js';

// USING a regular for loop:
// const tankBuilder = (list) => {
//     const list = personData.getAlivePersons();
//     let domString = '';
//     domString += '<div class="card" style="width: 18rem;">';
//     domString += `<div class="card-header">Shark Tank</div>`;
//     domString += '<ul class="list-group list-group-flush">';
//     for (let i=0; i < list.length; i++) {
//         domString += `<li class="list-group-item">${list[i].name}</li>`;
//     }
//     domString += '</ul>';
//     domString += '</div>';

//     utils.printToDom('tank', domString);
// };

// OR Using a forEach loop (and in that case, you don't need a list parameter in the function):
const tankBuilder = () => {
    const persons = personData.getAlivePersons();
    let domString = '';
    domString += '<div class="card">';
    domString += `<div class="card-header">Shark Tank</div>`;
    domString += '<ul class="list-group list-group-flush">';
    persons.forEach((person) => {
        domString += `<li class="list-group-item">${person.name}</li>`;
    })
    domString += '</ul>';
    domString += '</div>';

    utils.printToDom('tank', domString);
};

export default { tankBuilder };