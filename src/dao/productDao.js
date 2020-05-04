const db = require('./config');

'use strict'

module.exports = class ProductsDao {
    getAllProducts() {
        return new Promise((resolve, reject) => {
            let products = [];
            db.collection('productos').get().then((snapshot) => {
                snapshot.forEach((doc) => {
                    let product = {};
                    product.imageURI = doc.get('imagen');
                    product.name = doc.get('nombre');
                    product.description = doc.get('descripcion');
                    product.price = doc.get('precio');
                    // Category
                    /*doc.get('categoriaRef').get().then((categ) => {
                        product.category = categ.get('nombre');
                    });*/
                    //let categoryName = await getCategoryName(doc.get('categoriaRef'));
                    //product.category = categoryName;
                    products.push(product);
                });
                resolve(products);
            });
        });
    }
} 

/*(async function getCategoryName(categoryRef){
    return new Promise((resolve, reject) => {
        categoryRef.get().then((categ) => {
            resolve(categ.get('nombre')); 
        });
    })
});*/