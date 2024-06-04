const express = require('express')
const { getAllProducts, getProductById, CreateProduct, DeleteProductById, EditProduct, EditedProductById } = require('./productService')
const router = express.Router()

router.get('/:id', async (req, res) => {

    try {
        const produkId = parseInt(req.params.id)
        const produk = await getProductById(produkId)
        res.send(produk)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.get('/', async (req, res) => {
    
  const product = await getAllProducts();
    res.send(product);
});

router.post('/', async (req, res) => {

    try {
        const newProduct = req.body;

  const product = await CreateProduct(newProduct)

  res.status(201).json({
    data: product,
    message: 'Created Product',
  });
    } catch (error) {
        res.status(400).send(error.message)
    }
  
});

router.delete('/:id', async (req, res) => {
  

    try {
        const produkId = req.params.id;

        await DeleteProductById(produkId)
      
        res.send('deleted Products');
    } catch (error) {
        res.status(400).send(error.message)
    }
 
});

router.put('/:id', async (req, res) => {
try {
  const produkId = parseInt(req.params.id);
  const ProdukData = req.body;


  if (
    !(ProdukData.image && 
    ProdukData.name &&
     ProdukData.description 
     && ProdukData.price)
    ) {
    return res.status(400).send('SOME FIELD ARE MISSING');
  }
 
  const produk = await EditedProductById(produkId, ProdukData)

  res.send({
    data: produk,
    message: 'Updated Product',
  });
} catch (error) {

}


});

router.patch('/:id', async (req, res) => {

  try {
    
    const produkId = parseInt(req.params.id);
    const ProdukData = req.body;
  
    const produk = await EditedProductById(produkId, ProdukData)
    res.send({
      data: produk,
      message: 'edited Product',
    });
  } catch (error) {
    res.status(400).send(error.message)
  }
})


module.exports = router;