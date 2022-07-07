const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const {createUser, getUSerById, getUser} = require("./user");

const middleware = require("./middleware");
const swaggerFile = require('./swagger_output.json')

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.use((req, res, next)=>{
    middleware(req, res, next);
});

app.post("/user", (req, res)=>{
    
    /*  
        #swagger.security = [{
            "apiKeyAuth": []
        }] 
    */
     
    /*  
        #swagger.parameters['example'] = {
                in: 'body',
                description: 'Exemplo de usuario',
                schema: {
                    $id:'5786586',
                    $name:'Lucas',
                    $email:'lucasfelipe@gmail.com',
                    $adm:false
                }
        } 
    */

    createUser(req.body);
    res.status(200).send(req.body);
})


app.listen(3000);