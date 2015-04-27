$(function(){
	var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for PhoneGap to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // PhoneGap is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
      location.href = "#pageone";
    }
    
    // Called when a photo is successfully retrieved
    //
    function onPhotoFileSuccess(imageData) {
      // Get image handle
      console.log(JSON.stringify(imageData));
      
      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = imageData;
      location.href = "#pageone";
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
      location.href = "#pageone";
    }



    // A button will call this function
    //
    function capturePhotoWithData() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }

    function capturePhotoWithFile() {
        navigator.camera.getPicture(onPhotoFileSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
    }
    
    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }
    
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
			"<div>"+
			"</div>"
			);
		var count = tbClients.length;
		if (count==0) {
			for(var i in tbClients){
			var cli = JSON.parse(tbClients[i]);
			$("#tblList div").append(
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>ITEM NUMBER:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-8'>" +
			  			"<p>" + cli.itemID + "</p>" +
			  		"</div>" +
			  	"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12 img_container'>" +
			  			"<img style='width:100%;height:150px;'' id='smallImage' src=''/>" +
			  		"</div>" +

		  		"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>DESCRIPTION:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-8'>" +
			  			"<p>" + cli.Description + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-2'>" +
			  			"<strong>KARAT:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-10'>" +
			  			"<p>" + cli.karat + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>KARAT WEIGHT:</strong>" +
			  			"<p style='text-align:center;'>" + cli.carat_weight + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>GRAM WEIGHT:</strong>" +
			  			"<p style='text-align:center;'>" + cli.gram_weight + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>COST:</strong>" +
			  			"<p style='text-align:center;'>" + cli.cost + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-3'>" +
			  			"<strong>SOURCE:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-9'>" +
			  			"<p>" + cli.Source + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>COMMENT:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-8'>" +
			  			"<p>" + cli.comment + "</p>" +
			  		"</div>" +
		  		"</div>");
			}
		}
		else{
			var i = count - 1;
			var cli = JSON.parse(tbClients[i]);
		  	$("#tblList div").append(
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>ITEM NUMBER:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-8'>" +
			  			"<p>" + cli.itemID + "</p>" +
			  		"</div>" +
			  	"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-12 img_container'>" +
			  			"<img style='width:100%;height:150px;'' id='smallImage' src=''/>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row' style='margin-top:10px;'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>DESCRIPTION:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-8'>" +
			  			"<p>" + cli.Description + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-2'>" +
			  			"<strong>KARAT:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-10'>" +
			  			"<p>" + cli.karat + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>KARAT WEIGHT:</strong>" +
			  			"<p style='text-align:center;'>" + cli.carat_weight + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>GRAM WEIGHT:</strong>" +
			  			"<p style='text-align:center;'>" + cli.gram_weight + "</p>" +
			  		"</div>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong style='text-align:center;'>COST:</strong>" +
			  			"<p style='text-align:center;'>" + cli.cost + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-3'>" +
			  			"<strong>SOURCE:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-9'>" +
			  			"<p>" + cli.Source + "</p>" +
			  		"</div>" +
		  		"</div>" +
		  		"<div class='row'>" +
			  		"<div class='col-xs-4'>" +
			  			"<strong>COMMENT:</strong>" +
			  		"</div>" +
			  		"<div class='col-xs-8'>" +
			  			"<p>" + cli.comment + "</p>" +
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
		location.href = "#pageone?";
	});

	$(".btnDelete").bind("click", function(){
		selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
		Delete();
		location.href = "#pageone";
	});
});