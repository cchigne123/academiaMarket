const productsDao = require('../dao/productDao');

const prodDao = new productsDao();

module.exports = class ProductsService {
    getAllProducts() {
        return new Promise((resolve, reject) => {
            prodDao.getAllProducts().then(products => {
                resolve(products);
            });
        });
    }
}
