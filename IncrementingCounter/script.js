const counters = document.querySelectorAll('.counter');
const updateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 2000;
    if (c < target) {
        counter.innerText = `${Math.ceil(c+increment)}`;
        setTimeout(() => { updateCounter(counter) }, 1)
    } else {
        counter.innerText = target
    }


}
counters.forEach(counter => {
    counter.innerText = '0';
    updateCounter(counter)
});