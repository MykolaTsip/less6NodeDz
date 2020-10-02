const express = require('express')
const {carRouter, userRouter} = require('./routers')

const instance = require('./database').getInstance();
instance.setModel()

const  server = express()

server.use(express.urlencoded({extended: true}));
server.use(express.json())

server.use('/cars', carRouter);
server.use('/users', userRouter)

server.use('*', (err, req, res, next) => {
    res.status(err.status || 404)
        .json({
            massage: err.message | 'hz',
            code: err.customCode | 4004
        })
})

server.listen(5002, (e) => {
    if (e) {
        console.log(e)
    }
    console.log('host 5002 is done')
})
