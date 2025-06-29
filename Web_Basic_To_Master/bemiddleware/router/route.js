const express = require('express');
const router = express.Router();

const auth = function(req,res,next) {
    console.log("this is auth middleware");

    req.user = {user: "sid", role: "student"};

    if(req.user) {
        next();
    }
    else {
        res.json({
            "success": "failed",
            "message": "You are not valid user"
        })

    }
}

const isstudent = function(req,res,next) {

    console.log("isstudnet middleware");

    if(req.user.role === "student") {
        next();
    }
    else {
        res.json({
            "success": "failed",
            "message": "You are not studnet user"
        })

    }
}

const isadmin = function(req,res,next) {
    console.log("isadmin middlware");

    if(req.user === "admin") {
        next();
    }
    else {
        res.json({
            "success": "failed",
            "message": "You are not admin user"
        })

    }
}

router.get("/student", auth, isstudent, (req, res) => {
    console.log("This is a studnet route");
    res.send("This is Studnet page");
}) 

router.get("/admin", auth, isadmin, (req, res) => {
    console.log("This is a Admin route");
    res.send("This is Admin page");
}) 

module.exports = router;