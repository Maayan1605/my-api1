const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const port = 5090;
app.listen(port, () => {
    console.log(`server is running via port ${port}`);
});