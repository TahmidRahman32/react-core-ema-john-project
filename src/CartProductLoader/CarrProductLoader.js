import { getShoppingCart } from "../utilities/fakedb";

const CartProductLoadear = async() =>{
const cartLoader = await fetch('products.json');
const products = await cartLoader.json();

const storedCart = getShoppingCart();
const saveCart = [];
console.log(storedCart);
for(const id in storedCart){
   const addedProduct = products.find(pd => pd.id ===id);
   if(addedProduct){
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      saveCart.push(addedProduct);
   }
}
return saveCart;

}

export default CartProductLoadear;