const {Router} = require('express');

const routes = Router();

routes.get('/helthz',(req,res)=>{
    res.status(200).json({
        status:"running"
    });
})

module.exports = routes;