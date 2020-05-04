const db = require('./config');

'use strict'

module.exports = class CategoriesDao {
    getAllCategories() {
        return new Promise((resolve, reject) => {
            let categories = []; 
            db.collection('categorias').get().then((snapshot) => {
                snapshot.forEach((doc) => {
                    let category = {};
                    category.imageURI = doc.get('imagen');
                    category.name = doc.get('nombre');
                    categories.push(category);
                });
                resolve(categories);
            });
        });
    }
} 