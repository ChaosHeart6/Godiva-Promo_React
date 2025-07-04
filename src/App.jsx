//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard';
import products from './data/products';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>GODIVA 活動頁</h1>
      <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
        {
          products.map((item , index) => 
            <ProductCard key = {index}{...item}></ProductCard>
          )
        }
      </div>
    </div>
  )
}

export default App;
