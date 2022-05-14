const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Chris\' API',
    description: 'Chris Fowler\'s CSE341 Contacts API',
  },
  host: 'cfowl-cse341.herokuapp.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// // build API docs without starting the app
// swaggerAutogen(outputFile, endpointsFiles, doc);

// build API docs and start the app
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js'); // Your project's root file
});