document.getElementById("main-menu-labels1").addEventListener("mouseenter", openMenu);

document.getElementById("main-menu-labels1").addEventListener("mouseleave", openMenu);

function openMenu(){
    document.getElementById("sub-menu1").classList.toggle("active");
}

document.getElementById("main-menu-labels2").addEventListener("mouseenter", openMenu1);

document.getElementById("main-menu-labels2").addEventListener("mouseleave", openMenu1);

function openMenu1(){
    document.getElementById("sub-menu2").classList.toggle("active");
}

document.getElementById("main-menu-labels3").addEventListener("mouseenter", openMenu2);

document.getElementById("main-menu-labels3").addEventListener("mouseleave", openMenu2);

function openMenu2(){
    document.getElementById("sub-menu3").classList.toggle("active");
}


















// It is always helpful to use comments in your code!

//var hide = document.getElementById("sub-menu");

//var products = document.getElementsByClassName("main-menu-labels")[0];

//document.getElementsByTagName("main-menu-labels")[0].addEventListener("click", openMenu);

//function openMenu(){
    

//document.getElementById("sub-menu").classList.toggle("active");
    
//}

/*

document.getElementsByTagName("main-menu-labels").addEventListener("mouseover", mouseOver);

function mouseOver(){
    
    document.getElementById("sub-menu").classList.toggle("active");
}


function mouseOver(){
    document.getElementById("main-menu-labels").style.visibility = "visible";
}


products.addEventListener("mouseOver", function(){
    hide.style.visibility ="visible";
});


var myFunction = function() {
    hide.removeAttribute("style");
}

products.onmouseover =  myFunction;*/
