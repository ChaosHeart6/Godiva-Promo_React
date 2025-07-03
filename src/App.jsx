//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>GODIVA 活動頁</h1>
      <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
        <ProductCard name="經典黑巧克力" price="320" image="images/BlackChoco.jpg"></ProductCard>
        <ProductCard name="榛果白巧克力" price="380" image="images/StrawberryWhiteChoco.jpg"></ProductCard>
      </div>
    </div>
  )
}

export default App;
