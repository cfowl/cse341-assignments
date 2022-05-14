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
       next();
    })
   .use('/', require('./routes'))
   .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// connect to the server and start the app
mongodb.initDb(err => {
    if (err) console.error(err);
    else {
        app.listen(port);
        console.log(`Running on port ${port}`);
    }
});