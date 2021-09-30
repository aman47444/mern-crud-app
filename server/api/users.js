const express = require('express');
const router = express.Router();
const User = require('../model/Users')
const validateUser = require('../validation/userValidation')


router.post('/create-user', async (req, res) => {
    const { err, isValid } = validateUser(req.body)
    if (!isValid) {
        res.status(400).json(err)
    }
    let email = req.body.email
    await User.findOne({ email: email })
        .then(user => {
            if (user) {
                res.status(400).send({ err: 'Email is already Exist ...' })
            } else {
                const userInfo = new User({
                    name: req.body.name,
                    salary: req.body.salary,
                    dob: req.body.dob,
                    company: req.body.company,
                    email: req.body.email
                })

                userInfo.save();
                res.json(userInfo)
            }
        })
        .catch(err => res.status(400).send(err))
})

router.delete('/user/:id', async (req, res) => {
    const id = req.params.id
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        if(!id) {
            return res.status(400).send('Id is Invalid')
        }

        res.send(deleteUser)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/user/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).send(updateUser)
    } catch(e) {
        res.status(404).send()
    }
})

router.get('/user', (req,res) => {
    const error = '';
    User.find()
    .then((user) => {
        if(!user) {
            error = 'There is such user'
            res.status(404).json(error)
        }
        res.status(200).json(user)
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get('/user/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const getUserById = await User.findById(id)
        if(!getUserById) {
            res.status(404).send()
        } else {
            res.send(getUserById);
        }
    } catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router;