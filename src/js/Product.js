class Product {
    constructor($el, data, helper) {
        this.$el = $el;
        this.data = data;
        this.helper = helper;
        this._buttonClickHandler = this._buttonClickHandler.bind(this);
        this._inputQuantityChangeHandler = this._inputQuantityChangeHandler.bind(this);

        // Button (-/+) click event listener
        this.$el.on('click', '.js-item-quantity', this._buttonClickHandler);
        // Quantity input event listener
        this.$el.on('change', '.js-quantity-input', this._inputQuantityChangeHandler);
    }

    render() {
        this.$el.append(this._getProductDetails());
        this.$el.append(this._getProductQuantity());
        this.$el.append(this._getProductPrice());
        this.$el.append(this._getProductTotal());
    }

    _getProductDetails() {
        return JST["product/details.html"](this.data.product);
    }

    _getProductQuantity() {
        return JST["product/quantity.html"](this.data);
    }

    _getProductPrice() {
        return JST["product/price.html"](this.data.product);
    }

    _getProductTotal() {
        return JST["product/total.html"](this.data);
    }

    _buttonClickHandler(e) {
        let $button = $(e.target); // (-/+ button)
        if($button.hasClass('js-increase')) { // (+)
            this._increaseQuantity();
        } else if(this.data.quantity > 0) { // (-) Musn't be negative or NaN
            this._decreaseQuantity();
        }
        this._changeTotal();

        // Update Order component
        this.helper.updateOrder();
    }

    _inputQuantityChangeHandler(e) {
        let $input = $(e.target);
        let quantity = Number($input.val());
        if(quantity < 0 || isNaN(quantity)) {  // Musn't be negative or NaN
            quantity = 0;
        }
        this.data.quantity = quantity;
        this._updateQuantity();
        this._changeTotal();

        // Update Order component
        this.helper.updateOrder();
    }

    _increaseQuantity() {
        this.data.quantity++;
        this._updateQuantity();
    }

    _decreaseQuantity() {
        this.data.quantity--;
        this._updateQuantity();    
    }

    _updateQuantity() {
        this.$el.find('.js-quantity-input').val(this.data.quantity);
    }

    _changeTotal() {
        this.data.total = this.data.quantity * this.data.product.price;
        this.$el.find('.js-total').text(this.data.total);
    }
}