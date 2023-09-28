const express = require("express")

const quoteConroller = require("../controllers/quotes.controller")

const router = express.Router()

router.get("/",  quoteConroller.getRandomQuote)

module.exports = router