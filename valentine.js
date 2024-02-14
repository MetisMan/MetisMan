document.addEventListener('DOMContentLoaded', load);

function load() {
    document.getElementById('noBut').addEventListener("click", noValentine);
    document.getElementById('yesBut').addEventListener("click", yesValentine);
}

let noCount = 0;

function yesValentine() {
    document.getElementsByTagName('button').remove();
    document.getElementById('subtitle').innerHTML = 'YAYYY I LOVE YOU SO MUCH BABY!!! HAPPY VALENTINES DAY <3';
}

function noValentine() {
    noCount += 1;
    let noButton = document.getElementById('noBut');
    switch(noCount) {
        case 1:
            noButton.innerHTML = 'please reconsider';
            break;
        case 2:
            noButton.innerHTML = 'PLEASE OH MY GOD BE MY VALENTINE IM GONNA FUCKING CRY!!!';
            break;
        case 3:
            noButton.innerHTML = 'IM NOT GONNA ASK AGAIN, WOMAN!! >:(';
            break;
        case 4:
            noButton.remove();
            break;
    }
}
