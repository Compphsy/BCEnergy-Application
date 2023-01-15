// common js for backend
const express = require('express')
const router = express.Router()

const {
    getUsage,
    setUsage,
    updateUsage,
    deleteUsage
} = require('../controller/usageController')



router.get('/', getUsage)

router.post('/', setUsage)

router.put('/:id', updateUsage)


router.delete('/:id', deleteUsage)

module.exports = router