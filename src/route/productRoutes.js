const express = require("express");
const router = express();

const productsService = require("../service/productService");
const prodService = new productsService();

router.get("/", (req, res) => {
    prodService.getAllProducts().then(products => {
        res.json({ products });
    });
});

module.exports = router;