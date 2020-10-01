let nadpis = document.getElementById('nadpis');
let rida = document.querySelector('.jumbotron');
let makak = document.getElementById('makak');
let zmizeni = document.getElementById('zmizeni');
let zmizeni2 = document.getElementById('zmizeni2');
var audio = new Audio('music/chill.mp3');




function spin(object)
{
    alert("ONLY WITH AUDIO AND F11 ON");
    makak.src = 'img/HYPNOSSSSSSS.png';
    zmizeni.style.display = "none";
    zmizeni2.style.display = "none";
    document.body.style.background = "pink";
    audio.play();
    setInterval(function()
    {
        makak.style.transform += "rotate(10deg)";
    }, 1);
}