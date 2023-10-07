const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll('.circle');

let currentActive = 0;
next.addEventListener('click', (e) => {
    if (currentActive < circles.length) {
        currentActive++;
        update(true)
    } else {
        // console.log(next.disable)
        // if (next.disable) {
        //     next.disable = true;
        // }
    }


});
prev.addEventListener('click', (e) => {
    console.log(currentActive)
    if (currentActive > 0) {
        currentActive--;
        update(false)
    } else {
        // if (prev.disable) {
        //     prev.disable = true;
        // }
    }
});

const update = (forward) => {

    var isUpdated = false
    if (forward) {
        circles.forEach(x => {
            if (!isUpdated && !x.classList.contains('active')) {
                x.classList.add('active');
                isUpdated = true;
            }
        })
    } else if (!isUpdated && !forward) {
        for (let i = 0; i < (circles.length - 1); i++) {
            circles[i].classList.forEach(x => console.log(x));
            if ((circles[i].classList.contains('active') &&
                    !circles[i + 1].classList.contains('active')) ||
                ((i + 1) == circles.length && circles[i].contains('active'))
            ) {
                circles[i].classList.remove('active');
            }

        }

    }

}