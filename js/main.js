


var allh4 = document.querySelectorAll(".mytest h4");

var mysection = document.querySelector('.mytest');

var started = false;   //for count in the first time.


function counting(el) {
    var goal = el.dataset.goal;
    var count = setInterval(

        () => {
            el.textContent++;
            if (el.textContent == goal) { clearInterval(count) };


        }


        , 2000/goal);

};

window.onscroll = function () {

    if (window.scrollY >= mysection.offsetTop) {
        if (started === false) {
            allh4.forEach((myH4) => counting(myH4));

        }

        started = true;
    }

};












