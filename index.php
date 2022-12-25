<?php


$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "db1";
$conn = mysqli_connect($hostname, $username, $password, $dbname);
if(!$conn) {
die("Unable to connect");
}
if($_POST) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $sql = "SELECT * FROM users WHERE user = '$username' AND pwd = '$password'";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) == 1) 
    echo "Welcome";
    else 
    echo "login failure try again please";
    }
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Login Page</title>
	<style type="text/css">
		input[type=text],input[type=password]{
			
			margin: 8px;
			border: 1px solid #f1f1f1f;
			letter-spacing: 1px;
			border-radius: 3px;
		}
		input[type=submit]{
			margin-left: 8px;
			width: 274px;
			border-radius: 3px;
			border: 1px solid #4285f4;
			background-color: #4285f4;
			
			color: white;
			font-weight: 600;
			cursor: pointer;
		}
	</style>
</head>
<body>
<form action="index.php" method="POST"> 
	<h1>User Login </h1>


		Username: <input type="text" name="username"><br><br>
		Password: <input type="password" name="password" placeholder="********"><br><br>
		
		
		<input type="submit" name="login" value="LOGIN"/>
</form>
</body>
</html>