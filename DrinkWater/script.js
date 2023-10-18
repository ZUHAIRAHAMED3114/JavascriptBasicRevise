const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

//Registering the OnClick EventHandler...
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlightCups(cup);
        updateBigCups()
    });
})


function highlightCups(smallCup) {

    var nextSibling = smallCup.nextElementSibling;
    var parentElement = smallCup.parentNode;


    if (smallCup.classList.contains('full') &&
        (nextSibling == null || (nextSibling != null && !nextSibling.classList.contains('full')))) {
        smallCup.classList.remove('full');
        return;
    }

    var allSilbingElement = Array
        .from(parentElement.childNodes)
        .filter(node => node.nodeType === 1);

    var currentIndex = allSilbingElement.indexOf(smallCup);
    const precedingSibling = allSilbingElement.slice(0, currentIndex + 1);

    precedingSibling.forEach(sibling => {

        sibling.classList.add('full');
    });





}


function updateBigCups() {
    const fullcups = document.querySelectorAll('.cup-small.full').length;
    const totalcups = smallCups.length;
    if (fullcups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullcups/totalcups *330/* Total Height */}px`;
        percentage.innerText = `${fullcups/totalcups*100}%`
    }

    if (fullcups == totalcups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2/*Total Number of Liters*/-(250*fullcups/1000)}L`
    }


}