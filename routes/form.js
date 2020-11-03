const express = require('express');
const router = express.Router();
const formRouter = require("../models/form")

router.post("/",async(req,res) => {
    console.log(req.body);
    var data = new formRouter({
        name:req.body.name,
        phonenumber:req.body.phonenumber,
        pickupaddress:req.body.pickupaddress,
        deliveryaddress:req.body.deliveryaddress,
        weight:req.body.weight

    });
    await data.save();
  res.json(data);
});

router.get("/", (req,res) => {
    formRouter.find((err,data) => {
        res.json(data)
    })
})

router.delete("/:id", (req, res) => {
    formRouter.findOneAndDelete({_id:req.params.id}, (err,data) => {
        if(!data){
           res.json({success:false, message:"bad request"})
        }
        else{
            res.json({success:true, message:"Deleted Successfully..."})
        }
    })
})

module.exports = router;