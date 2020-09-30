//loginpage
var X=document.getElementById("login");
var y=document.getElementById("registration");
var z=document.getElementById("btn");

function register(){

X.style.left="-400px";
y.style.left="50px";
z.style.left="110px";
}

function login(){

X.style.left="50px";
y.style.left="450px";
z.style.left="0px";
}

//hamburger
const hamburger=document.querySelector(".hamburger");
const navlinks=document.querySelector(".nav-links");
const links=document.querySelectorAll(".nav-links li");
   
hamburger.addEventListener("click",() => {
 navlinks.classList.toggle("open");
 links.forEach(link=>{
 link.classList.toggle("fade");
 });
   });
//buttons
document.querySelectorAll(".click")[0].addEventListener("click",function (){
    var audio=new Audio('sounds/Bulbasur.mp3');
          audio.play();
});

document.querySelectorAll(".click")[1].addEventListener("click",function (){
   var audio=new Audio('sounds/Squirtle.mp3');
       audio.play();
});

document.querySelectorAll(".click")[2].addEventListener("click",function (){
    var audio=new Audio('sounds/Charmander.mp3');
    audio.play();
});
