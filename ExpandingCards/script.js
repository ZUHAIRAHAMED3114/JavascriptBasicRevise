const panels = document.querySelectorAll('.panel')
panels.forEach(x => {
    x.addEventListener('click', e => {
        MakeActive(x)
    })
});
const MakeActive = (panel) => {
    panels.forEach(x => {
        if (x != panel && x.classList.contains('active')) {
            x.classList.remove('active')
        }
    })
    panel.classList.add('active');
}