// Allows routes to be declared in a separate file and imported.
const router = require("express").Router();

// Require handlers.
const { getAllProd, getProd } = require("../handlers/productsHandle");

// #Endpoints.

// Get all products
router.get("/api/products", getAllProd);

//Get one product
router.get("/api/product/:_id", getProd);

module.exports = router;
