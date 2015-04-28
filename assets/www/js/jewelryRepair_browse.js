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
			"<thead>"+
			"	<tr>"+
			"	<th>ACTION</th>"+
			"	<th></th>" +
			"	<th class='item'>REPAIR NUMBER</th>"+
			"	<th class='item'>FIRST NAME</th>"+
			"	<th class='item'>LAST NAME</th>"+

			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);
		var count = jewelryRepair.length;
		
			for(var i in jewelryRepair){
			var cli = JSON.parse(jewelryRepair[i]);
			$("#tblList tbody").append("<tr>"+
									 	 "	<td><img src='img/view.png' alt='Edit"+i+"' class='btnEdit'/></td>" + 
										 "	<td></td>" +
										 "	<td>"+cli.repairNum+"</td>" + 
										 "	<td>"+cli.fname+"</td>" + 
										 "	<td>"+cli.lname+"</td>" + 
		  								 "</tr>");
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
		location.href = "browse_jewelryRepair.html#form?";
	});

	$(".btnDelete").bind("click", function(){
		selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
		Delete();
		location.href = "#pageone";
	});
});