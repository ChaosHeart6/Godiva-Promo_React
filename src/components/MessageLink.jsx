import { Link } from "react-router-dom";
function MessageLink(){
    return(
        <Link to={"/messageForm"}>
           <div style={{
            position: 'fixed',
            left:'50px',
            bottom: '20px',
            background: '#fff',
            border: '1px solid #ccc',
            padding: '8px 12px',
            borderRadius: '20px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            textDecoration: 'none',
            color: 'black',
            display: 'flex',
            justifyContent:'space-between'
            }}>
                我要留言
            </div>  
        </Link>
    );
}
export default MessageLink;