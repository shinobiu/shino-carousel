// Constants definition
const carousel = document.getElementById('carousel');
const items = carousel.querySelectorAll('.item');
const countItems = 0;

// Selects items one-by-one
for (i of items){
    i.classList.add('hide');
}

items[countItems].classList.remove('hide');