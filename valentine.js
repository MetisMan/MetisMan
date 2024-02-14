document.addEventListener('DOMContentLoaded', load);

function load() {
    document.getElementById('yes').addEventListener("click", yesValentine);
    document.getElementById('no').addEventListener("click", noValentine);
}

function yesValentine() {
// delete buttons, give big yippee!!
}

function noValentine() {
noCount += 1;

switch(noCount) {
    case 1:
        document.getElementById('no').innerHTML = 'please reconsider';
        break;
    case 2:
        document.getElementById('no').innerHTML = 'PLEASE BE MY VALENTINE EMILY?!?!?!?';
        break;
    case 3:
        document.getElementById('no').innerHTML = 'IM NOT GONNA ASK AGAIN BITCH';
        break;
    case 4:
        document.getElementById('no').remove();
        break;
}

}