const express = require('express');
const router = express.Router();
const joinRouter = require("../models/join")

router.post("/",async(req,res) => {
    console.log(req.body);
    var data = new joinRouter({
        name:req.body.name,
        phonenumber:req.body.phonenumber,
        address:req.body.address,
        nic:req.body.nic,
        license:req.body.license,
        vehicle:req.body.vehicle

    });
    await data.save();
  res.json(data);
});

router.get("/", (req,res) => {
    joinRouter.find((err,data) => {
        res.json(data)
    })
})

module.exports = router;