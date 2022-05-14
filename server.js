const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.json())
   .use((req, res, next) => {
       res.setHeader('Access-Control-Allow-Origin', '*');
       res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
       res.setHeader('Content-Type', 'applicatio/json');
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
       next();
    })
   .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
   .use('/', require('./routes'));

// connect to MongoDB and start the app
mongodb.initDb(err => {
    if (err) console.error(err);
    else {
        app.listen(port);
        console.log(`Running on port ${port}`);
    }
});