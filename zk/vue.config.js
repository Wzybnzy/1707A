let list = require('./src/mock/list.json');
module.exports = {
    devServer:{
        before(app){
            app.get('/api/list',(req,res)=>{
                res.send({list})
            });
        }
    }
}