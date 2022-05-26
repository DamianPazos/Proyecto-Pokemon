const card = document.getElementById('card');

console.log(card);

// DarkMode Logic : This DarkMode adds the class 'darkmode' to the body when a 'click' event takes place in the button
// localStorage : Even if the site is reloaded or close and open again, the darkmode will persists if the user chooses to use the darkmode by clicking the button.


const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');
load();
bdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode) {
        store('false');
    } 
    else if (darkmode == 'true') {
        body.classList.add('darkmode');
    }
};

function store(value) {
    localStorage.setItem('darkmode', value);
};