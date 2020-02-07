const express = require('express');
const app = express();
//const path = require('path');
//const uuid = require('uuid/v4');
const logger = require('morgan');
//const users = require('./Model/Users')
const port = process.env.PORT || 8000;
const userRoutes = require('./routes/userRoutes');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
    return res.send('Hello express')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
}
)