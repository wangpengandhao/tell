<?php

	header('Content-type:text/html;charset=utf8');
	$mysql=new mysqli('localhost','root','','wuif1707',3306);//3306 端口号
	$mysql->query('set names utf8');
	if($mysql->connect_errno){
		echo '数据库连接失败，失败信息' .$mysql->connect_errno;
		exit;
	}
?>