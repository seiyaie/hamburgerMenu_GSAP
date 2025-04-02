const menu = () => {
    const menu = document.querySelector(".js-menu");
    const open = document.querySelector(".js-open");
    const close = document.querySelector(".js-close");

    if (!menu || !open || !close) return;

    //menu開く関数
    const openMenu = () => {
        menu.showModal();
        gsap.fromTo(menu, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
    };

    //menu閉じる関数
    const closeMenu = () => {
        gsap.to(menu, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                //アニメーション終了後、menu閉じる
                menu.close();
                //アニメーション終了後、opacity0が保持されてしまうのでopacityを1にリセット
                // menu.style.opacity = "1";
                gsap.set(menu, { opacity: 1 });
            },
        });
    };

    //open btnクリックでopenMenu発動
    open.addEventListener("click", openMenu);

    //close btnクリックでcloseMenu発動
    close.addEventListener("click", closeMenu);

    //escキータイプでcloseMenu発動
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            closeMenu();
        }
    });
};

menu();
