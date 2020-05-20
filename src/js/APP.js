class APP {
    constructor($el) {
        this.$el = $el;
        // TODO: emitter
        this.storage = new Storage();
        let $orderContainer = this.$el.find('.js-order');
        this.order = new Order($orderContainer);
    }

    render() {
        let $productContainer = this.$el.find('.js-product');
        let productsData = this.storage.getProductsData();
        let helper = {
            updateOrder : this.updateOrder.bind(this)
        };
        productsData.forEach(item => {
            let $itemsRow = $('<div class="items-row">');
            new Product($itemsRow, item, helper).render();
            $productContainer.append($itemsRow)
        });
    }

    updateOrder() {
        this.order.update(this.storage);
    }
}