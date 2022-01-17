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
    createcartBadge(quantityItem);
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
    createcartBadge(quantityItem);
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