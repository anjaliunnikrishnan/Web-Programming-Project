<?php
	$client_email=$_POST["email"];
	$client_password=$_POST["pwd"];

	$servername="localhost";
	$username="root";
	$password="";
	$dbname= "test_1";

	$conn= new mysqli($servername,$username,$password,$dbname);
	if($conn->connect_error)
		die("Connecttion failed");
	else {
	 	$signincheck="SELECT name,password FROM userdata WHERE email='$client_email'";
		$result = 	mysqli_query($conn,$signincheck);//injects an sql query where the query is given by $signincheck
		$res=mysqli_fetch_assoc($result);//takes the result stored in $result and saves it as an associative array given by $res
		if (strcmp($res["password"],$client_password)==0)
		{
			header("Location:http://localhost/WP%20Project/Home-Page.html");
		}	else
		{
			header("Location:http://localhost/WP%20Project/Sign-In.html");

		}
	}
	$conn->close();
?>
