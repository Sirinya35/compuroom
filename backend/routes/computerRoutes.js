const express = require("express");
const router = express.Router();

const computerController = require("../controllers/computerController");

// GET เครื่องทั้งหมด
router.get("/", computerController.getAllComputers);

// GET เครื่องตาม id
router.get("/:id", computerController.getComputerById);

// เพิ่มเครื่อง
router.post("/", computerController.createComputer);

// แก้ไขเครื่อง
router.put("/:id", computerController.updateComputer);

// ลบเครื่อง
router.delete("/:id", computerController.deleteComputer);

module.exports = router;