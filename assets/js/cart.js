const addProductBtn = document.querySelector("#add-quantity");
const removeQuantity = document.querySelector("#remove-quantity");
const quantity = document.querySelector("#quantity-number");
const promoPercent = document.querySelector("#promo-percent");
const oldPrice = 250;
const percent = 50;
const reduction = (oldPrice * percent) / 100;
const currentPrice = oldPrice - reduction;

let quantityItem = 0;
let newprice = currentPrice;
promoPercent.textContent = percent + "$";

const showPrice = document.querySelector(".price");

const addItem = () => {
    quantityItem++;
    quantity.textContent = quantityItem;
    if (quantityItem > 0) {
        newprice = currentPrice * quantityItem;
    }
    showPrice.textContent = `$${newprice}`;
};

const removeItem = () => {
    if (quantityItem > 0) {
        quantityItem--;
        quantity.textContent = quantityItem;
        newprice = quantityItem > 0 ? currentPrice * quantityItem : currentPrice;
    } else {
        quantityItem = 0;
    }
    showPrice.textContent = `$${newprice}`;
};

quantity.textContent = quantityItem;
showPrice.textContent = `$${newprice}`;

addProductBtn.addEventListener("click", addItem);
removeQuantity.addEventListener("click", removeItem);

/** count item cart  */

const createcartBadge = (number) => {
    let span = document.createElement("span");
    span.setAttribute("id", "cart-badge");
    document.querySelector("#cart").append(span);
    span.textContent = number;
};

/** Cart icon  */

const cartCard = document.querySelector(".cart-card");
const cartBtn = document.querySelector("#cart");
let isCartOpen = false;

const openCart = () => {
    cartCard.classList.remove("cart-close");
    cartCard.classList.add("cart-open");
};

const closeCart = () => {
    cartCard.classList.remove("cart-open");
    cartCard.classList.add("cart-close");
};

const toogleCartShow = () => {
    isCartOpen = !isCartOpen;
    if (isCartOpen) {
        openCart();
    } else {
        closeCart();
    }
};

cartBtn.addEventListener("click", toogleCartShow);

/** Add to cart button */

const addToCartBtn = document.querySelector("#add-cart");
const removeCartArticle = document.querySelector(".remove-item-btn");

const addCart = () => {
    if (quantityItem >= 1) {
        createcartBadge(quantityItem);
        openCart();
    }
};
const isCartEmpty = () => {
    let cardBody = document.querySelector(".card-body");
    cardBody.classList.add("empty");
    let p = document.createElement("p");
    p.textContent = "You cart is empty";
    cardBody.append(p);
};

const removeItemCart = () => {
    if (quantityItem >= 1) {
        document.querySelector("#cart-badge").remove();
        document.querySelector(".card-body ul").remove();
        document.querySelector(".checkout-section").remove();
        isCartEmpty();
    }
};

const addItemCart = () => {
    if (quantityItem >= 1) {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.classList.add("cart-items");
        let img = document.createElement("img");
        img.classList.add("cart-items-thumbnail");
        img.src = "./assets/images/image-product-1-thumbnail.jpg";
    }
};

addToCartBtn.addEventListener("click", addCart);
removeCartArticle.addEventListener("click", removeItemCart);