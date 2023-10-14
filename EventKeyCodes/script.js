const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    console.log(e)
    insert.innerHTML = getHtml(e);
})

getHtml = (e) => {
    return `
    <div class="key">
     ${e.key===' '?'space':e.key}
     <small>event.key</small>
</div>
<div class="key">
${e.keyCode}<small>event.keyCode</small>
</div>
<div class="key">
${e.code}<small>event.code</small>
</div>
<div class="key">
    Press Any Key to Get the KeyCode
</div>
    `
}