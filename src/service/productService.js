const productsDao = require('../dao/productDao');

const prodDao = new productsDao();

module.exports = class ProductsService {
    async getAllProducts() {
        return await prodDao.getAllProducts()
    }
}
