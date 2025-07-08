//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import {useState } from 'react';
import './App.css'
import ProductCard from './components/ProductCard';
import products from './data/products';
import Header from './components/Header';
import { Routes, Route, Link } from 'react-router-dom';
import CartIcon from './components/CartIcon';
import HomePageIcon from './components/HomePageIcon';
import MessageForm from './components/MessageForm';
import MessageLink from './components/MessageLink';
import { useCart } from './context/CartContext';
import MessageList from './components/MessageList';

function App() {
  //const [count, setCount] = useState(0)
  const {cart, setCart} = useCart();
  function addToCart(product){
    setCart(
      prevCart =>{
        const existing = prevCart.find(item =>item.name === product.name);
        if (existing){
          return prevCart.map(item=>
            item.name === product.name
            ?{...item,quantity:item.quantity+1}
            :item
          );
        }
        else{
          return[
            ...prevCart,{...product,quantity:1}
          ];
        }
      }
    );
  }
  function increaseQty(name) {
    setCart(prev =>
      prev.map(item =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQty(name) {
   setCart(prev =>
      prev
       .map(item =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
       .filter(item => item.quantity > 0)
   );
  }
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Header cartCount={cart.length}/>
      <div style={{position:'relative'}}>
        <HomePageIcon/>
        <CartIcon count = {cart.length}></CartIcon>
        <MessageLink />
        <Routes>
          <Route path='/'element={
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
          {
            products.map((item , index) => (
              <ProductCard key = {index}{...item} onAdd={()=>addToCart(item)}/>
            ))
          }
            </div>
          }>
          </Route>
        <Route path='/cart' element = {
          <div>
            <h2>購物車內容</h2>
            {cart.length ===0
            ?(<p>目前購物車裡沒有商品</p>)
            :cart.map((item, i)=>(
              <div key={i}>
                {item.name} - NT${item.price}x{item.quantity}
                <button onClick={() => increaseQty(item.name)}>➕</button>
                <button onClick={() => decreaseQty(item.name)}>➖</button>
              </div>
            ))}
            <hr />
            <p>
              <strong>總金額：</strong>
              NT${
                cart.reduce((total,item)=>total+item.price*item.quantity,0)
              }
            </p>
          </div>
        }></Route>
         <Route path='/messageForm' element = {
            <div>
              <MessageForm/>
            </div>
         }></Route>
         <Route path="/messages" element={<MessageList />} />
      </Routes>
        </div>
    </div>
  )
}

export default App;
