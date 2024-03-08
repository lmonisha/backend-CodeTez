const models = require('../models/index')
const nodemailer = require('nodemailer');



module.exports.getAllEmployee = async (req, res) => {
    try {
        console.log('req.body----------------->', req.body)

        models.Employee.findAll().then(response => {
            console.log('table------------>', response)
            res.json({
                status: '200',
                message: 'Details fetched successfully!!',
                result: response
            })
        }).catch((err) => {
            console.log('errorr in response--------->', err)
        })
    } catch (err) {
        console.log('error-------', err)

        return res.status(500).send(err)
    }
}


async function generateUsermail(email, password) {
    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'lmonisha12@gmail.com', // your email address
                pass: 'ylsj qsiw biwe zdtq' // your email password
            }
        });

        // Define email options
        const mailOptions = {
            from: 'lmonisha12@gmail.com', // sender address
            to: email, // recipient's email address
            subject: 'Test Email', // Subject line
            text: `Welcome to this platform. Your mailId is ${email} and autogenerate password is ${password}` // Plain text body
        };

        // Send email and return a promise
        return await transporter.sendMail(mailOptions);
    } catch (error) {
        // If an error occurs, reject the promise with the error
        throw error;
    }
}

function generatePassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}




module.exports.createEmployee = async (req, res) => {
    try {
        console.log('req.body----------------->', req.body)



        const { firstName, lastName, email, role, designation, address, phoneno, gender } = req.body
        const password = await generatePassword(8); // Generate an 8-character password
        console.log(password);

        let filter = {
            firstName,
            lastName,
            email,
            password,
            role,
            designation,
            address,
            phoneno,
            gender

        }

        models.Employee.create(filter).then(async (response) => {
            console.log('response------------>', response)
            let userEmail = await generateUsermail(email, password).then((info)=>{
                console.log('Email sent:', info.response);
            }).catch((error)=>{
                console.error('Error sending email:', error);
            })
            console.log('userEmail-------------->', userEmail)
            res.json({
                status: 200,
                message: 'Details created successfully!!', resultObj: response
            })

        }).catch((err) => {
            console.log('errorr in response--------->', err)
        })
    

} catch (err) {
    console.log('error-------', err)
    return res.status(500).send(err)

}
}

module.exports.updateEmployee = async (req, res) => {
    try {
        console.log('req.body----------------->', req.body)
        const { firstName, lastName, email, password, role, designation, address, phoneno } = req.body

        let updateData = {
            firstName,
            lastName,
            email,
            password,
            role,
            designation,
            address,
            phoneno


        }

        const filter = {
            where: {
                id: req.body.id
            }
        }


        models.Employee.update(updateData, filter).then((response) => {
            console.log('response for update----->', response)
            res.json({ status: 200, message: 'Details updated successfully!!', resultObj: response })
        })
    } catch (err) {
        console.log('error-------', err)
        return res.status(500).send(err)

    }
}

module.exports.deleteEmployee = async (req, res) => {
    try {
        console.log('req.body----------------->', req.body)

        models.Employee.destroy({
            where: {
                id: req.body.id
            }
        }).then(response => {
            console.log('response in delete---->', response)
            res.json({ status: 200, message: 'Details deleted successfully!!', resultObj: response })
        })
    } catch (err) {
        console.log('error-------', err)
        return res.status(500).send(err)

    }
}


module.exports.viewAllSalary = async (req, res) => {
    try {
        console.log('req.body----------------->', req.body)

        models.SalaryDetail.findAll().then(response => {
            console.log('table------------>', response)
            res.json({
                status: '200',
                message: 'Details fetched successfully!!',
                result: response
            })
        }).catch((err) => {
            console.log('errorr in response--------->', err)
        })
    } catch (err) {
        console.log('error-------', err)
        return res.status(500).send(err)
    }
}

module.exports.createSalary = async (req, res) => {
    try {
        console.log('req.body----------------->', req.body)
        const { empId, empName, DaySalary, workingDays, totalmonthsalary, totalyearsalary, selectedMonth, selectedYear } = req.body

        let filter = {
            empId, empName, dayAmount: DaySalary,
            monthFromUser: selectedMonth,
            yearFromUser: selectedYear,
            monthAmount: totalmonthsalary,
            yearAmount: totalyearsalary,
            workingDays
        }

        models.SalaryDetail.create(filter).then((response) => {
            console.log('response------------>', response)
            res.json({
                status: 200,
                message: 'Details created successfully!!',
                resultObj: response
            })

        }).catch((err) => {
            console.log('errorr in response--------->', err)
        })

    } catch (err) {
        console.log('error-------', err)
        return res.status(500).send(err)
    }
}
module.exports.updateSalary = async (req, res) => {
    try {
        console.log('req.body----------------->', req.body)
        const { empId, empName, DaySalary, workingDays, totalmonthsalary, totalyearsalary, selectedMonth, selectedYear } = req.body

        let updateData = {
            empId, empName, dayAmount: DaySalary,
            monthFromUser: selectedMonth,
            yearFromUser: selectedYear,
            monthAmount: totalmonthsalary,
            yearAmount: totalyearsalary,
            workingDays
        }

        const filter = {
            where: {
                id: req.body.empId
            }
        }

        console.log('updateData----------------->', updateData)

        models.SalaryDetail.update(updateData, filter).then((response) => {
            console.log('response for update----->', response)
            res.json({
                status: 200,
                message: 'Details updated successfully!!', resultObj: response
            })
        })
    } catch (err) {
        console.log('error-------', err)
        return res.status(500).send(err)
    }
}
module.exports.deleteSalary = async (req, res) => {
    try {
        console.log('req.body----------------->', req.body)

        models.SalaryDetail.destroy({
            where: {
                id: req.body.empId
            }
        }).then(response => {
            console.log('response in delete---->', response)
            res.json({ status: 200, message: 'Details deleted successfully!!', resultObj: response })
        })
    } catch (err) {
        console.log('error-------', err)
        return res.status(500).send(err)
    }
}

