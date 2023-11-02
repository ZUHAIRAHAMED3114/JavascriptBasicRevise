const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd);


for (var empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    var dragElement = this;
    dragElement.classList.add('hold');
    setTimeout(() => {
        //dragElement.style.display = "none";
        this.className = "invisible"

    }, 0)


}

function dragEnd() {

    var dragElement = this;
    dragElement.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    console.log('drag Drop');
    var dragElement = this;
    console.log(dragElement);

    dragElement.className = 'empty'
    this.append(fill)
}

// const container = document.body;

// container.addEventListener('dragstart', function(e) {
//     if (e.target.classList.contains('fill')) {
//         e.target.classList.add('hold');
//         setTimeout(() => {
//             e.target.className = "invisible";
//         }, 0);
//     }
// });

// container.addEventListener('dragend', function(e) {
//     if (e.target.classList.contains('fill')) {
//         e.target.className = 'fill';
//     }
// });

// container.addEventListener('dragover', function(e) {
//     e.preventDefault();
// });

// container.addEventListener('dragenter', function(e) {
//     if (e.target.classList.contains('empty')) {
//         e.target.classList.add('hovered');
//     }
// });

// container.addEventListener('dragleave', function(e) {
//     if (e.target.classList.contains('empty')) {
//         e.target.classList.remove('hovered');
//     }
// });

// container.addEventListener('drop', function(e) {
//     if (e.target.classList.contains('empty')) {
//         e.target.classList.remove('hovered');
//         e.target.append(document.querySelector('.invisible'));
//         e.target.className = 'empty';
//     }
// });