const express = require("express");
const router = express();

const productsService = require("../service/productService");
const prodService = new productsService();

router.get("/", async (req, res) => {
    let products = await prodService.getAllProducts()
    res.json({ products });
});

module.exports = router;