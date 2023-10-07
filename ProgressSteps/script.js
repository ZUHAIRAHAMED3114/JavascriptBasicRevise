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
                console.log('CurrentActive' + currentActive)
                console.log('updating')
                console.log(x)
            }
        })
    } else if (!isUpdated && !forward) {

        for (let i = 0; i < (circles.length - 1); i++) {
            if ((circles[i].classList.contains('active') &&
                    !circles[i + 1].classList.contains('active')) ||
                ((i + 1) == circles.length && circles[i].contains('active'))
            ) {

                console.log('CurrentActive' + currentActive)
                console.log('removing');
                console.log(circles[i]);
                console.log(`currnt index --${i} and total Lenght --${circles.length}`)
                circles[i].classList.remove('active');
            }

        }

    }
    const active = document.querySelectorAll('.active');
    progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + '%';

}