const db = require('./config');

'use strict'

module.exports = class CategoriesDao {
    getAllCategories() {
        return new Promise((resolve, reject) => {
            let categories = [];
            db.collection('categorias').get().then((snapshot) => {
                snapshot.forEach((doc) => {
                    categories.push({
                        id: doc.id,
                        imageUri: doc.get('imagen'),
                        name: doc.get('nombre')
                    });
                });
                resolve(categories);
            });
        });
    }
} 