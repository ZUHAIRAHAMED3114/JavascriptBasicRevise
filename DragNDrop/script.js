const container = document.body;
var fill = document.querySelector('.fill')
container.addEventListener('dragstart', function(e) {
    if (e.target.classList.contains('fill')) {
        e.target.classList.add('hold');
        setTimeout(() => {
            e.target.className = "invisible";
        }, 0);
    }
});

container.addEventListener('dragend', function(e) {
    if (e.target.classList.contains('fill')) {
        e.target.className = 'fill';
    }
});

container.addEventListener('dragover', function(e) {
    if (e.target.classList.contains('empty')) {
        e.preventDefault();

    }
});

container.addEventListener('dragenter', function(e) {
    if (e.target.classList.contains('empty')) {
        e.target.classList.add('hovered');
    }
});

container.addEventListener('dragleave', function(e) {
    if (e.target.classList.contains('empty')) {
        // e.target.classList.remove('hovered');
        e.target.className = 'empty'
    }
});

container.addEventListener('drop', function(e) {
    console.log(e.target)
        //var x = document.querySelector();
    console.log(x);
    console.log(e);
    if (e.target.classList.contains('empty') && this.id === e.target.id) {
        console.log("dropping")
        e.target.className = 'empty';
        e.target.append(fill);

    }
});