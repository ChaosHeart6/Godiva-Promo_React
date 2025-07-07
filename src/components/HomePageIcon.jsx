import { Link } from "react-router-dom";
function HomePageIcon(){
    return(
        <Link to={"/"}>
           <div style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            background: '#fff',
            border: '1px solid #ccc',
            padding: '8px 12px',
            borderRadius: '20px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            textDecoration: 'none',
            color: 'black'
            }}>
                🏠
            </div>    
        </Link>
    );
}
export default HomePageIcon;