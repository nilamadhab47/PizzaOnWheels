const express = require("express")

const router = express.Router()

const UserModel = require("../models/UserModel");

router.post("/register", (req, res)=> {
    const {name, email, password} = req.body

    const newUser = new UserModel({name, email, password})

    try {
        newUser.save()
        res.send("new user registered successfully")
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.post("/login", async(req, res) => {

    const {email , password} = req.body

    try {
        
        const user = await UserModel.find({email , password})

        if(user.length > 0)
        {
            const currentUser = {
                name : user[0].name , 
                email : user[0].email, 
                isAdmin : user[0].isAdmin, 
                _id : user[0]._id
            }
            res.send(currentUser);
        }
        else{
            return res.status(400).json({ message: 'User Login Failed' });
        }

    } catch (error) {
           return res.status(400).json({ message: 'Something went weong' });
    }
  
});

router.get("/getallusers", async (req, res) => {

    try {
        const users = await UserModel.find({})
        res.send(users)
    } catch (error) {
        res.status(400).json({ message: 'something went wrong'})
        
    }
})
router.post("/deleteusers", async (req, res) => {
    const userid = req.body.userid

    try {
        const users = await UserModel.findOneAndDelete({_id: userid})
        res.send(users)
    } catch (error) {
        res.status(400).json({ message: 'something went wrong'})
        
    }
})

module.exports = router