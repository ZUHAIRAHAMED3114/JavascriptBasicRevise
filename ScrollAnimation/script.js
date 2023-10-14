const boxes = document.querySelectorAll('.box');
var CheckBox = () => {

    const triggerBottom = window.innerHeight / 5 * 4;


    boxes.forEach(box => {
        printPosition(box);
        let boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }


    });
}
var printPosition = function(box) {
    let h2Element = box.querySelector('h2');
    let innerTest = h2Element.innerText;
    let boundingClientTop = box.getBoundingClientRect().top;
    console.log(`${innerTest} at Position ${boundingClientTop}`);
}

window.addEventListener('scroll', CheckBox);