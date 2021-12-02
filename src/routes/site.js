const express = require('express')
const router = express.Router()
const { ensureAuthenticated, forwardAuthenticated } = require('../config/db/auth');


const siteController = require('../app/controllers/SiteController')

router.use('/Contact', siteController.contact)
router.use('/Appointment_with_a_doctor', siteController.Utilities1)
router.use('/Immediately_pills_sent', siteController.Utilities2)
router.use('/Multi-function pharmacy', siteController.Utilities3)
router.use('/Online_Health_Diagnosis', siteController.Utilities4)
router.use('/Online_medical_records', siteController.Utilities5)
router.use('/Personal_business_healthcare', siteController.Utilities6)
router.use('/ForgotPassword', siteController.fwd)
router.use('/Person', siteController.person)
router.use('/Booking', siteController.booking)


router.get('/', forwardAuthenticated, (req, res) => res.render('Login', {layout: 'Login_Reg.hbs'}));



module.exports = router