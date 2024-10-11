const { createUser, readAllUser, readOneUser, updateUser, deleteUser } = require('../controllers/user')
const { verifyAdmin, verifyToken } = require('../middleware/verifyToken')



const userRouter = require('express').Router()


userRouter.post(`/`, verifyAdmin, createUser)
userRouter.get(`/`, readAllUser)
userRouter.get(`/profile`, verifyToken, readOneUser)
userRouter.patch(`/:id`, verifyAdmin, updateUser)
userRouter.delete(`/:id`, verifyAdmin, deleteUser)


module.exports = userRouter