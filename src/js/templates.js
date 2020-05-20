(function() {
window["JST"] = window["JST"] || {};

window["JST"]["cart.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '';

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
__p += '<div class="item">\r\n    <div class="item-card">\r\n        <div class="item-card-quantity">\r\n            <a href="#">-</a>\r\n            <input type="text" value="' +
((__t = (quantity)) == null ? '' : __t) +
'">\r\n            <a href="#">+</a>\r\n        </div>\r\n    </div>\r\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["product/total.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="item">\r\n    <div class="item-card">\r\n        <div class="item-card-total">\r\n            ' +
((__t = (total)) == null ? '' : __t) +
' €\r\n        </div>\r\n    </div>\r\n</div>';

}
return __p
}})();