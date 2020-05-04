const express = require("express");
const router = express();

const categoriesService = require("../service/categoriesService");
const catService = new categoriesService();

router.get("/", (req, res) => {
    catService.getAllCategories().then(categories => {
        res.json({ categories });
    });
});

module.exports = router;