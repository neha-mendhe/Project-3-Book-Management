const express = require('express');
const router = express.Router();
const userController = require("../controller/userController")
const booksController = require("../controller/booksController")
const middleware = require("../middleware/userAuth")

//User APIs
router.post("/register",userController.createUser)
router.post('/Login', userController.userLogin)

//Books API
router.post('/books',middleware.tokenValidator,booksController. createBook )
router.get("/books",middleware.tokenValidator,booksController.getAllBooks)
router.get("/books/:bookId",middleware.tokenValidator,booksController.getBooksById)
router.put("/books/:bookId",middleware.tokenValidator,booksController.updateBook)
router.delete("/books/:bookId",middleware.tokenValidator,booksController.deleteBooksById )


// if api is invalid OR wrong URL
router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
})

module.exports=router;