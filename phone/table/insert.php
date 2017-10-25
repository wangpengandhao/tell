<?php

	header('Content-type:text/html;charset=utf8');
	$mysql=new mysqli('localhost','root','','wuif1707',3306);//主机名 用户名 密码 库名3306 端口号
	$mysql->query('set names utf8');  //发送请求
	if($mysql->connect_errno){
		echo '数据库连接失败，失败信息' .$mysql->connect_errno;
		exit;
	}
$sql="insert into maillist (name,tell,pinyin) values ('',0,'')";
$mysql->query($sql);
echo $mysql->insert_id;
