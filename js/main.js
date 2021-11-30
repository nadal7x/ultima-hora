        const burger = document.querySelector(".menu-burger-icon");
        const burgerIcon = document.querySelector(".burger3");
        const burgermenu = document.querySelector(".menu-burger");
        const fondo = document.querySelector("main");
        const menu = document.querySelector(".header-main");

        burger.addEventListener("click", () => {
            burgermenu.classList.toggle("open");
            fondo.classList.toggle("open");
        });

        window.addEventListener("scroll", () => {
            // let winScroll = document.documentElement.scrollTop;
            // let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            // let scrolled = (winScroll / height) * 100;
            // document.querySelector(".progress-bar").style.width = scrolled + "%";

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

        burgerIcon.addEventListener("click", () => {
            burgerIcon.classList.toggle("on");
        });