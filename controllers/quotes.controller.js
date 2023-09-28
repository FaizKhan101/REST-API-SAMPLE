const Quote = require("../models/quote.model")

exports.getRandomQuote = async (req, res, next) => {
    let randomQuote;
    try {
        randomQuote = await Quote.getRandomQuote()
    }catch (error) {
        return next(error)
    }
    res.status(200).json({
        quote: randomQuote
    })
}