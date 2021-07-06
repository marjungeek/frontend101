$(document).ready(function ()
{
	$.get('https://api.first.org/data/v1/teams', function (data, status)
	{
		var teams = data.data; //result from api
		var options = '';
		options += '<option value="Select">Select</option>';

		for (var i = 0; i < teams.length; i++)
		{
			options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; //construct list of dropdown based from api response
		}



		$('#teamList').append(options); //append option with value to dom (dropdown)

	});
});

//method for submit button
function HuMethod()
{

	var FN = document.getElementById("huFN").value;
	var LN = document.getElementById("huLN").value;

	var email = document.getElementById("email").value;
	var teamList = document.getElementById("teamList").value;
	var psw = document.getElementById("psw").value;
	var pswrepeat = document.getElementById("pswrepeat").value;

	if (FN.length <= 0)
	{
		alert("missing First name for validation! please input!")
		// document.getElementById('huFN').style.borderColor = "red";
	}

	if (LN.length <= 0)
	{
		alert("missing Last name for validation! please input!")
		// document.getElementById('huLN').style.borderColor = "red";
	}

	if (email.length <= 0)
	{
		alert("missing email for validation! please input!")
		// document.getElementById('email').style.borderColor = "red";
	}

	if (psw.length <= 0)
	{
		alert("Input your password!")
		// document.getElementById('psw').style.borderColor = "red";
	}

	if (pswrepeat.length <= 0)
	{


		alert("Input your password!")
		// document.getElementById('pswrepeat').style.borderColor = "red";



	}


	if (psw != pswrepeat)
	{
		alert("Passwords do not match.")
		// document.getElementById('psw').style.borderColor = "red";
		// document.getElementById('pswrepeat').style.borderColor = "red";
		return false;
	}



	if (psw == pswrepeat &&
		FN.length > 0 &&
		LN.length > 0 &&
		email.length > 0)
	{

		alert("Firstname: " + FN + "\n" + "Lastname: " + LN + "\n" + "Email: " + email + "\n" + "Team: " + teamList + "\n" + "Pasword: " + psw + "\n")

		localStorage.setItem("FNStorage", FN);
		localStorage.setItem("LNStorage", LN);
		localStorage.setItem("emailStorage", email);
		localStorage.setItem("teamlistStorage", teamList);
		localStorage.setItem("pswStorage", psw);
		localStorage.setItem("pswrepeatStorage", pswrepeat);

		console.log(localStorage.getItem("FNStorage"));
		console.log(localStorage.getItem("LNStorage"));
		console.log(localStorage.getItem("emailStorage"));
		console.log(localStorage.getItem("teamlistStorage"));
		console.log(localStorage.getItem("pswStorage"));
		console.log(localStorage.getItem("pswrepeatStorage"));
	}


} // end of button scope



function clearmethod()
{
	document.getElementById("huFN", "huLN", "email", "teamList", "psw", "pswrepeat").value = "";


}

function normalBorderMethod()
{

	document.getElementById('huFN').style.borderColor = "";
	document.getElementById('huLN').style.borderColor = "";
	document.getElementById('email').style.borderColor = "";
	document.getElementById('psw').style.borderColor = "";
	document.getElementById('pswrepeat').style.borderColor = "";

}