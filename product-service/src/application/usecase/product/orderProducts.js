
const orderProducts = async (productId,userId,address,repositories,productService) =>{
   console.log(productId,userId,"usecase bu product");
  
  try{
      
     const products = await repositories.orderedProducts(productId,userId,address)
     if(products){
        console.log("}}}}}}}+++++++))))))))))");
        return ({status:true,products:products})
     }
   
     
  } catch(error){

  }

}

export default orderProducts;