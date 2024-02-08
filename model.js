const mongoose = require("mongoose")

//connection
mongoose.connect("mongodb+srv://sherinhanna44:hannasher@cluster0.yyqaeqt.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

let mongoschema = mongoose.Schema

const employeeschema = new mongoschema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number

})

var employeeModel = mongoose.model("employee",employeeschema)
module.exports = employeeModel