var diary;
var mainView;

document.addEventListener('deviceready', deviceready, false);

$(document).on("pageload", "#addPage", function(e) {

    function onCamSuccess(imgdata) {
        console.log(imgdata);
        $("#entryPicture").val(imgdata);
        $("#imgPreview").attr("src", imgdata);
    }
    
    function onCamFail(e) {
        console.log('camFail');console.dir(e);
        navigator.notification.alert("Sorry, something went wrong.", null, "Oops!");
    }
    
    $("#takePicture").on("touchstart", function(e) {
        e.preventDefault();
        
        navigator.camera.getPicture(onCamSuccess, onCamFail, {quality:50, destinationType:Camera.DestinationType.FILE_URI});
    });
    
    $("#addEntrySubmit").on("touchstart", function(e) {
        e.preventDefault();
        //grab the values
        var title = $("#entryTitle").val();
        var body = $("#entryBody").val();
        var img = $("#entryPicture").val();
        //store!
        diary.saveEntry({title:title,body:body,image:img}, function() {
            pageLoad("main.html");
        });
        
    });
});


function dtFormat(input) {
    if(!input) return "";
    input = new Date(input);
    var res = (input.getMonth()+1) + "/" + input.getDate() + "/" + input.getFullYear() + " ";
    var hour = input.getHours()+1;
    var ampm = "AM";
    if(hour === 12) ampm = "PM";
    if(hour > 12){
        hour-=12;
        ampm = "PM";
    }
    var minute = input.getMinutes()+1;
    if(minute < 10) minute = "0" + minute;
    res += hour + ":" + minute + " " + ampm;
    return res;
}
