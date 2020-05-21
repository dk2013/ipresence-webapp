class APP {
    constructor($el) {
        this.$el = $el;
        this.storage = new Storage();
        let $orderContainer = this.$el.find('.js-order');
        this.order = new Order($orderContainer, this.storage);
    }

    render() {
        let $productContainer = this.$el.find('.js-product');
        let productsData = this.storage.getProductsData();
        let helper = {
            updateOrder : this._updateOrder.bind(this)
        };
        productsData.forEach(item => {
            let $itemsRow = $('<div class="items-row">');
            new Product($itemsRow, item, helper).render();
            $productContainer.append($itemsRow)
        });

        this.order.render();
    }

    _updateOrder() {
        this.order.update();
    }
}