const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json'; //json vazio 
const endpointsFiles = ['./route.js']; //arquivo onde estão as rotas

swaggerAutogen(outputFile, endpointsFiles).then(()=>{
    require('./index.js');
})
