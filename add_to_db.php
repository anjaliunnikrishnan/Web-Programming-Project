

<?php

	$servername="localhost";
	$username="root";
	$password="";
	$dbname= "test_1";

	$client_name=$_POST["name"];
	$client_email=$_POST["email"];
	$client_password=$_POST["pwd1"];

	$conn= new mysqli($servername,$username,$password, $dbname);

	//if( $conn->connect_error !=""){
	//	die("Connection failed: " .$conn->connect_error);
	//}
	$sql= "INSERT INTO `userdata` VALUES('".$client_name."','".$client_email."','".$client_password."')";
	if( $conn->query($sql) === true)
		echo "Added successfully";
	else
		echo "Fail".$conn->error;
	$conn->close();
 ?>
