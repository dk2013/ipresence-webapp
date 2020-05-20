class Product {
    constructor($el, data) {
        this.$el = $el;
        this.data = data;
    }

    getPrice() {
        console.log(this.price);
    }

    render() {
        // this.$el.append(this.getHTML());

        this.$el.append(this.getProductDetails());
        this.$el.append(this.getProductQuantity());
        this.$el.append(this.getProductPrice());
        this.$el.append(this.getProductTotal());
    }

    getProductDetails() {
        return JST["product/details.html"](this.data.product);
    }

    getProductQuantity() {
        return JST["product/quantity.html"](this.data);
    }

    getProductPrice() {
        return JST["product/price.html"](this.data.product);
    }

    getProductTotal() {
        return JST["product/total.html"](this.data);
    }

    getHTML() {
        // console.log(window["JST"]["product.html"](this.data));
        return JST["product.html"](this.data);
    }
}