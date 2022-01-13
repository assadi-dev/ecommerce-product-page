/**Hamburger menu */

const hamBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close");
const menuList = document.querySelector("#menu-list");
let index = false;

const toggleMenu = () => {
    index = !index;

    if (index) {
        const div = document.createElement("div");
        div.className = "backdrop";
        document.body.appendChild(div);
        menuList.classList.remove("close-menu");
        menuList.classList.add("open-menu");
    } else {
        document.querySelector(".backdrop").remove();
        menuList.classList.remove("open-menu");
        menuList.classList.add("close-menu");
    }
};

hamBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);