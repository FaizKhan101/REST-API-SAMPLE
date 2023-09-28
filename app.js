const express = require("express")

const app = express()

app.use("/quote", (req, res, next) => {
    res.json({
        qoute: "Programming is thinking!"
    })
})

app.listen(3000)
