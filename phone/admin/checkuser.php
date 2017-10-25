<?php

include 'db.php';
$user=$_POST['user'];
$pass=$_POST['pass'];

$sql="select * from manager";
$result=$mysql->query($sql);
$data=$result->fetch_all(MYSQL_ASSOC);
for($i=0;$i<count($data);$i++){
	if($data[$i]['uname']==$user &&$data[$i]['upass']==$pass){
		$message ='登陆成功';
		$url= 'main.php';
		include 'main.php';
		exit;
	}
}
$message='登录失败';
$url= 'login.php';
include 'message.html';