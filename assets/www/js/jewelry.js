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
            comment : $("#comment_jewel").val(),
            image : $("#smallImage").val(),
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
