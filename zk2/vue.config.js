const exam = require('./src/mock/exam.json');
module.exports = {
    devServer:{
        before(app){
            app.get('/api/exam',(req,res)=>{
                res.send(exam);
            });
        }
    }
}