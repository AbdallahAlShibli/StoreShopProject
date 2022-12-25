<?php
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "vegetable";
$n=$_GET["nnn"];
$c=$_GET["ccc"];
$a=$_GET["aaa"];
$p=$_GET["ppp"];
$conn = mysqli_connect($hostname, $username, $password, $dbname);

if(!$conn) {
die("Unable to connect");
}
$req="INSERT INTO plants (nam, color, age, price) VALUES ('$n', '$c', '$a', '$p')";
if (mysqli_query($conn, $req)) {
    echo"plant inserted succefully";
} else {
    echo "Erreur : " . $req . "<br>" . mysqli_error($conn);
}

$result = mysqli_query($conn,"SELECT * FROM plants");

echo "<table border='1'>
<tr>
<th>Name </th>
<th>Color</th>
<th>Age</th>
<th>Price</th>

</tr>";

while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row['nam'] . "</td>";
echo "<td>" . $row['color'] . "</td>";
echo "<td>" . $row['age'] . "</td>";
echo "<td>" . $row['price'] . "</td>";
echo "</tr>";
}
echo "</table>";

mysqli_close($conn);
?>







