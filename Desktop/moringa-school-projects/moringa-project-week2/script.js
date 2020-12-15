
	var male = ["kwadwo","kwabena","kwaku","yaw","kofi","kwame","kwasi"];

	var female=["adwoa","adwoa","akua","yaa","afua","ama","akosua"];

	var dayNames=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"] 

function myfunction(){
	var date = document.getElementById("input-date").value;
	var DD,MM,CC,YY;

	DD=parseInt(date.slice(0,2));
	
	MM=parseInt(date.slice(3,5));

	CC=parseInt(date.slice(6,8));

	YY=parseInt(date.slice(8,10));



	var weekday = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;

    var male_gender = document.getElementById("form-check male").value;

    var female_gender = document.getElementById("form-check female").value;


	

	if(male.checked==true && weekday==1){alert(male[0]);} else if(male.checked==true &&weekday==2){alert(male[1]);}
	else if (male.checked==true &&weekday==3){alert(male[2]); } else if (male.checked==true &&weekday==4){alert(male[3]);}
	else if (male.checked==true&&weekday==5) {alert(male[4]);} else if (male.checked==true&&weekday==6) {alert(male[5]);}
	else if(male.checked==true&&weekday==7){alert(male[6]);} else if( female.checked==true && weekday==1){alert (female[0]);} else if(female.checked==true &&weekday==2){alert(female[1]);}
	else if (female.checked==true &&weekday==3){alert(female[2]); } else if (female.checked==true &&weekday==4) {alert(female[3]);}
	else if (female.checked==true&&weekday==5) {alert(female[4]);}else if (female==true&&weekday==6) {alert(female[5]);}
	else (female.checked==true&&weekday==7){alert(female[6]);};

}
