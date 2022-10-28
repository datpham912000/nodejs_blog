const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphdb =  require('express-handlebars');
const app = express()
const route = require('./routes')

const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//HTTP Logger
// app.use(morgan('combined'))

//Template engine
app.engine('hbs', exphdb.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

//Route init  
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
