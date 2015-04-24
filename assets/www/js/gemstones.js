$(function(){
	var operation = "A"; //"A"=Adding; "E"=Editing

	var selected_index = -1; //Index of the selected list item

	var gemStones = localStorage.getItem("gemStones");//Retrieve the stored data

	gemStones = JSON.parse(gemStones); //Converts string to object

	if(gemStones == null) //If there is no data, initialize an empty array
		gemStones = [];

	function Add(){
		var client = JSON.stringify({
			itemNum    : $("#itemNum").val(),
			Shape  : $("#shape").val(),
			measurements : $("#measurements").val(),
			carat_w : $("#carat_w").val(),
			color_grade : $("#color_grade").val(),
			clarity : $("#clarity").val(),
			cut_grade : $("#cut_grade").val(),
			cost : $("#cost").val(),
			comments : $("#comments").val()
		});
		gemStones.push(client);
		localStorage.setItem("gemStones", JSON.stringify(gemStones));
		alert("The data was saved.");
		return true;
	}

	function Edit(){
		gemStones[selected_index] = JSON.stringify({
			itemNum    : $("#itemNum").val(),
			Shape  : $("#shape").val(),
			measurements : $("#measurements").val(),
			carat_w : $("#carat_w").val(),
			color_grade : $("#color_grade").val(),
			clarity : $("#clarity").val(),
			cut_grade : $("#cut_grade").val(),
			cost : $("#cost").val(),
			comments : $("#comments").val()
			});//Alter the selected item on the table
		localStorage.setItem("gemStones", JSON.stringify(gemStones));
		alert("The data was edited.")
		operation = "A"; //Return to default value
		return true;
	}

	function Delete(){
		gemStones.splice(selected_index, 1);
		localStorage.setItem("gemStones", JSON.stringify(gemStones));
		alert("Data deleted.");
	}

	function List(){		
		$("#tblList").html("");
		$("#tblList").html(
			"<div>"+
			"</div>"
			);
		var count = gemStones.length;
		if (count==0) {
			for(var i in gemStones){
			var cli = JSON.parse(gemStones[i]);
			$("#tblList div").append(
		  		"<div class='row'>" +
			  		"<div class='col-xs-3'>" +
			  			"<img src='img/diamonds.png'/>" +
			  		"</div>" +
			  		"<div class='col-xs-9'>" +
			  			"<strong>ITEM #: " + cli.itemNum + "</strong>" +
			  			
			  		"</div>" +
			  	"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12 img_container'>" +
			  			"<img src='img/img.jpg'/>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>SHAPE/CUTTING STYLE:</strong>" +
			  			"<p>" + cli.Shape + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-2'>" +
			  			"<strong>MEASUREMENTS:</strong>" +
			  			"<p>" + cli.measurements + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>CARAT WEIGHT:</strong>" +
			  			"<p style='text-align:center;'>" + cli.carat_w + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>COLOR GRADE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.color_grade + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>CLARITY GRADE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.clarity + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>CUT GRADE:</strong>" +
			  			"<p>" + cli.cut_grade + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>COST:</strong>" +
			  			"<p>" + cli.cost + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
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
			var cli = JSON.parse(gemStones[i]);
		  	$("#tblList div").append(
		  		"<div class='row'>" +
			  		"<div class='col-xs-3'>" +
			  			"<img src='img/diamonds.png'/>" +
			  		"</div>" +
			  		"<div class='col-xs-9 itemNum_gem'>" +
			  			"<strong>ITEM #: "+ cli.itemNum +"</strong>" +
			  			
			  		"</div>" +
			  	"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12 img_container'>" +
			  			"<img src='img/img.jpg'/>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-12'>" +
			  			"<strong>SHAPE/CUTTING STYLE:</strong>" +
			  			"<p>" + cli.Shape + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-2'>" +
			  			"<strong>MEASUREMENTS:</strong>" +
			  			"<p>" + cli.measurements + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>CARAT WEIGHT:</strong>" +
			  			"<p style='text-align:center;'>" + cli.carat_w + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>COLOR GRADE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.color_grade + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>CLARITY GRADE:</strong>" +
			  			"<p style='text-align:center;'>" + cli.clarity + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>CUT GRADE:</strong>" +
			  			"<p>" + cli.cut_grade + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-6'>" +
			  			"<strong>COST:</strong>" +
			  			"<p>" + cli.cost + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>COMMENT:</strong>" +
			  			"<p>" + cli.comments + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
		  			"<div class='col-xs-3 button_back'>" +
		  			"<a href='#' data-rel='back'><img src='img/back.png' data-rel='back' class='btnBack'/></a>" +
		  			
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
		var cli = JSON.parse(gemStones[selected_index]);
		$("#itemNum").val(cli.itemNum);
		$("#shape").val(cli.Shape);
		$("#measurements").val(cli.measurements);
		$("#carat_w").val(cli.carat_w);
		$("#color_grade").val(cli.color_grade);
		$("#clarity").val(cli.clarity);
		$("#cut_grade").val(cli.cut_grade);
		$("#cost").val(cli.cost);
		$("#comments").val(cli.comments);
		location.href = "#pageone?";
	});

	$(".btnDelete").bind("click", function(){
		selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
		Delete();
		location.href = "#pageone";
	});
});