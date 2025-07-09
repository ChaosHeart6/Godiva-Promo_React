<?php//不用本機線上重複修改資料庫連線資訊
    if (basename($_SERVER['PHP_SELF']) == 'config.php') {
        http_response_code(403);
        exit("Forbidden");
    }   
    $isLocal = $_SERVER["HTTP_HOST"] === 'localhost';//判斷是本機還是線上
    if ($isLocal) {//本機資料庫
       $host = "localhost";
        $user = "root";
        $password = "";
        $dbname = "godiva_db";
    } else{//線上資料庫
        $host = "sql100.infinityfree.com";
        $user = "if0_39364899";
        $password = "236951saAS";
        $dbname = "if0_39364899_godiva_db";
    }
?>