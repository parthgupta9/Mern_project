const express =require("express");
const router = express.Router();
const authController=require("../controllers/authController.js");
const applicationController = require("../controllers/applicationController.js");
router.post("/post", authController.isAuthenticated,applicationController.uploadUserResume,applicationController.postApplication);
router.get("/employer/getall", authController.isAuthenticated,applicationController.employerGetAllApplications);
router.get("/jobseeker/getall", authController.isAuthenticated,applicationController.jobseekerGetAllApplications);
router.delete("/delete/:id", authController.isAuthenticated, applicationController.jobseekerDeleteApplication);

module.exports=router;
