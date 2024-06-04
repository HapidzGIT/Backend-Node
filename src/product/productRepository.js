const prisma = require("../db");

const getAllProductss = async () => {
    const product = await prisma.product.findMany()

    return product  
}

const findProductById = async (id) => {
    const product = await prisma.product.findUnique({
        where : {
            id 
        }
    })

    return product
}

const CreateProducts = async (newProduct) => {
    const product = await prisma.product.create({
        data: {
          name: newProduct.name,
          price: newProduct.price,
          description: newProduct.description,
          image: newProduct.image,
        },
      });

      return product
}

const DeleteProductFromId = async (id) => {
    await prisma.product.delete({
        where: {
         id : parseInt(id)
        },
      });
} 


const UpdatedProduct = async (id, ProdukData) => {
 const product = await prisma.product.update({
    where: {
      id : parseInt(id)
    },

    data: {
      name: ProdukData.name,  
      price: ProdukData.price,
      description: ProdukData.description,
      image: ProdukData.image,
    },
  });
return product
}

module.exports = {getAllProductss, findProductById, CreateProducts, DeleteProductFromId, UpdatedProduct}