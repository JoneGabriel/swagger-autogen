const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
      title: 'My API',
      description: 'Description',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    '@definitions': {
        User: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                   
                },
                id: {
                    type: 'string',
                   
                },
                email:{
                    type:'string'
                },
                adm:{
                    type:'boolean'
                }
            }
        }
    },
    securityDefinitions: {
        apiKeyAuth: {
          type: 'apiKey',
          in: 'header', 
          name: 'X-API-KEY', 
          description: 'Some description...'
        }
      }
    
  };
const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles,doc).then(()=>{
    require('./index.js');
})