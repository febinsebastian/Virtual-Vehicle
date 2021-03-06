const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const vehicleRouters = require('./routes/vehicle-route');
app.use(cors());
app.use('/vehicle',vehicleRouters);

app.use((error, req, res, next) =>{
    if(res.headerSent) {
        return next(error)
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unexpected error occurred!'})
});

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zsag9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(() => {
    app.listen(8000, ()=> {
        console.log('listening on port 8000');
      })
}).catch(err => {
    console.log(err.message);
});

