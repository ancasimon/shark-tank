import tank from './components/tank.js';
import graveyard from './components/graveyard.js';
import personData from './helpers/data/personData.js';

const sharkAttackEvent = () => {
    console.log('ouch');
    //randomly pick someone in personDatA
    personData.randomMurder();
    tank.tankBuilder();
    graveyard.buildGraveyard();
};

const reviveEvent = (e) => {
    const personId = e.target.id;
    personData.bringToLife(personId);
    tank.tankBuilder();
    graveyard.buildGraveyard();
};

const init = () => {
    tank.tankBuilder();
    graveyard.buildGraveyard();
    $('#bite-me').click(sharkAttackEvent);
    $('body').on('click', '.revive-btn', reviveEvent);
};

init();

// DEAD TO US:
// document.getElementById
// document.getElementsByClassName
// document.ANYTHING
//.classList - add, remove, contains
// .addEventListener