const db = require('./config');

'use strict'

const userCollectionRef = db.collection('usuarios');

module.exports = class CategoriesDao {
    registerUser(name, email, pass) {
        return new Promise((resolve, reject) => {
            userCollectionRef.where('email','==',email).get().then(snapshot => {
                if (!snapshot.empty) {
                    reject("Usuario ya existe!");
                } else {
                    let userRef = userCollectionRef.doc();
                    let user = {
                        nombre: name,
                        email: email,
                        clave: pass
                    };
                    userRef.set(user);
                    resolve(userRef.id)
                }
            });
        });
    }

    findUser(email, pass) {
        return new Promise((resolve, reject) => {
            userCollectionRef.where('email','==',email).where('clave','==',pass).get()
            .then(snapshot => {
                if (snapshot.empty) {
                    reject("Email o clave incorrecta!");
                } else {
                    let user = {};
                    user.name = snapshot.docs[0].get('nombre');
                    user.id = snapshot.docs[0].id;
                    user.email = snapshot.docs[0].get('email');
                    resolve(user);
                }
            });
        });
    }
}