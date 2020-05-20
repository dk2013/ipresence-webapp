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
        this.readDataFromStorage();
    }

    readDataFromStorage() {
        // $.ajax({
        //     url : "json/storage.json",
        //     async : false
        // })
        // .done((data) => {       
        //     this.data = data;
        // })
        // .fail(() => { 
        //     throw new Error('Error reading storage'); 
        // })


        // I used loading JSON in js variable because ajax can't 
        // load local file by CORS reason
        this.data = storageJSON;
    }

    getData() {
        return this.data;
    };
}   