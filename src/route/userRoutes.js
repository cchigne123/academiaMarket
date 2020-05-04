const express = require("express");
const router = express();

const userService = require("../service/userService");
const usrService = new userService();

router.post("/", (req, res) => {
    usrService.registerUser(req.body).then(userId => {
        res.json({ userId });
    }).catch(err => {
        res.statusCode = 400;
        res.json({ err });
    });
});

router.post("/login", (req, res) => {
    usrService.loginUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.statusCode = 400;
        res.json({ err });
    });
});

module.exports = router;