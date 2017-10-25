<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	html,body{
		width: 100%;
		height: 100%;
		
	}
	body{
		overflow: hidden;
		
	}
	.top{
		width: 100%;
		height: 100px;
		border-bottom: 2px solid #000;
		text-align: center;
		line-height: 100px;
	}
	.main{
		display: flex;
		width: 100%;
		height: 100%;
	}
	.left{
		width: 200px;
		height: 100%;
		border-right: 2px solid #000;
		padding: 35px;
		box-sizing: border-box;
	}
	.left a{
		display: block;
		padding: 5px 0;
		color: #333;
		font-size: 18px;
	}
	.right{
		flex-grow: 1;
	}
	.right iframe{
		display: block;
		width: 100%;
		height: 100%;

	}
</style>
<body>
	<div class="top"><h1>后台管理系统</h1></div>
	<div class="main">
		<div class="left">
			<a href="../tables/table.html" target="right">用户管理</a>
			<a href="../table/table.html" target="right">联系人管理</a>
		</div>
		<div class="right">
			<iframe src="../table/table.html" frameborder="0" name="right"></iframe>
		</div>
	</div>
</body>
</html>
