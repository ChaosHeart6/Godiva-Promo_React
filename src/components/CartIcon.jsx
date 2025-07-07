import { Link } from "react-router-dom";
function CartIcon({count}){
    return(
        <Link to={"/cart"}>
            <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '30px',
            padding: '10px 15px',
             boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            zIndex: 999
            }}>
                🛒 {count}
            </div>    
        </Link>
    );
}
export default CartIcon;