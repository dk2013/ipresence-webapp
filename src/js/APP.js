class APP {
    constructor($el) {
        this.$el = $el;
    }

    render() {

        // get all products from db
        // get from json -> new Product
        // render header, footer, sidebar, content

        let $productContainer = this.$el.find('.js-product');
        // foreach
            const data = {
                product : {
                    code : '111',
                    name : 'name',
                    price : 10,
                    image : 'goku_pop.jpg'
                },
                quantity : 2,
                total : 355
            };
            new Product($productContainer, data).render();
            
            // new Product($productContainer, productData).render();
    }
}