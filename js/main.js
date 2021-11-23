        const burger = document.querySelector(".menu-burger-icon");
        const burgermenu = document.querySelector(".menu-burger");
        const fondo = document.querySelector("main");
        var abierto = false;

        burger.onclick = function(){
            if(abierto == false){
                burgermenu.classList.add("open");
                fondo.classList.add("open");
                abierto = true;
            }
            else{
                burgermenu.classList.remove("open");
                fondo.classList.remove("open");
                abierto = false;
            }
        };

        const menu = document.querySelector(".header-main");
        window.onscroll = function() {
            if(window.scrollY>20){
                menu.classList.add("scrolled");
                burgermenu.classList.add("scrolled");
            }
            else{
                menu.classList.remove("scrolled");
                burgermenu.classList.remove("scrolled");
            }
        };

        //// BURGER ////

        (function() {
        var burger3;
        burger3 = document.querySelector(".burger3");
        burger3.addEventListener("click", function() {
            return burger3.classList.toggle("on");
        });
        }).call(this);