

window.addEventListener("scroll", function(){
    if(window.scrollY>0){
        document.getElementById('Seleccion_nav_logo').style.fill="black";
        document.getElementById('navbar').style.height = "50px";
        document.getElementById('colored').style.opacity= "1";
        var x = document.querySelectorAll('.changetodark');
        for(var i=0; i<x.length;i++){
            x[i].style.color = "black";
            x[i].style.transform = "scale(1)";
        }

        

    }else{
        document.getElementById('Seleccion_nav_logo').style.fill="white";
        document.getElementById('navbar').style.height = "150px";
        document.getElementById('colored').style.opacity= "0";
        var x = document.querySelectorAll('.changetodark');
        for(var i=0; i<x.length;i++){
            x[i].style.color = "white";
            x[i].style.transform ="scale(1.3)";
        }
    }
})
