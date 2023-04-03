const { default: mongoose } = require("mongoose");

const jobSchema = mongoose.Schema({
    position:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    workLevel:{
        type:String,
        required:true
    },
    employmentType:{
        type:String,
        required:true
    },
    salaryRange:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    overview:String,
    skills:[String],
    responsibilities:[String],
    requirements:[String],
    applicant:[{
        userId:String,
        email:String,
        jobId:String
    }],
    question:[{
        userId:String,
        email:String,
        jobId:String,
        question:String,
        reply:[String]
    }]

})

const Job = mongoose.model("Job",jobSchema)

module.exports = Job
