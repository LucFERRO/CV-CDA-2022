/* Dark mode */
function Button() {
    var bulbon = document.getElementById("ON")
    var element = document.getElementsByClassName("right-section");
    var element2 = document.getElementsByClassName("left-section");
    for(var right of element){
        right.classList.toggle("dark-mode");
    }

    for(var left of element2){
        left.classList.toggle("dark-mode");
    }
    
    if(element[0].classList.contains("dark-mode")){
        bulbon.setAttribute("src","assets/img/OFFopti.png")
        bulbon.setAttribute("title","Pas assez de lumière?")
    }
    
    else{
        bulbon.setAttribute("src","assets/img/ONopti.png")
        bulbon.setAttribute("title","Trop de lumière?")
    }

}
