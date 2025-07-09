<?php
header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once "config.php";//請求一次config.php以獲取host,password,dbname等連線資訊

$conn = new mysqli($host, $user, $password, $dbname);//連線
if($conn->connect_error){
    die("連線失敗：" . $conn->connect_error);//失敗回覆失敗原因並停止執行
}

$sql = "SELECT * FROM messages ORDER BY created_at DESC";//SQL指令
$result = $conn->query($sql);//執行SQL，不須prepare因為不是使用者輸入不用擔心SQL攻擊

$messages = [];

if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {//每讀一筆(行)資料
        $messages[] = $row;//存進陣列裡面
    }
}

echo json_encode($messages);//轉成json格式給前端使用
$conn->close();//結束連線釋放資源
?>