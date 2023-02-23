let toggle=document.querySelector("#header .toggle-button");
let collapse=document.querySelectorAll("#header .collapse");

toggle.addEventListener('click',function(){
    collapse.forEach(col=>col.classList.toggle("collapse-toggle"));
})

var icon = document.getElementById("moon-icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("dark-theme hr-line");
    document.body.classList.toggle("dark-theme home-content");

    if(document.body.classList.toggle("dark-theme") == true){
        icon.innerHTML= '<i class="fa-solid fa-sun"></i>';
    } else {
        icon.innerHTML='<i class="fa-solid fa-moon"></i>';
    }
}