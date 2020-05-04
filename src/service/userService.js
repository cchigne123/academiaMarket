const userDao = require('../dao/userDao');
const usrDao = new userDao();

module.exports = class UserService {
    registerUser(userDto) {
        return new Promise((resolve, reject) => {
            let incorrectName = !userDto.name || userDto.name === '';
            let incorrectEmail = !userDto.email || userDto.email === '';
            let incorrectPass = !userDto.pass || userDto.pass === '';
            if (incorrectName || incorrectEmail || incorrectPass)
                reject("No se enviaron los parametros requeridos");
            else {
                usrDao.registerUser(userDto.name, userDto.email, userDto.pass).then(userId => {
                    resolve(userId);
                }).catch(err => reject(err));
            }
        });
    }

    loginUser(loginDto) {
        return new Promise((resolve, reject) => {
            let incorrectEmail = !loginDto.email || loginDto.email === '';
            let incorrectPass = !loginDto.pass || loginDto.pass === '';
            if (incorrectEmail || incorrectPass)
                reject("No se enviaron los parametros requeridos");
            else {
                usrDao.findUser(loginDto.email, loginDto.pass).then(user => {
                    resolve(user);
                }).catch(err => reject(err));
            }
        });
    }
}
