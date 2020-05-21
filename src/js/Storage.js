// List of products data structure example:
/*
[
    {
        "product":{
            "code":"GOKU",
            "name":"Goku POP",
            "price":5,
            "image":"goku_pop.jpg"
        },
        "quantity":0,
        "total":0
    },
    
]
*/

class Storage {
    constructor() {
        this.data = null;
        this.readProductsDataFromStorage();
        this.discountsData = null;
        this.readDiscountsDataFromStorage();
    }

    /**
     * The function has to read list of products from local storage
     * In demo case it reads data from json/storage.json local file
     */
    readProductsDataFromStorage() {
        $.ajax({
            url : "json/storage.json",
            async : false
        })
        .done((data) => {       
            this.data = data;
        })
        .fail(() => { 
            throw new Error('Error reading storage'); 
        });
    }

    /**
     * The function has to read list of discounts from some db
     * In demo case it reads data from hardcoded variable
     */
    readDiscountsDataFromStorage() {
        this.discountsData = [
            {
                productCode : 'GOKU',
                name : '2x1 GOKU POP',
                amount : null
            },
            {
                productCode : 'NARU',
                name : 'x3 NARUTO POP',
                amount : 1
            }
        ];
    }

    getProductsData() {
        return this.data;
    };

    getDiscountsData() {
        return this.discountsData;
    }
}