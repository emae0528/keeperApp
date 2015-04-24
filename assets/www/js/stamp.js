$(function(){
	var operation = "A"; //"A"=Adding; "E"=Editing

	var selected_index = -1; //Index of the selected list item

	var stamp = localStorage.getItem("stamp");//Retrieve the stored data

	stamp = JSON.parse(stamp); //Converts string to object

	if(stamp == null) //If there is no data, initialize an empty array
		stamp = [];

	function Add(){
		var client = JSON.stringify({
			scott    : $("#scott").val(),
			issue  : $("#issue").val(),
			Color : $("#color").val(),
			grade : $("#grade").val(),
			country : $("#country").val(),
			denomination : $("#denomination").val(),
			pse : $("#pse").val(),
			comments : $("#comments").val()
		});
		stamp.push(client);
		localStorage.setItem("stamp", JSON.stringify(stamp));
		alert("The data was saved.");
		return true;
	}

	function Edit(){
		stamp[selected_index] = JSON.stringify({
			scott    : $("#scott").val(),
			issue  : $("#issue").val(),
			Color : $("#color").val(),
			grade : $("#grade").val(),
			country : $("#country").val(),
			denomination : $("#denomination").val(),
			pse : $("#pse").val(),
			comments : $("#comments").val()
			});//Alter the selected item on the table
		localStorage.setItem("stamp", JSON.stringify(stamp));
		alert("The data was edited.")
		operation = "A"; //Return to default value
		return true;
	}

	function Delete(){
		stamp.splice(selected_index, 1);
		localStorage.setItem("stamp", JSON.stringify(stamp));
		alert("Data deleted.");
	}

	function List(){		
		$("#tblList").html("");
		$("#tblList").html(
			"<div>"+
			"</div>"
			);
		var count = stamp.length;
		if (count==0) {
			for(var i in stamp){
			var cli = JSON.parse(stamp[i]);
			$("#tblList div").append(
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<img src='img/stamp.png'/>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>SCOTT #: " + cli.scott + "</strong>" +
			  		"</div>" +
			  	"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12 img_container'>" +
			  			"<img src='img/img.jpg'/>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>ISSUE:</strong>" +
			  			"<p>" + cli.issue + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>COLOR:</strong>" +
			  			"<p>" + cli.Color + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>GRADE:</strong>" +
			  			"<p>" + cli.grade + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>COUNTRY:</strong>" +
			  			"<p>" + cli.country + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong style='text-align:center;'>DENOMINATION:</strong>" +
			  			"<p style='text-align:center;'>" + cli.denomination + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>PSE CERTIFICATE #:</strong>" +
			  			"<p>" + cli.pse + "</p>" +
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
			var cli = JSON.parse(stamp[i]);
		  	$("#tblList div").append(
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<img src='img/stamp.png'/>" +
			  		"</div>" +
			  		"<div class='col-xs-8 ticketNum'>" +
			  			"<strong>SCOTT #: " + cli.scott + "</strong>" +
			  		"</div>" +
			  	"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12 img_container'>" +
			  			"<img src='img/img.jpg'/>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>ISSUE:</strong>" +
			  			"<p>" + cli.issue + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>COLOR:</strong>" +
			  			"<p>" + cli.Color + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>GRADE:</strong>" +
			  			"<p>" + cli.grade + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>COUNTRY:</strong>" +
			  			"<p>" + cli.country + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong style='text-align:center;'>DENOMINATION:</strong>" +
			  			"<p>" + cli.denomination + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>PSE CERTIFICATE #:</strong>" +
			  			"<p>" + cli.pse + "</p>" +
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
		var cli = JSON.parse(stamp[selected_index]);
		$("#scott").val(cli.scott);
		$("#color").val(cli.Color);
		$("#grade").val(cli.grade);
		$("#country").val(cli.country);
		$("#denomination").val(cli.denomination);
		$("#pse").val(cli.pse);
		$("#comments").val(cli.comments);
		location.href = "#pageone?";
	});

	$(".btnDelete").bind("click", function(){
		selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
		Delete();
		location.href = "#pageone";
	});
});