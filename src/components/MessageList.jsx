import { useEffect, useState } from 'react';

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://godiva-promo-not-official.infinityfreeapp.com/api/view.php")
      .then(res => res.json())
      .then(data => {
        console.log(data); // ✅ 看 console 有資料就代表抓到
        setMessages(data); // 設定狀態以顯示留言
      })
      .catch(err => {
        console.error("API 錯誤：", err);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>💬 留言列表</h2>
      {messages.length === 0 ? (
        <p>目前尚無留言。</p>
      ) : (
        messages.map((msg, i) => (
          <div key={i} style={{
            background: '#fff',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px'
          }}>
            <strong>{msg.name}</strong>（{msg.email}）
            <p>{msg.message}</p>
            <small>{msg.created_at}</small>
          </div>
        ))
      )}
    </div>
  );
}export default MessageList;