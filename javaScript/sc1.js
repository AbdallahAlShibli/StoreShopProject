
<html>
<body>
	<h1>Demo: JavaScript Object</h1>
	<p id="p1"></p>
	<p id="p2"></p>
	<p id="p3"></p>
	<p id="p4"></p>
	<p id="p5"></p>
	
	<script>
		var person = new Object();

		// Attach properties and methods to person object     
		person.firstName = "James";
		person["lastName"] = "Bond"; 
		person.age = 25;
		person.getFullName = function ()
         {
				return this.firstName + ' ' + this.lastName;
			};

		// access properties & methods 
		document.getElementById("p1").innerHTML = person.firstName; 
		document.getElementById("p2").innerHTML = person.lastName; 

		document.getElementById("p3").innerHTML = person["firstName"];
		document.getElementById("p4").innerHTML = person["lastName"];

		document.getElementById("p5").innerHTML = person.getFullName();

    </script>
</body>
</html>