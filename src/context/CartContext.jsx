import { createContext, useState, useContext} from "react";
const CartContext = createContext();
export function CartProvider({children}){
    //宣告狀態變數並使每次setCart被呼叫時,更新useState()(只執行最初一次)的state(cart)
    const [cart, setCart] = useState([]);
    return(//把value裡的東西給包<CartProvider>裡的children用,觀看main.jsx可得知就是<App/>
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
}
export function useCart() {
  return useContext(CartContext);//把剛剛設定的value=>{{cart,setCart}}回傳
}