const db = require('./config');

'use strict'

module.exports = class ProductsDao {
    async getAllProducts() {
        let products = await this.getAllProductsFromRemote()
        await this.iterateProducts(products)
        return products
    }

    async iterateProducts(products) {
        await asyncForEach(products, async (product) => {
            const category = await this.getCategoryFromRef(product.categoryRef)
            product.category = category
            delete product.categoryRef
        })
    }

    getAllProductsFromRemote() {
        return new Promise((resolve, reject) => {
            db.collection('productos').get().then((snapshot) => {
                let products = []
                snapshot.forEach(doc => {
                    if (doc.exists) {
                        products.push({
                            id: doc.id,
                            imageUri: doc.get('imagen'),
                            name: doc.get('nombre'),
                            description: doc.get('descripcion'),
                            precio: doc.get('precio'),
                            categoryRef: doc.get('categoriaRef')
                        });
                    }
                });
                resolve(products);
            });
        })
    }

    getCategoryFromRef(categoryRef) {
        return new Promise((resolve, reject) => {
            categoryRef.get().then((documentSnapshot) => {
                if (documentSnapshot.exists) {
                    let data = documentSnapshot.data()
                    data.id = documentSnapshot.id
                    resolve(data);
                } else {
                    reject(null)
                }
            });
        })
    }


}

// a helper function
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}