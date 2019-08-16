function onReady(){
    var e=document.querySelector(".main-navigation");
     document.querySelector(".js-extend-main-navigation").addEventListener("click",function(a){a.preventDefault(),e.classList.toggle("extended")},!1);
    var a=document.querySelector&&document.querySelector("html");a&&(a.className+=" "+ platformClassName)}
    
    document.addEventListener("DOMContentLoaded",onReady);