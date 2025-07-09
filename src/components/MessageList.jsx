import { useEffect, useState } from 'react';

function MessageList() {
  //宣告狀態變數並使每次setMessages被呼叫時,更新useState()(只執行最初一次)的state(messages)
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://godiva-promo-not-official.infinityfreeapp.com/api/view.php")
      .then(res => res.json())
      .then(data => {
        console.log(data); // 看 console 有資料就代表抓到
        setMessages(data); // 設定狀態以顯示留言
      })
      .catch(err => {//發生錯誤就執行
        console.error("API 錯誤：", err);
      });
  }, []);//[]第一次載入時執行一次

  return (
    <div style={{ padding: '20px' }}>
      <h2>💬 留言列表</h2>
      {messages.length === 0 
      ? (<p>目前尚無留言。</p>) 
      : (
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