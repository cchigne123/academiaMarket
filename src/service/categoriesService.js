const categoriesDao = require('../dao/categoriesDao');
const catDao = new categoriesDao();

module.exports = class CategoriesService {
    getAllCategories() {
        return new Promise((resolve, reject) => {
            catDao.getAllCategories().then(categories => {
                resolve(categories);
            });
        });
    }
}
