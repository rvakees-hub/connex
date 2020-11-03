const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator')
require('dotenv').config()

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const formRouter = require('./routes/form')
const joinRouter = require('./routes/join')

const path = require('path')




const app = express();



mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(() => console.log("db connected"))

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator())
app.use(cors())

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/form", formRouter);
app.use("/join", joinRouter);

app.use(express.static('Front-End/build'));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + 'Front-End/build/index.html'));
});

const port = process.env.PORT || 8000


app.listen(port, () => {
    console.log(`server is Runnig on port ${port}`);
});