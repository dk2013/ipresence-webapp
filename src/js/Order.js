class Order {
    constructor($el, storage) {
        this.$el = $el;
        this.storage = storage;
    }

    render() {
        this.$el.append(this._getOrderSummary());
        this.$el.append(this._getOrderDiscounts());
        this.$el.append(this._getOrderCheckout());
    }

    _getOrderSummary() {
        return JST["order/summary.html"]();
    }

    _getOrderDiscounts() {
        return JST["order/discounts.html"]();
    }

    _getOrderCheckout() {
        return JST["order/checkout.html"]();
    }

    update() {
        let $itemsSum = this.$el.find('.js-sum-items');
        let $itemsSumAmount = this.$el.find('.js-sum-amount');

        const itemsSum = this._calculateItemsSum();
        const itemsSumAmount = this._calculateItemsSumAmount();

        // Set order summary values
        $itemsSum.text(itemsSum);
        $itemsSumAmount.text(itemsSumAmount);

        // Apply discounts
        let discounts = this._getDiscounts();
        this._applyDiscounts(discounts);

        // Set Total cost
        let $totalCostContainer = this.$el.find('.js-total-cost');
        let totalCostAmount = this._calculateTotalCost(itemsSumAmount, discounts);
        $totalCostContainer.text(totalCostAmount + ' €')
    }

    _calculateItemsSum() {
        let itemsSum = 0;
        if(Array.isArray(this.storage.data)) {
            let itemsArray = this.storage.data;
            itemsArray.forEach(item => {
                itemsSum += item.quantity;
            });
        }
        return itemsSum;
    }

    _calculateItemsSumAmount() {
        let itemsSumAmount = 0;
        if(Array.isArray(this.storage.data)) {
            let itemsArray = this.storage.data;
            itemsArray.forEach(item => {
                itemsSumAmount += item.total;
            });
        }
        return itemsSumAmount;
    }

    _applyDiscounts(discounts) {
        // Toggle discounts blocks
        let $discountsHeader = this.$el.find('.js-discounts-header');
        let $discountsContainer = this.$el.find('.js-discounts');
        if(discounts.length) {
            $discountsHeader.css('visibility','visible');
            $discountsContainer.css('visibility','visible');
        } else {
            $discountsHeader.css('visibility','hidden');
            $discountsContainer.css('visibility','hidden');
        }

        // Apply found discounts
        $discountsContainer.empty();
        discounts.forEach(discount => {
            let $offer = $('<div class="offer">').text(discount.name);
            let $amount = $('<div class="amount">').text(discount.amount + ' €')
            let $discountRow = $('<div class="discount-row">')
                .append($offer)
                .append($amount);
            $discountsContainer.append($discountRow);
        });
    }

    _getDiscounts() {
        let discountsData = this.storage.discountsData;
        let productsData = this.storage.data;

        // Search discounts for applying
        let discounts = [];
        for(const discount of discountsData) {
            for(const item of productsData) {
                if(item.product.code === discount.productCode) {
                    let discountObj = this._calculateDiscount(item, discount);
                    if(discountObj) {
                        discounts.push(this._calculateDiscount(item, discount));
                    }
                }
            }
        }

        return discounts;
    }

    _calculateDiscount(item, discount) {
        let discountObj = {
            name : discount.name,
            amount : 0
        };

        switch(discount.productCode) {
            case 'GOKU' : {
                let evenHalfNumber = Math.floor(item.quantity / 2);
                discountObj.amount = item.product.price * evenHalfNumber;
                break;
            }
            case 'NARU' : {
                if(item.quantity >= 3) {
                    discountObj.amount = discount.amount * item.quantity
                }
                break;
            }
        }

        if(discountObj.amount) {
            discountObj.amount = -discountObj.amount;
        } else {
            return false;
        }

        return discountObj;
    }

    _calculateTotalCost(itemsSumAmount, discounts) {
        let totalCostAmount = itemsSumAmount;
        discounts.forEach(discount => {
            totalCostAmount += discount.amount;
        });
        return totalCostAmount;
    }
}