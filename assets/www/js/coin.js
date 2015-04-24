$(function(){
	var operation = "A"; //"A"=Adding; "E"=Editing

	var selected_index = -1; //Index of the selected list item

	var coin = localStorage.getItem("coin");//Retrieve the stored data

	coin = JSON.parse(coin); //Converts string to object

	if(coin == null) //If there is no data, initialize an empty array
		coin = [];

	function Add(){
		var client = JSON.stringify({
			Description    : $("#description").val(),
			grade  : $("#grade").val(),
			denomination : $("#denomination").val(),
			metal : $("#metal").val(),
			diameter : $("#diameter").val(),
			weight : $("#weight").val(),
			mintage : $("#mintage").val(),
			comments : $("#comments").val()
		});
		coin.push(client);
		localStorage.setItem("coin", JSON.stringify(coin));
		alert("The data was saved.");
		return true;
	}

	function Edit(){
		coin[selected_index] = JSON.stringify({
			Description    : $("#description").val(),
			grade  : $("#grade").val(),
			denomination : $("#denomination").val(),
			metal : $("#metal").val(),
			diameter : $("#diameter").val(),
			weight : $("#weight").val(),
			mintage : $("#mintage").val(),
			comments : $("#comments").val()
			});//Alter the selected item on the table
		localStorage.setItem("coin", JSON.stringify(coin));
		alert("The data was edited.")
		operation = "A"; //Return to default value
		return true;
	}

	function Delete(){
		coin.splice(selected_index, 1);
		localStorage.setItem("coin", JSON.stringify(coin));
		alert("Data deleted.");
	}

	function List(){		
		$("#tblList").html("");
		$("#tblList").html(
			"<div>"+
			"</div>"
			);
		var count = coin.length;
		if (count==0) {
			for(var i in coin){
			var cli = JSON.parse(coin[i]);
			$("#tblList div").append(
		  		"<div class='row'>" +
			  		"<div class='col-xs-12 img_container'>" +
			  			"<img src='img/img.jpg'/>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>DESCRIPTION:</strong>" +
			  			"<p>" + cli.Description + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>GRADE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.grade + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>DENOMINATION:</strong>" +
			  			"<p style='text-align:center;'>" + cli.denomination + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>METAL:</strong>" +
			  			"<p style='text-align:center;'>" + cli.metal + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>DIAMETER:</strong>" +
			  			"<p style='text-align:center;'>" + cli.diameter + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>WEIGHT:</strong>" +
			  			"<p style='text-align:center;'>" + cli.weight + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>MINTAGE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.mintage + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>COMMENT:</strong>" +
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
			var cli = JSON.parse(coin[i]);
		  	$("#tblList div").append(
		  		"<div class='row'>" +
			  		"<div class='col-xs-12 img_container'>" +
			  			"<img src='img/img.jpg'/>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>DESCRIPTION:</strong>" +
			  			"<p>" + cli.Description + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-3'>" +
			  			"<strong style='text-align:center;'>GRADE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.grade + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong style='text-align:center;'>DENOMINATION:</strong>" +
			  			"<p style='text-align:center;'>" + cli.denomination + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-3'>" +
			  			"<strong style='text-align:center;'>METAL:</strong>" +
			  			"<p style='text-align:center;'>" + cli.metal + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>DIAMETER:</strong>" +
			  			"<p style='text-align:center;'>" + cli.diameter + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>WEIGHT:</strong>" +
			  			"<p style='text-align:center;'>" + cli.weight + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>MINTAGE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.mintage + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>COMMENT:</strong>" +
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
		var cli = JSON.parse(coin[selected_index]);
		$("#description").val(cli.Description);
		$("#grade").val(cli.grade);
		$("#denomination").val(cli.denomination);
		$("#metal").val(cli.metal);
		$("#diameter").val(cli.diameter);
		$("#weight").val(cli.weight);
		$("#mintage").val(cli.mintage);
		$("#comments").val(cli.comments);
		location.href = "#pageone?";
	});

	$(".btnDelete").bind("click", function(){
		selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
		Delete();
		location.href = "#pageone";
	});
});