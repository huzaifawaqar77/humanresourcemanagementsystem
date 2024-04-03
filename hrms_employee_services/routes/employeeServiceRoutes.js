const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  getEmployeeDepartmentAndPosition,
  searchEmployee,
} = require("../controller/employeeServiceController");

const { verifyAdminOrManagerToken } = require("../../middleware/middleware");

const router = express.Router();
router.post("/createEmployee", createEmployee);
router.get("/getAllEmployees", verifyAdminOrManagerToken, getAllEmployees);
router.get("/searchEmployee/:name", searchEmployee);

// Employement Routes
router.get(
  "/getEmployeeDepartmentAndPosition",
  getEmployeeDepartmentAndPosition
);

module.exports = router;
