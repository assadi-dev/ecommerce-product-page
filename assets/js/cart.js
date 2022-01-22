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

let productItems = [];

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

const addCart = () => {
    if (productItems.length >= 1) {
        removeItemCart();
    }
    if (quantityItem >= 1) {
        createcartBadge(quantityItem);
        productItems = [{ name: "Autumn Limited Edition", price: currentPrice }];
        productItems.forEach((element) => {
            addItemCart(element.name, element.price);
        });

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

if (productItems.length < 1) {
    isCartEmpty();
}

const removeItemCart = () => {
    productItems = [];
    document.querySelector("#cart-badge").remove();
    document.querySelector(".card-body ul").remove();
    document.querySelector(".checkout-section").remove();
    isCartEmpty();
};

const addItemCart = (name, price) => {
    let cardBody = document.querySelector(".card-body");
    cardBody.classList.remove("empty");
    document.querySelector(".card-body p").remove();
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let p = document.createElement("p");
    let totalItem = document.createElement("span");
    let deletBtn = document.createElement("button");
    let deleteIcone = document.createElement("img");

    deleteIcone.src = "./assets/images//icon-delete.svg";
    deletBtn.classList.add("remove-item-btn");
    deletBtn.onclick = removeItemCart;
    deletBtn.append(deleteIcone);
    totalItem.classList.add("cart-items-total");
    textItem = document.createElement("p");
    textItem.textContent = `$${price} x ${quantityItem}`;
    totalItem.textContent = `$${price * quantityItem}`;
    textItem.append(totalItem);
    let container = document.createElement("div");
    container.classList.add("cart-items");
    let img = document.createElement("img");
    img.classList.add("cart-items-thumbnail");
    img.src = "./assets/images/image-product-1-thumbnail.jpg";
    let description = document.createElement("div");
    description.classList.add("cart-items-descriptions");
    let title = p;
    title.textContent = name;
    title.classList.add("cart-items-title");
    container.append(img);
    description.append(title);
    description.append(textItem);
    container.append(description);
    container.append(deletBtn);
    li.append(container);
    ul.append(li);
    document.querySelector(".card-body").append(ul);

    let checkOutDiv = document.createElement("div");
    let checkOutClass = [
        "w-100",
        "text-center",
        "mt-3",
        "px-3",
        "checkout-section",
    ];
    checkOutClass.forEach((e) => checkOutDiv.classList.add(e));
    let checkoutBtn = document.createElement("button");
    checkoutBtn.classList.add("checkout-btn");
    checkoutBtn.textContent = "Checkout";
    checkOutDiv.append(checkoutBtn);
    cardBody.append(checkOutDiv);
};

addToCartBtn.addEventListener("click", addCart);