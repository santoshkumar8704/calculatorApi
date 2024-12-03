Calculator = (app) => {
    app.get("/",(req,res,next)=>{
        res.send("Hello calculator is working ")
    })
    app.get("/add/:num1/:num2", (req,res,next) => {
        const num1 = parseInt(req.params.num1)
        const num2 = parseInt(req.params.num2)
        const data = {
            result : num1+num2
        }
        res.json(data)
    })
    app.get("/subtract/:num1/:num2", (req,res,next) => {
        const num1 = parseInt(req.params.num1)
        const num2 = parseInt(req.params.num2)
        const data = {
            result : num1-num2
        }
        res.json(data)
    })
    app.get("/multiply/:num1/:num2", (req,res,next) => {
        const num1 = parseInt(req.params.num1)
        const num2 = parseInt(req.params.num2)
        const data = {
            result : num1*num2
        }
        res.json(data)
    })
    app.get("/divide/:num1/:num2", (req,res,next) => {
        const num1 = parseInt(req.params.num1)
        const num2 = parseInt(req.params.num2)
        const data = {
            result : num1/num2
        }
        res.json(data)
    })
}
module.exports = Calculator