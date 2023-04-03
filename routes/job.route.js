const express = require('express')
const { createJob, getJob, getJobById, jobApply, getAppliedJobsByEmail,jobQuestion, jobReply, getReply } = require('../controller/job.controller')
const router = express.Router()


router.patch('/apply', jobApply)
router.patch('/question', jobQuestion)
router.patch('/reply', jobReply)
router.get('/appliedJobs/:email', getAppliedJobsByEmail)

router.route('/')
.post( createJob )
.get( getJob )


router.route('/:id')
.get( getJobById )

module.exports = router