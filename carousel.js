// Constants definition
const carousel = document.getElementById('carousel');
const move = document.getElementById('move');
const items = carousel.querySelectorAll('.item');
let countItems = 0;
const bottomBar = document.createElement('div');
let itemID = [];

start();

function start() {
    let count = 0
    for (i of items) {
        i.classList.add('hide');
        createIdentifiers(count);
        count ++;
    }
    items[countItems].classList.remove('hide');
    itemID[countItems].style.opacity = '100%'
    bottomBar.classList = 'bottomBar';
    carousel.appendChild(bottomBar);
    move.addEventListener('click', (e) => {
        const direction = e.target.innerText;
        changeItem(direction);
    })
    bottomBar.addEventListener('click', (e) => {
        const direction = e.target.id;
        if(!direction) {
            return
        }
        goTo(direction);
    })
}

function createIdentifiers(idNumber) {
    const identifier = document.createElement('div');
    identifier.classList = 'identifier';
    identifier.id = idNumber;
    bottomBar.appendChild(identifier);
    itemID.push(identifier);
}

function changeItem(direction) {
    if (direction === 'arrow_forward_ios') {
        items[countItems].classList.add('hide');
        itemID[countItems].style.opacity = '50%';
        if (countItems >= items.length - 1) {
            countItems = 0
        } else {
            countItems++
        }
        items[countItems].classList.remove('hide');
        itemID[countItems].style.opacity = '100%';
    }
    if (direction === 'arrow_back_ios') {
        items[countItems].classList.add('hide');
        itemID[countItems].style.opacity = '50%';
        if (countItems === 0) {
            countItems = items.length - 1
        } else {
            countItems--
        }
        items[countItems].classList.remove('hide');
        itemID[countItems].style.opacity = '100%';
    }
}

function goTo (direction) {
    items[countItems].classList.add('hide');
    itemID[countItems].style.opacity = '50%';
    countItems = direction;
    items[countItems].classList.remove('hide');
    itemID[countItems].style.opacity = '100%';
}