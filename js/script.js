$(document).ready(function() {

    var english = document.getElementById("eng");
    var german = document.getElementById("ger");
    var engLang = document.getElementsByClassName('english');
    var germLang = document.getElementsByClassName('german');

    english.addEventListener("click", function () {
        for(var i = 0; i < germLang.length; i+=1) {
            engLang[i].style.display='block';
            germLang[i].style.display='none';
        }

    });

    german.addEventListener("click", function () {
        for(var i = 0; i < germLang.length; i+=1) {
            germLang[i].style.display='block';
            engLang[i].style.display='none';
        }

    });

    var about_me = document.getElementById("about_me");
    var image = document.getElementById("image");
    var my_text = document.getElementById("my_text");

    about_me.addEventListener("click", function () {
        console.log("click worked")
        if(image.style.display != 'none') {
            image.style.display = 'none';
            my_text.style.display = 'block';
        } else if (image.style.display === 'none') {
            image.style.display = 'block';
            my_text.style.display = 'none';

        }
    });

});