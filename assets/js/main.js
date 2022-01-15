/**Hamburger menu */

const hamBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close");
const menuList = document.querySelector("#menu-list");
let isOpen = false;

const toggleMenu = () => {
    isOpen = !isOpen;

    if (isOpen) {
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

/**slider */
const sliderContainer = document.querySelector("#item-container");
const thumbnailContainer = document.querySelector("#thumbnails");

const product = [{
        id: 1,
        src: "./assets/images/image-product-1.jpg",
        thumbnail: "../images/image-product-1-thumbnail.jpg",
    },
    {
        id: 2,
        src: "./assets/images/image-product-2.jpg",
        thumbnail: "../images/image-product-2-thumbnail.jpg",
    },
    {
        id: 3,
        src: "./assets/images/image-product-3.jpg",
        thumbnail: "../images/image-product-3-thumbnail.jpg",
    },
    {
        id: 4,
        src: "./assets/images/image-product-4.jpg",
        thumbnail: "../images/image-product-4-thumbnail.jpg",
    },
];

const sliderItem = (src) => {
    let img = document.createElement("img");
    img.className = "slider-items";
    img.src = src;
    sliderContainer.append(img);
    document.querySelectorAll(".slider-items")[0].classList.add("current");
};

const sliderThumbnail = (src, id) => {
    let img = document.createElement("img");
    img.className = "thumbnail-card";
    img.src = src;
    img.setAttribute("data-item", id);
    thumbnailContainer.append(img);
};

product.forEach((item) => {
    sliderItem(item.src);
    sliderThumbnail(item.src, item.id);
    document
        .querySelectorAll(".thumbnail-card")[0]
        .classList.add("thumb-current");
});

/**thumbnail click */
const thumbnailCards = document.querySelectorAll(".thumbnail-card");
const sliderItems = document.querySelectorAll(".slider-items");

const changeSlide = (index) => {
    sliderItems.forEach((elements) => {
        elements.classList.remove("current");
    });
    sliderItems[index].classList.add("current");
};

function handleClickThumbnail() {
    thumbnailCards.forEach((e) => {
        e.classList.remove("thumb-current");
    });
    this.classList.add("thumb-current");
    let id = parseInt(this.getAttribute("data-item"));
    let imgIndex = product.findIndex((item) => item.id === id);

    changeSlide(imgIndex);
}

thumbnailCards.forEach((element) => {
    element.addEventListener("click", handleClickThumbnail);
});

// mobile slide button

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let index = 0;

const nextSlider = () => {
    if (index < product.length - 1) {
        sliderItems[index].classList.remove("current");
        index++;
        sliderItems[index].classList.add("current");
    } else {
        sliderItems[index].classList.remove("current");
        index = 0;
        sliderItems[index].classList.add("current");
    }
};

const prevSlider = () => {
    if (index > 0) {
        sliderItems[index].classList.remove("current");
        index--;
        sliderItems[index].classList.add("current");
    } else {
        sliderItems[index].classList.remove("current");
        index = product.length - 1;
        sliderItems[index].classList.add("current");
    }
};

next.addEventListener("click", nextSlider);
prev.addEventListener("click", prevSlider);