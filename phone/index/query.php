<?php

	include 'db.php';
	$sql="select * from maillist";
	$result=$mysql->query($sql);
	$data=$result->fetch_all(MYSQL_ASSOC);
	echo json_encode($data);
?>