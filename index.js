const express = require('express');
const app = exrpess();
const logger = require('morgan');
const port = process.env.PORT || 3000;

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