const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ProductController = require('./product/productController')
const cors = require('cors')

app.use(cors())

dotenv.config();

const PORT = process.env.PORT;


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Selamat Datang di API SERVER KUHHH  Tercinta');
});

app.use('/products', ProductController)

app.listen(PORT, () => {
  console.log(`Listening on Port : ${PORT}`);
});
