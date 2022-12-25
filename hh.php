$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "vegetable";
$n=$_GET["nnn"];
$c=$_GET["ccc"];
$a=$_GET["aaa"];
$p=$_GET["ppp"];
$conn = mysqli_connect($hostname, $username, $password, $dbname);
echo"connn";
if(!$conn) {
die("Unable to connect");
}
INSERT INTO plants (name, color, age, price) VALUES ($n, $c, $a, $p);
echo"plant inserted succefully";