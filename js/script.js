document.getElementById("action").addEventListener("click", function(){
    var myArray = new Array();
	myArray[0] = "Mow lawn";
    myArray[1] = "Cook dinner";
    myArray[2] = "Wash dishes";
    //myArray[3] = "4";
    var s = "";
	      s += "Your to do list current contains these items:\n";		//GJR
		  s += "1). " + myArray[0] +"\n";		//GJR
          s += "2). " + myArray[1] +"\n";		//GJR
          s += "3). " + myArray[2] +"\n";		//GJR
		  s += "Please enter another item";
          /*s += "<br>" + myArray[0] +"</br>";
          s += "<br>" + myArray[1] +"</br>";
          s += "<br>" + myArray[2] +"</br>";
          s += "<br>" + myArray[3] +"</br>";*/
	myArray.push(prompt(s, ""));		//GJR
	var s2 = "Your to do list contains these items<br/>";	//GJR
		s2 += "1). " + myArray[0] +"<br />";		//GJR
        s2 += "2). " + myArray[1] +"<br />";		//GJR
        s2 += "3). " + myArray[2] +"<br />";		//GJR
		s2 += "4). " + myArray[3] +"<br />";		//GJR
    document.getElementById("todo-list").innerHTML = s2;
    //myArray.push(prompt("Your to do list current contains these item:\n1. Mow lawn\n2. Cook dinner\n3. Wash dishes\n-----------------------\nPlease enter another item."));

});