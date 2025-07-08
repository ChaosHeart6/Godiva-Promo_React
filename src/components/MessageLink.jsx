import { Link } from "react-router-dom";
function MessageLink(){
    return(
        <>
      {/* 左下角：我要留言 */}
      <div
        style={{
          position: 'fixed',
          left: '20px',
          bottom: '20px',
          background: '#fff',
          border: '1px solid #ccc',
          padding: '8px 12px',
          borderRadius: '20px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        }}
      >
        <Link to="/messageForm" style={{ textDecoration: 'none', color: 'black' }}>
          我要留言
        </Link>
      </div>

      {/* 右下角：留言列表 */}
      <div
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          background: '#fff',
          border: '1px solid #ccc',
          padding: '8px 12px',
          borderRadius: '20px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        }}
      >
        <Link to="/messages" style={{ textDecoration: 'none', color: 'black' }}>
          留言列表
        </Link>
      </div>
    </>  
    );
}
export default MessageLink;