// use local storage to manage data.
const addTodb = id => {
    let shopingCart;
    const quantity = shopingCart[id];

    // get shoping cart
    const storedCart = localStorage.getItem('shoping-cart');
    if (storedCart) {
        shopingCart = JSON.parse(storedCart);
    }
    else {
        shopingCart = {};
    }

    // quantity added
    if (quantity) {
        const newQuantity = quantity + 1;
        shopingCart[id] = newQuantity;
    }
    else {
        shopingCart[id] = 1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));

}

export { addTodb }