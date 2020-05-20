// Data structure example:
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

    readDiscountsDataFromStorage() {
        this.discountsData = [
            {
                productCode : 'GOKU',
                name : '2x1 GOKU POP',
                discount : null
            },
            {
                productCode : 'NARU',
                name : 'x3 NARUTO POP',
                discount : 1
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