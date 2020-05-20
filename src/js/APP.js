class APP {
    constructor($el) {
        this.$el = $el;
        // TODO: emitter
        this.storage = new Storage();
    }

    render() {
        let $container = this.$el.find('.js-product');
        let data = this.storage.getData();

        data.forEach(item => {
            let $itemsRow = $('<div class="items-row">');
            new Product($itemsRow, item).render();
            $container.append($itemsRow)
        });
    }
}