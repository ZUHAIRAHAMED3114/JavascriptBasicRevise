const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg')
let load = 0;

function blurring() {
    load++;
    console.log(load);
    if (load > 99) {
        clearInterval(interval)
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

let interval = setInterval(blurring, 30)

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}