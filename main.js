/********************************************************************
* function finds user in the demo.txt file and displays it on the 
* page.
********************************************************************/
function findUser()
{
	console.log("onclick")
	var found, userAge, userSemester = 0;
	var userEmail = "";

	var myname = " "; 
	myname = document.getElementById("userInputs").value; 
	console.log("The username is: ", myname)

	var obj, dbParam, xmlhttp, myObj, x, text = " ";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {

	  if (this.readyState == 4 && this.status == 200) {

	  	myObj = JSON.parse(this.responseText);
	  	for (x in myObj.users) {

	  		console.log(myname === myObj.users[x].userName);
	  		if(myname === myObj.users[x].userName)
	  		{ 	
	  			console.log("found it\n");
	  			console.log(myObj.users[x].info.age)

	  			found = 1; 
	  			userAge = myObj.users[x].info.age;
	  			userEmail = myObj.users[x].info.email;
	  			userSemester = myObj.users[x].info.semester;
	  		}

		}
		if(found == 1)
			{ document.getElementById("demo").innerHTML = myname 
			+ ": was found" + "<br>" + " Age: " + userAge + "<br>" 
			+ " Email: " + userEmail + "<br>" + "\nSemester: " 
			+ userSemester; }
		else if(myname != "")
			{ document.getElementById("demo").innerHTML = myname + ": does not exist.\n"; }
		else
			{ document.getElementById("demo").innerHTML = myname + ""; }
		}

	};
	xmlhttp.open("GET", "demo.json", true);
	xmlhttp.send();

	
}
/********************************************************************
* function checks to see if the user is in the demo.txt file
********************************************************************/
function checkUser()
{
	console.log("onclick")
	var myname = document.getElementById("userInputs").value; 
	console.log("The username is: ", myname)

	var obj, dbParam, xmlhttp, myObj, x, text = "";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {

	  if (this.readyState == 4 && this.status == 200) {

	  	myObj = JSON.parse(this.responseText);
	  	for (x in myObj.users) {
	  		text += myObj.users[x].userName + " " + myObj.users[x].ID 
	  		+ "<br>" + " Age: " + myObj.users[x].info.age 
			+ "<br>" + " Email: " + myObj.users[x].info.email + "<br>" + 
			"\nSemester: " + myObj.users[x].info.semester + "<br>" + "<br>";
	  	}

	    document.getElementById("demo").innerHTML = text; //myObj.users[0].userName;
	  }
	};
	xmlhttp.open("GET", "demo.json", true);
	xmlhttp.send();

}
/********************************************************************
* function clears the display 
********************************************************************/
function clearUser()
{
	document.getElementById("demo").innerHTML = " ";
}