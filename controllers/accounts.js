const express = require('express');
const router = express.Router();

const arr = [
    {
        username: 'Bill Gates',
        password: '12345',
        email: 'billGates@gmail.com'
    }
]
router.post('/sayHello', (req, res) => {
    const {password, email} = req.body;
    const result = arr.find(user => user.email == email);
    if(result){
        if(result.password == password){
            return res.status(200).json({
                messege: `Hello ${result.username} from API route`,
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
router.post('/addAcount', (req, res) => {
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
                password: req.body.password,
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