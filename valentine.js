document.addEventListener('DOMContentLoaded', load);

function load() {
    document.getElementById('noBut').addEventListener("click", noValentine);
}

// function yesValentine() {
// // delete buttons, give big yippee!!
// }

// function noValentine() {
// var noCount;
// noCount += 1;

// switch(noCount) {
//     case 1:
//         document.getElementById('no').innerHTML = 'please reconsider';
//         break;
//     case 2:
//         document.getElementById('no').innerHTML = 'PLEASE BE MY VALENTINE EMILY?!?!?!?';
//         break;
//     case 3:
//         document.getElementById('no').innerHTML = 'IM NOT GONNA ASK AGAIN BITCH';
//         break;
//     case 4:
//         document.getElementById('no').remove();
//         break;
// }

// }


function noValentine() {
    var noButton = document.getElementById('no');
    var noCount = 0;
    noButton.addEventListener('click', function(e) {
        e.preventDefault();
        noCount += 1;
        switch(noCount) {
            case 1:
                noButton.innerHTML = 'One';
                break;
            case 2:
                noButton.innerHTML = 'Two';
                break;
            default:
                noButton.innerHTML = 'More than 2';
            }
    }, false);
}
