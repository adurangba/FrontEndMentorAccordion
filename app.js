const accordion = document.getElementsByClassName('content-container');
let btn = document.querySelector('.btn');

for (let i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
        console.log('clicked');
    })
}