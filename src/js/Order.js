class Order {
    constructor($el) {
        this.$el = $el;
    }

    update(storage) {
        let $itemsSum = this.$el.find('.js-sum-items');
        let $itemsSumAmount = this.$el.find('.js-sum-amount');

        const itemsSum = this.calculateItemsSum(storage);
        const itemsSumAmount = this.calculateItemsSumAmount(storage);

        // Set updated values
        $itemsSum.text(itemsSum);
        $itemsSumAmount.text(itemsSumAmount);
    }

    calculateItemsSum(storage) {
        let itemsSum = 0;
        if(Array.isArray(storage.data)) {
            let itemsArray = storage.data;
            itemsArray.forEach(item => {
                itemsSum += item.quantity;
            });
        }
        return itemsSum;
    }

    calculateItemsSumAmount(storage) {
        let itemsSumAmount = 0;
        if(Array.isArray(storage.data)) {
            let itemsArray = storage.data;
            itemsArray.forEach(item => {
                itemsSumAmount += item.product.price * item.quantity;
            });
        }
        return itemsSumAmount;
    }
}