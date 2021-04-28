const express = require('express')
const env = require('dotenv')
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()


const userRoute = require('./routes/user')
const adminRoute = require('./routes/admin/user')
const crimeCats = require('./routes/crimeCategory')
const crimeReport = require('./routes/crimeReport')
const crimeLocation = require('./routes/crimeLocation')
const adminreportRoute = require('./routes/admin/crimeReport')
const reportStats = require('./routes/reportStat')


//mongoose connection
mongoose.connect("mongodb://localhost:27017/crime-report", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
    console.log('database connected');
});

env.config();
app.use(cors())

app.use(express.json())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', userRoute)
app.use('/api', adminRoute)
app.use('/api', crimeCats)
app.use('/api', crimeReport)
app.use('/api', crimeLocation)
app.use('/api', adminreportRoute)
app.use('/api', reportStats)






app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})