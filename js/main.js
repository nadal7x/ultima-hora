        const burger = document.querySelector(".menu-burger-icon");
        const burgermenu = document.querySelector(".menu-burger");
        const fondo = document.querySelector("main");

        burger.addEventListener("click", () => {
            burgermenu.classList.toggle("open");
            fondo.classList.toggle("open");
        });

        const menu = document.querySelector(".header-main");
        window.addEventListener("scroll", () => {
            if(window.scrollY>20){
                menu.classList.add("scrolled");
                burgermenu.classList.add("scrolled");
            }
            else{
                menu.classList.remove("scrolled");
                burgermenu.classList.remove("scrolled");
            }
        });

        //// BURGER ////

        (function() {
        var burger3;
        burger3 = document.querySelector(".burger3");
        burger3.addEventListener("click", () => {
            return burger3.classList.toggle("on");
        });
        }).call(this);