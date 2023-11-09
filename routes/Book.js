const express = require("express");
const router = express.Router();
const {
    createBook,
    singleBook,
    updateBook,
    getAllBook,
    deleteBook
} = require("../controller/bookController");

router.post("/createbook", createBook);
router.get("/singlebook", singleBook);
router.get("/getallbook", getAllBook);
router.put("/updatebook", updateBook);
router.delete("/deletebook", deleteBook);

module.exports = router;
