<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="../css/login.css">
</head>
<body>
	<form action="checkuser.php" method="post">
		<div class="fromGroup">
			<h3>欢迎登陆</h3>
		</div>
		<div class="fromGroup">
			<label for="">
				用户名
			</label>
			<input type="text" name="user" placeholder="请输入用户名">
		</div>
		<div class="fromGroup">
			<label for="">
				密&nbsp;&nbsp;&nbsp;码
			</label>
			<input type="password" name="pass" placeholder="请输入密码">
		</div>
		<input type="submit" name="提交" id="btn">
	</form>
</body>
</html>

<?php


