class Order {
    constructor($el) {
        this.$el = $el;
    }

    update(storage) {
        let $itemsSum = this.$el.find('.js-sum-items');
        let $itemsSumAmount = this.$el.find('.js-sum-amount');

        const itemsSum = this.calculateItemsSum(storage);
        const itemsSumAmount = this.calculateItemsSumAmount(storage);

        // Set order summary values
        $itemsSum.text(itemsSum);
        $itemsSumAmount.text(itemsSumAmount);

        // Apply discounts
        let discounts = this.getDiscounts(storage);
        this.applyDiscounts(discounts);

        // Set Total cost
        let $totalCostContainer = this.$el.find('.js-total-cost');
        let totalCostAmount = this.calculateTotalCost(itemsSumAmount, discounts);
        $totalCostContainer.text(totalCostAmount + ' €')
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
                itemsSumAmount += item.total;
            });
        }
        return itemsSumAmount;
    }

    applyDiscounts(discounts) {
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

    getDiscounts(storage) {
        let discountsData = storage.discountsData;
        let productsData = storage.data;

        // Search discounts for applying
        let discounts = [];
        for(const discount of discountsData) {
            for(const item of productsData) {
                if(item.product.code === discount.productCode) {
                    let discountObj = this.calculateDiscount(item, discount);
                    if(discountObj) {
                        discounts.push(this.calculateDiscount(item, discount));
                    }
                }
            }
        }

        return discounts;
    }

    calculateDiscount(item, discount) {
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

        if(discountObj.amount > 0) {
            discountObj.amount = -discountObj.amount;
        } else {
            return false;
        }

        return discountObj;
    }

    calculateTotalCost(itemsSumAmount, discounts) {
        let totalCostAmount = itemsSumAmount;
        discounts.forEach(discount => {
            totalCostAmount += discount.amount;
        });
        return totalCostAmount;
    }
}