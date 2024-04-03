const db = require("../config/DBConnection");

// create salary model
const createpayroll = (
  employee_id,
  salary_id,
  pay_period_start,
  pay_period_end,
  total_allowances,
  total_deductions,
  net_pay
) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO payroll_details (employee_id,salary_id,pay_period_start ,pay_period_end ,total_allowances ,total_deductions ,net_pay) VALUES (?, ?,?,?,?,?,?)";
    const values = [
      employee_id,
      salary_id,
      pay_period_start,
      pay_period_end,
      total_allowances,
      total_deductions,
      net_pay,
    ];
    db.query(query, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// get Salary
const getPayroll = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM payroll_details ";
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = { createpayroll, getPayroll };
