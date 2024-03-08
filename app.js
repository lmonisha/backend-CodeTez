const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models/index')
const routes = require('./routes/index')


var morgan = require('morgan')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'))
app.use('/', routes)

app.get('/', async (req, res) => {
    res.send('HelloWorld!!!!!!!!!!!!')
})




models.sequelize.sync().then(() => {

    app.listen(8000, () => console.log('server is running on the port'))
})