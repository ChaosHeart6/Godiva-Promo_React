<?php
    if (basename($_SERVER['PHP_SELF']) == 'config.php') {
        http_response_code(403);
        exit("Forbidden");
    }   
    $isLocal = $_SERVER["HTTP_HOST"] === 'localhost';
    if ($isLocal) {
       $host = "localhost";
        $user = "root";
        $password = "";
        $dbname = "godiva_db";
    } else{
        $host = "sql100.infinityfree.com";
        $user = "if0_39364899";
        $password = "236951saAS";
        $dbname = "if0_39364899_godiva_db";
    }
?>