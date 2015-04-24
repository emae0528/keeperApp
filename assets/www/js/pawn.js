$(function(){
	var operation = "A"; //"A"=Adding; "E"=Editing

	var selected_index = -1; //Index of the selected list item

	var pawn = localStorage.getItem("pawn");//Retrieve the stored data

	pawn = JSON.parse(pawn); //Converts string to object

	if(pawn == null) //If there is no data, initialize an empty array
		pawn = [];

	function Add(){
		var client = JSON.stringify({
			ticketNum    : $("#ticketNum").val(),
			fname  : $("#fname").val(),
			lname : $("#lname").val(),
			address : $("#address").val(),
			phone : $("#phone").val(),
			date : $("#date").val(),
			Description : $("#description").val(),
			comments : $("#comments").val()
		});
		pawn.push(client);
		localStorage.setItem("pawn", JSON.stringify(pawn));
		alert("The data was saved.");
		return true;
	}

	function Edit(){
		pawn[selected_index] = JSON.stringify({
			ticketNum    : $("#ticketNum").val(),
			fname  : $("#fname").val(),
			lname : $("#lname").val(),
			address : $("#address").val(),
			phone : $("#phone").val(),
			date : $("#date").val(),
			Description : $("#description").val(),
			comments : $("#comments").val()
			});//Alter the selected item on the table
		localStorage.setItem("pawn", JSON.stringify(pawn));
		alert("The data was edited.")
		operation = "A"; //Return to default value
		return true;
	}

	function Delete(){
		pawn.splice(selected_index, 1);
		localStorage.setItem("pawn", JSON.stringify(pawn));
		alert("Data deleted.");
	}

	function List(){		
		$("#tblList").html("");
		$("#tblList").html(
			"<div>"+
			"</div>"
			);
		var count = pawn.length;
		if (count==0) {
			for(var i in pawn){
			var cli = JSON.parse(pawn[i]);
			$("#tblList div").append(
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<img src='img/pawn.png'/>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>ITEM #: " + cli.ticketNum + "</strong>" +
			  		"</div>" +
			  	"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12 img_container'>" +
			  			"<img src='img/img.jpg'/>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>FIRST NAME:</strong>" +
			  			"<p>" + cli.fname + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>LAST NAME:</strong>" +
			  			"<p>" + cli.lname + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>ADDRESS:</strong>" +
			  			"<p>" + cli.address + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong style='text-align:center;'>PHONE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.phone + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong style='text-align:center;'>DATE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.date + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>DESCRIPTION:</strong>" +
			  			"<p>" + cli.Description + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>COMMENTS:</strong>" +
			  			"<p>" + cli.comments + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
		  			"<div class='col-xs-3 button_back'>" +
		  			"<img src='img/back.png' data-rel='back' class='btnBack'/>" +
		  			"</div>" +
		  			"<div class='col-xs-5 button_back' style='text-align:right;'>" +
		  			"<img src='img/deleteItem.png' alt='Delete"+i+"' class='btnDelete'/>" +
		  			"</div>" +
		  			"<div class='col-xs-3 button_back edit' style='text-align:right;'>" +
		  			"<img src='img/edit.png' alt='Edit"+i+"' class='btnEdit'/>" +
		  			"</div>" +
		  		"</div>"
		  		);
			}
		}
		else{
			var i = count - 1;
			var cli = JSON.parse(pawn[i]);
		  	$("#tblList div").append(
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<img src='img/pawn.png'/>" +
			  		"</div>" +
			  		"<div class='col-xs-8 ticketNum'>" +
			  			"<strong>ITEM #: " + cli.ticketNum + "</strong>" +
			  			
			  		"</div>" +
			  	"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12 img_container'>" +
			  			"<img src='img/img.jpg'/>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>FIRST NAME:</strong>" +
			  			"<p>" + cli.fname + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>LAST NAME:</strong>" +
			  			"<p>" + cli.lname + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>ADDRESS:</strong>" +
			  			"<p>" + cli.address + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong style='text-align:center;'>PHONE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.phone + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong style='text-align:center;'>DATE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.date + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>DESCRIPTION:</strong>" +
			  			"<p>" + cli.Description + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>COMMENTS:</strong>" +
			  			"<p>" + cli.comments + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
		  			"<div class='col-xs-3 button_back'>" +
		  			"<img src='img/back.png' data-rel='back' class='btnBack'/>" +
		  			"</div>" +
		  			"<div class='col-xs-5 button_back' style='text-align:right;'>" +
		  			"<img src='img/deleteItem.png' alt='Delete"+i+"' class='btnDelete'/>" +
		  			"</div>" +
		  			"<div class='col-xs-3 button_back edit' style='text-align:right;'>" +
		  			"<img src='img/edit.png' alt='Edit"+i+"' class='btnEdit'/>" +
		  			"</div>" +
		  		"</div>"
		  		);  	
		}
	}

	$("#frmCadastre").bind("submit",function(){		
		if(operation == "A")
			return Add();
		else
			return Edit();
	});

	List();

	$(".btnEdit").bind("click", function(){
		operation = "E";
		selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
		var cli = JSON.parse(pawn[selected_index]);
		$("#ticketNum").val(cli.ticketNum);
		$("#fname").val(cli.fname);
		$("#lname").val(cli.lname);
		$("#address").val(cli.address);
		$("#phone").val(cli.phone);
		$("#date").val(cli.date);
		$("#description").val(cli.Description);
		$("#comments").val(cli.comments);
		location.href = "#pageone?";
	});

	$(".btnDelete").bind("click", function(){
		selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
		Delete();
		location.href = "#pageone";
	});
});