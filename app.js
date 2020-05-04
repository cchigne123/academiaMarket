var express = require('express'); //import express 
var app = express();

const http = require('http');
const port = 9000;
app.set('port', port);

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const categoryRoute = require('./src/route/categoriesRoutes')
app.use('/category', categoryRoute)

const userRoute = require('./src/route/userRoutes')
app.use('/user', userRoute)

const productRoute = require('./src/route/productRoutes')
app.use('/product', productRoute)

const server = http.createServer(app);

server.listen(port, (error) => {
  if (error) console.error('Error iniciando el servidor', error);
  console.log('Server iniciado en el puerto ===> ', port)
})

