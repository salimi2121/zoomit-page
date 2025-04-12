function myfunction(){
    var x = document.getElementById("header");
    if (x.className === "header"){
        x.className += "responsive";
    }else {
        x.className = "header";
    }
}
// bergur menu
function show_menu() {

  var menu = document.getElementById("menu");
    if (menu.className === "h-menu"){
    menu.className += "show";
  }else {
    menu.className = "h-menu";
  }
  
}


function Dark() {
    var body = document.getElementById("body");
    body.className = "dark-mode" ;
}

function twiLight() {
  var body = document.getElementById("body");
  body.className = "twilight-mode" ;
}
function Light() {
  var body = document.getElementById("body");
  body.className = "light-mode" ;
}


function hide(){
  document.getElementById("imgbox2").style.display = "none";
}

// background for navbar

window.onscroll = function() {bgnavbar()};
function bgnavbar(){
  var x = document.getElementById("navbar-link");
  var a = document.getElementById("navbar-link");

  if( window.pageYOffset > 100 ){
    x.classList.remove("navbar-link");
    x.classList.add("navbar-link-scroll");     
  }else{
    x.classList.remove("navbar-link-scroll");
    x.classList.add("navbar-link");
  }
}










//scroll of m2-content 

// window.onscroll = function() {myfocue()};
// function myfocue(){
//   var mydiv = document.getElementById("mydiv")
//   var m2div = document.getElementById("m2")

  

//   if (window.scrollY == 4479 || window.scrollY == 4480 || window.scrollY == 4481 || window.scrollY == 4482    ){
//     mydiv.focus();
//     // body.classList.add("disable-scroll");
//     // mydiv.classList.remove("disable-scroll");

//     console.log(mydiv.scrollTop + mydiv.offsetHeight , mydiv.scrollHeight);

//     if ( mydiv.scrollTop + mydiv.offsetHeight == mydiv.scrollHeight ){
//       mydiv.blur();
//       // mydiv.classList.add("disable-scroll");
//       body.focus();
//       console.log(mydiv.scrollTop);

//     }   
//   }
// }

//scroll of h2-slides

function myscroll(m){
  var element = document.getElementById("sc1");
  if (m==1){
    element.scrollLeft -= 150;
  }
  else{
    element.scrollLeft += 150;
  }
        
}
  
//scroll of m1-slides 

function myscroll2(n){
  var element = document.getElementById("m1-sc");
  if (n==1){
    element.scrollLeft -= 321;

  }
  else{
    element.scrollLeft += 321;
  }
      
}

function myscroll3(n){
  var element = document.getElementById("m2-item5-sc");
  if (n==1){
    element.scrollLeft -= 304;

  }
  else{
    element.scrollLeft += 304;
  }
      
}

function myscroll4(n){
  var element = document.getElementById("m3-sc");
  if (n==1){
    element.scrollLeft -= 321;

  }
  else{
    element.scrollLeft += 321;
  }
      
}
function myscroll5(n){
  var element = document.getElementById("m4-item5-sc");
  if (n==1){
    element.scrollLeft -= 304;

  }
  else{
    element.scrollLeft += 304;
  }
      
}
