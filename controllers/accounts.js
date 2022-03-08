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
        return res.status(401).json({
            messege: `User not found`,
        });
    }
});

module.exports = router;