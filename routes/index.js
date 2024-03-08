const router=require('express').Router()
const controller=require('../controllers/employeeController')
const { body } = require('express-validator');

const validateEmployeeData = [
    body('id').optional().trim().notEmpty().isNumeric().withMessage('Employee ID is required and must be numeric'),
    body('firstName').trim().notEmpty().withMessage('First name is required'),
    body('lastName').trim().notEmpty().withMessage('Last name is required'),
    body('email').trim().isEmail().withMessage('Invalid email format'),
    body('role').trim().notEmpty().withMessage('Role is required'),
    body('designation').trim().notEmpty().withMessage('Designation is required'),
    body('address').trim().notEmpty().withMessage('Address is required'),
    body('phoneno').trim().isMobilePhone().withMessage('Invalid phone number'),
    body('gender').trim().isIn(['male', 'female', 'other']).withMessage('Invalid gender'),
];

const validateSalaryData = [
    body('empId').optional().trim().notEmpty().isNumeric().withMessage('Employee ID is required and must be numeric'),
    body('empName').trim().notEmpty().withMessage('Employee name is required'),
    body('DaySalary').trim().notEmpty().isNumeric().withMessage('Day salary is required and must be numeric'),
    body('workingDays').trim().notEmpty().isNumeric().withMessage('Working days are required and must be numeric'),
    body('totalmonthsalary').trim().notEmpty().isNumeric().withMessage('Total monthly salary is required and must be numeric'),
    body('totalyearsalary').trim().notEmpty().isNumeric().withMessage('Total yearly salary is required and must be numeric'),
    body('selectedMonth').trim().notEmpty().isInt({ min: 1, max: 12 }).withMessage('Invalid selected month'),
    body('selectedYear').trim().notEmpty().isInt({ min: 1900 }).withMessage('Invalid selected year'),
];


router.post('/create',validateEmployeeData,controller.createEmployee)
router.post('/update',validateEmployeeData,controller.updateEmployee)
router.get('/getAllEmployee',controller.getAllEmployee)
router.post('/delete',controller.deleteEmployee)

router.post('/createSalary',validateSalaryData,controller.createSalary)
router.post('/updateSalary',validateSalaryData ,controller.updateSalary)
router.get('/getAllSalary',controller.viewAllSalary)
router.post('/deleteSalary',controller.deleteSalary)

module.exports=router