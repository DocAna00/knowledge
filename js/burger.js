(() => {
    function setBurger(params) {
        const btn = document.querySelector(`.${params.btnClass}`);
        const menu = document.querySelector(`.${params.menuClass}`);

        btn.setAttribute('aria-expanded', false);

        menu.addEventListener("animationend", function () {
            if (this.classList.contains(params.hiddenClass)) {
                this.classList.remove(params.activeClass);
                this.classList.remove(params.hiddenClass);
            }
        });

        btn.addEventListener("click", function () {
            this.classList.toggle(params.activeClass);

            if (
                !menu.classList.contains(params.activeClass) &&
                !menu.classList.contains(params.hiddenClass)
            ) {
                menu.classList.add(params.activeClass);
                // document.body.style.overflow = 'hidden';
                document.body.classList.add("dark");
                btn.setAttribute('aria-expanded', true);
            } else {
                menu.classList.add(params.hiddenClass);
                // document.body.removeAttribute('style');
                document.body.classList.remove("dark");
                btn.setAttribute('aria-expanded', false);
            }
        });
    }

    setBurger({
        btnClass: "js-burger",
        menuClass: "js-menu-wrap",
        activeClass: "is-active",
        hiddenClass: "is-closed"
    });
})();