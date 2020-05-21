class Product {
    constructor($el, data, helper) {
        this.$el = $el;
        this.data = data;
        this.helper = helper;
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.inputQuantityChangeHandler = this.inputQuantityChangeHandler.bind(this);

        this.$el.on('click', '.js-item-quantity', this.buttonClickHandler);
        this.$el.on('change', '.js-quantity-input', this.inputQuantityChangeHandler);
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

    buttonClickHandler(e) {
        let $button = $(e.target);
        if($button.hasClass('js-increase')) {
            this.increaseQuantity();
        } else if(this.data.quantity > 0) {
            this.decreaseQuantity();
        }
        this.changeTotal();

        // Updates Order component
        this.helper.updateOrder();
    }

    inputQuantityChangeHandler(e) {
        let $input = $(e.target);
        let quantity = Number($input.val());
        if(quantity < 0 || isNaN(quantity)) {
            quantity = 0;
        }
        this.data.quantity = quantity;
        this.updateQuantity();
        this.changeTotal();

        // Updates Order component
        this.helper.updateOrder();
    }

    increaseQuantity() {
        this.data.quantity++;
        this.updateQuantity();
    }

    decreaseQuantity() {
        this.data.quantity--;
        this.updateQuantity();    
    }

    updateQuantity() {
        this.$el.find('.js-quantity-input').val(this.data.quantity);
    }

    changeTotal() {
        this.data.total = this.data.quantity * this.data.product.price;
        this.$el.find('.js-total').text(this.data.total);
    }
}