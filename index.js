const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//The URL adress is: http://localhost:5090/api/accounts/signIn
const accountsRoute = require('./controllers/accounts');
app.use('/api/accounts', accountsRoute);

const port = 5090;
app.listen(port, () => {
    console.log(`server is running via port ${port}`);
});