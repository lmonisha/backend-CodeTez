const router=require('express').Router()
const controller=require('../controllers/employeeController')

router.post('/create',controller.createEmployee)
router.post('/update',controller.updateEmployee)
router.get('/getAllEmployee',controller.getAllEmployee)
router.post('/delete',controller.deleteEmployee)

router.post('/createSalary',controller.createSalary)
router.post('/updateSalary',controller.updateSalary)
router.get('/getAllSalary',controller.viewAllSalary)
router.post('/deleteSalary',controller.deleteSalary)

module.exports=router