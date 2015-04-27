$(function(){
	var operation = "A"; //"A"=Adding; "E"=Editing

	var selected_index = -1; //Index of the selected list item

	var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data

	tbClients = JSON.parse(tbClients); //Converts string to object

	if(tbClients == null) //If there is no data, initialize an empty array
		tbClients = [];

	function Add(){
		var client = JSON.stringify({
			itemID    : $("#item_num").val(),
			karat  : $("#karat").val(),
			Description : $("#descrip_jewelry").val(),
			carat_weight : $("#carat_weight").val(),
			gram_weight : $("#gram_weight").val(),
			cost : $("#cost").val(),
			Source : $("#source_jewel").val(),
			comment : $("#comment_jewel").val()
		});
		tbClients.push(client);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("The data was saved.");
		return true;
	}

	function Edit(){
		tbClients[selected_index] = JSON.stringify({
			itemID    : $("#item_num").val(),
			karat  : $("#karat").val(),
			Description : $("#descrip_jewelry").val(),
			carat_weight : $("#carat_weight").val(),
			gram_weight : $("#gram_weight").val(),
			cost : $("#cost").val(),
			Source : $("#source_jewel").val(),
			comment : $("#comment_jewel").val()
			});//Alter the selected item on the table
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("The data was edited.")
		operation = "A"; //Return to default value
		return true;
	}

	function Delete(){
		tbClients.splice(selected_index, 1);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("Data deleted.");
	}

	function List(){		
		$("#tblList").html("");
		$("#tblList").html(
			"<thead>"+
			"	<tr>"+
			"	<th>ACTION</th>"+
			"	<th></th>" +

			"	<th>ITEM #</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);
		var count = tbClients.length;
		
			for(var i in tbClients){
			var cli = JSON.parse(tbClients[i]);
			$("#tblList tbody").append("<tr>"+
									 	 "	<td><img src='img/edit.png' alt='Edit"+i+"' class='btnEdit'/><img src='img/deleteItem.png' alt='Delete"+i+"' class='btnDelete'/></td>" + 
										 "	<td></td>" +
										 "	<td></td>" +
										  "	<td></td>" +
										 "	<td>"+cli.itemID+"</td>" + 
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
		selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
		var cli = JSON.parse(tbClients[selected_index]);
		$("#item_num").val(cli.itemID);
		$("#karat").val(cli.karat);
		$("#descrip_jewelry").val(cli.Description);
		$("#carat_weight").val(cli.carat_weight);
		$("#gram_weight").val(cli.gram_weight);
		$("#cost").val(cli.cost);
		$("#source_jewel").val(cli.Source);
		$("#comment_jewel").val(cli.comment);
		location.href = "jewelry_form.html#pageone?";
	});

	$(".btnDelete").bind("click", function(){
		selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
		Delete();
		location.href = "browse_jewelry.html";
	});
});