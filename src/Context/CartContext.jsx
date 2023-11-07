import React, {createContext,useState,useEffect} from 'react';

const CartContext = createContext()

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider =({children})=>{
  const [cart, setCart] = useState(cartItemsFromLocalStorage);

  let handleAddToCart = (product) => {
    const productSelected = cart.find(
      (singleCart) => singleCart.id === product.id
    );
    if (productSelected) {
      setCart(
        cart.map((oneItem) =>
          oneItem.id === product.id
            ? {
                ...productSelected,
                quantity: productSelected.quantity + 1,
              }
            : oneItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])


  return (

    <CartContext.Provider value={{
      handleAddToCart,
      cart,
      setCart
    }}>
      {children}

    
    </CartContext.Provider>
  )

}
  


export default CartContext;