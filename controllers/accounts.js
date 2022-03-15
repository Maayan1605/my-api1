const express = require('express');
const router = express.Router();
const bcriptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const arr = []

router.post('/login', async(req, res) => {
    const {password, email} = req.body;
    // const data = {
    //     id: 123456789,
    //     firstName: "First",
    //     lastName: "Last",
    //     email: "emailname@gmail.com"
    // }
    // const token = await jsonwebtoken.sign(data,'4itGC0cfFYaN6A9seeO5zypLbtGlYLLG');
    const hash_password = await bcriptjs.hash(password,10);
    const isMatch = await bcriptjs.compare(password, hash_password);
    if(isMatch){
        return res.status(200).json({
            messege: "true",
        });
    }
    else{
        return res.status(200).json({
            messege: "false",
        });
    }
});
router.post('/signIn', async(req, res) => {
    const {password, email} = req.body;
    const result = arr.find(user => user.email == email);
    if(result){
        if(await bcriptjs.compare(password,result.password)){
            const token = await jsonwebtoken.sign(result,'4itGC0cfFYaN6A9seeO5zypLbtGlYLLG');
            return res.status(200).json({
                messege: token,
            });
        }
        else{
            return res.status(200).json({
                messege: `Wrong password`,
            });
        }
    }
    else{
        return res.status(200).json({
            messege: `User not found`,
        });
    }
});
router.post('/addAcount', async(req, res) => {
    if(req.body.username && req.body.password && req.body.email){
        const result = arr.find(user => user.email == req.body.email);
        if(result != null){
            return res.status(200).json({
                messege: `User already exsists.`,
            });
        }
        else{
            const newAccount = {
                username: req.body.username,
                password: await bcriptjs.hash(req.body.password,10),
                email: req.body.email
            }
            arr.push(newAccount);
            console.log(arr);
            return res.status(200).json({
                messege: `Welcome ${newAccount.username} from API route`,
            });
        }
    }
    else{
        return res.status(200).json({
            messege: `Invalid request`,
        });
    }
});



module.exports = router;