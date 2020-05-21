(function() {
window["JST"] = window["JST"] || {};

window["JST"]["cart.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="grid-container">\r\n    <div class="content">\r\n        <header class="content-header">\r\n            <h3>Shopping cart</h3>\r\n        </header>\r\n        <div class="content-section-wrapper">\r\n            <div class="content-section-header">\r\n                <div class="item left">PRODUCT DETAILS</div>\r\n                <div class="item">QUANTITY</div>\r\n                <div class="item">PRICE</div>\r\n                <div class="item">TOTAL</div>\r\n            </div>\r\n            <section class="content-section js-product">\r\n                <!-- Products are rendered here -->\r\n            </section>\r\n        </div>\r\n    </div>\r\n    <div class="sidebar js-order">     \r\n        <header class="sidebar-header">\r\n            <h3>Order summary</h3>\r\n        </header>\r\n        <div class="content-section-summary">\r\n            <div class="label"><span class="js-sum-items">0</span> Items</div>\r\n            <div class="summary"><span class="js-sum-amount">0</span> €</div>\r\n        </div>\r\n        <div class="sidebar-section-header js-discounts-header">DISCOUNTS</div>\r\n        <div class="content-section-discounts js-discounts">\r\n            <!-- Discounts are rendered here -->\r\n        </div>\r\n        <div class="content-section-checkout">\r\n            <div class="checkout-total">\r\n                <div>TOTAL COST</div>\r\n                <div class="amount js-total-cost">0 €</div>\r\n            </div>\r\n            <div class="checkout-button">\r\n                <button>Checkout</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["product/details.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="item left">\r\n    <div class="item-card">\r\n        <div class="item-card-img">\r\n            <img src="images/' +
((__t = (image)) == null ? '' : __t) +
'" alt="' +
((__t = (name)) == null ? '' : __t) +
'">\r\n        </div>\r\n        <div class="item-card-content">\r\n            <h3>' +
((__t = (name)) == null ? '' : __t) +
'</h3>\r\n            <div>\r\n                Product code ' +
((__t = (code)) == null ? '' : __t) +
'\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["product/price.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="item">\r\n    <div class="item-card">\r\n        <div class="item-card-price">\r\n            ' +
((__t = (price)) == null ? '' : __t) +
' €\r\n        </div>\r\n    </div>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["product/quantity.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="item">\r\n    <div class="item-card">\r\n        <div class="item-card-quantity">\r\n            <a class="js-item-quantity js-decrease" href="#">-</a>\r\n            <input type="text" class="js-quantity-input" value="' +
((__t = (quantity)) == null ? '' : __t) +
'">\r\n            <a class="js-item-quantity js-increase" href="#">+</a>\r\n        </div>\r\n    </div>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["product/total.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="item">\r\n    <div class="item-card">\r\n        <div class="item-card-total">\r\n            <span class="js-total">' +
((__t = (total)) == null ? '' : __t) +
'</span> €\r\n        </div>\r\n    </div>\r\n</div>';

}
return __p
}})();