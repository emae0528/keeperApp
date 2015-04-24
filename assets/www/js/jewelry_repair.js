$(function(){
	var operation = "A"; //"A"=Adding; "E"=Editing

	var selected_index = -1; //Index of the selected list item

	var jewelryRepair = localStorage.getItem("jewelryRepair");//Retrieve the stored data

	jewelryRepair = JSON.parse(jewelryRepair); //Converts string to object

	 if(jewelryRepair == null) //If there is no data, initialize an empty array
	 	jewelryRepair = [];

	function Add(){
		var client = JSON.stringify({
			repairNum : $("#repairNum").val(),
			fname    : $("#fname").val(),
			lname  : $("#lname").val(),
			address : $("#address").val(),
			phone : $("#phone").val(),
			email : $("#email").val(),
			instruc : $("#instruc").val(),
			cost : $("#cost").val(),
			date : $("#date").val(),
			customer_value : $("#customer_value").val(),
			comments : $("#comments").val()
		});
			jewelryRepair.push(client);
			localStorage.setItem("jewelryRepair", JSON.stringify(jewelryRepair));
			alert("The data was saved.");
			return true;
	}
		
	function Edit(){
		jewelryRepair[selected_index] = JSON.stringify({
			repairNum : $("#repairNum").val(),
			fname    : $("#fname").val(),
			lname  : $("#lname").val(),
			address : $("#address").val(),
			phone : $("#phone").val(),
			email : $("#email").val(),
			instruc : $("#instruc").val(),
			cost : $("#cost").val(),
			date : $("#date").val(),
			customer_value : $("#customer_value").val(),
			comments : $("#comments").val()
			});//Alter the selected item on the table
		localStorage.setItem("jewelryRepair", JSON.stringify(jewelryRepair));
		alert("The data was edited.")
		operation = "A"; //Return to default value
		return true;
	}

	function Delete(){
		jewelryRepair.splice(selected_index, 1);
		localStorage.setItem("jewelryRepair", JSON.stringify(jewelryRepair));
		alert("Data deleted.");
	}

	function List(){		
		$("#tblList").html("");
		$("#tblList").html(
			"<div>"+
			"</div>"
			);
		var count = jewelryRepair.length;
		if (count==0) {
			for(var i in jewelryRepair){
			var cli = JSON.parse(jewelryRepair[i]);
			$("#tblList div").append(
				"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<img src='img/jewelryRepair.png'/>" +
			  		"</div>" +
			  		"<div class='col-xs-8'>" +
			  			"<strong>REPAIR NUMBER:</strong>" +
			  			"<p>" + cli.repairNum + "</p>" +
			  		"</div>" +
		  		"</div>" +
				"<div class='row'>" +
			  		"<div class='col-xs-6 img_container'>" +
			  			"<img src='img/img.jpg'/>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>FIRST NAME:</strong>" +
			  			"<p>" + cli.fname + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>LAST NAME:</strong>" +
			  			"<p>" + cli.lname + "</p>" +
			  		"</div>" +
			  	"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>ADDRESS:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-8'>" +
			  			"<p>" + cli.address + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>PHONE:</strong>" +
			  			"<p>" + cli.phone + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-10'>" +
			  			"<strong>EMAIL:</strong>" +
			  			"<p>" + cli.email + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>INSTRUCTIONS:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-8'>" +
			  			"<p>" + cli.instruc + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<div class='row'>" +
			  				"<div class='col-xs-12'>" +
			  					"<strong>COST:</strong>" +
			  					"<p>" + cli.cost + "</p>" +
			  				"</div>" +
			  				"<div class='col-xs-12'>" +
			  					"<strong>DATE PROMISED:</strong>" +
			  					"<p>" + cli.date + "</p>" +
			  				"</div>" +
			  				"<div class='col-xs-12'>" +
			  					"<strong>CUSTOMER VALUE:</strong>" +
			  					"<p>" + cli.customer_value + "</p>" +
			  				"</div>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>COMMENTS:</strong>" +
			  			"<p>" + cli.comments + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
		  			"<div class='col-xs-3 button_back'>" +
		  				"<img src='img/back.png' class='btnBack'/>" +
		  			"</div>" +
		  			"<div class='col-xs-5 button_back' style='text-align:right;'>" +
		  				"<img src='img/deleteItem.png' alt='Delete"+i+"' class='btnDelete'/>" +
		  			"</div>" +
		  			"<div class='col-xs-3 button_back edit' style='text-align:right;'>" +
		  				"<img src='img/edit.png' alt='Edit"+i+"' class='btnEdit'/>" +
		  			"</div>" +
		  		"</div>");
			}
		}
		else{
			var i = count - 1;
			var cli = JSON.parse(jewelryRepair[i]);
		  	$("#tblList div").append(
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<img src='img/jewelryRepair.png'/>" +
			  		"</div>" +
			  		"<div class='col-xs-8'>" +
			  			"<strong>REPAIR NUMBER:</strong>" +
			  			"<p>" + cli.repairNum + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12 img_container'>" +
			  			"<img src='img/img.jpg'/>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>FIRST NAME:</strong>" +
			  			"<p>" + cli.fname + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>LAST NAME:</strong>" +
			  			"<p>" + cli.lname + "</p>" +
			  		"</div>" +
			  	"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>ADDRESS:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-8'>" +
			  			"<p>" + cli.address + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>PHONE:</strong>" +
			  			"<p>" + cli.phone + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-10'>" +
			  			"<strong>EMAIL:</strong>" +
			  			"<p>" + cli.email + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-5'>" +
			  			"<strong>INSTRUCTIONS:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-7'>" +
			  			"<p>" + cli.instruc + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<div class='row'>" +
			  				"<div class='col-xs-12'>" +
			  					"<strong>COST:</strong>" +
			  					"<p>" + cli.cost + "</p>" +
			  				"</div>" +
			  				"<div class='col-xs-12'>" +
			  					"<strong>DATE PROMISED:</strong>" +
			  					"<p>" + cli.date + "</p>" +
			  				"</div>" +
			  				"<div class='col-xs-6'>" +
			  					"<strong>CUSTOMER VALUE:</strong>" +
			  					"<p>" + cli.customer_value + "</p>" +
			  				"</div>" +
			  			"</div>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>COMMENTS:</strong>" +
			  			"<p>" + cli.comments + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
		  			"<div class='col-xs-3 button_back'>" +
		  				"<img src='img/back.png' class='btnBack'/>" +
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
		selected_index = parseInt($(this).attr("alt").replace("Edit ITEM", ""));
		var cli = JSON.parse(jewelryRepair[selected_index]);
		$("#repairNum").val(cli.repairNum);
		$("#fname").val(cli.fname);
		$("#lname").val(cli.lname);
		$("#address").val(cli.address);
		$("#phone").val(cli.phone);
		$("#email").val(cli.email);
		$("#instruc").val(cli.instruc);
		$("#cost").val(cli.cost);
		$("#date").val(cli.date);
		$("#customer_value").val(cli.customer_value);
		$("#comments").val(cli.comments);
		location.href = "#pageone?";
	});

	$(".btnDelete").bind("click", function(){
		selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
		Delete();
		location.href = "#pageone";
	});
});