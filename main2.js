const trump = document.getElementById('trump');
const zeman = document.getElementById('zeman');
const podpis = document.getElementById('podpis');
const pi = document.getElementById('pi');
const p = document.querySelector('p');
var elements = document.getElementsByTagName("*");

trump.addEventListener('mouseenter', function(){
    trump.src = 'img/5.jpg';
});
trump.addEventListener('mouseout', function(){
    trump.src = 'img/4.jpg';
});

zeman.addEventListener('click', function(){
    setTimeout(re, 10)
});

function re() {
    zeman.src = 'img/2.jpg';
    setTimeout(ro, 1000)
}
function ro() {
    zeman.src = 'img/1.jpg';
    setTimeout(re, 1000)
}

function mneh() {
  podpis.innerHTML = ('We make things <b>DESTROY</b> themself');
  pi.innerHTML = ('RawrOwORawrOwORawrOwORawrOwORawrOwORawrOwO');
  p.style.color = 'red';
}

function spin(object)
{
    setInterval(function()
    {
      for (var i=0; i < elements.length; i++)
        {
          elements[i].style.transform += "rotate(10deg)";
        }
    }, 1);
}
