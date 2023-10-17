const tagEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
textarea.focus();
var listofTags = [];
var currentword = "";
var currentStart = 0;
var currentEnd = 0;
var interval = null;
textarea.addEventListener('keyup', (e) => {
    if (listofTags.length > 0 && e.key === 'Enter') {
        randomSelect();
    }
    if (e.target.value === '') {
        IntitalPostion();
    } else {
        createTags(e.target.value)
    }

})

function IntitalPostion() {
    currentword = "";
    currentEnd = 0;
    currentStart = 0;
    listofTags = [];

    while (tagEl.firstChild) {
        tagEl.removeChild(tagEl.firstChild);
    }
    clearInterval(interval);
}

function createTags(input) {

    if (input.charAt(currentEnd) == ',') {
        currentStart = currentEnd + 1;
        listofTags.push(currentword);
        AppendToTags(currentword);
        console.log(listofTags)
        currentword = "";
    } else {
        currentword += input.charAt(currentEnd);
    }
    currentEnd++;
}

function AppendToTags(word) {
    const newTag = document.createElement('span');
    newTag.classList.add('tag');
    newTag.innerText = word;
    tagEl.append(newTag);
}

function randomSelect() {
    interval = setInterval(() => {
        const tags = document.querySelectorAll('.tag');
        var selectedTag = tags[Math.floor(Math.random() * tags.length)];
        const higghlightTags = document.querySelectorAll('.highlight');
        higghlightTags.forEach(ht => ht.classList.remove('highlight'));
        selectedTag.classList.add('highlight');
    }, 1000);
}