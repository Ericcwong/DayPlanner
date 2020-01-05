$(document).ready(function(){
    displayCurrentDate();
    currentTimeChecker();
    
    
});
var textarea = $("textarea");
function displayCurrentDate(){
    /*This displays the date in the jumbotron*/
    var today = new Date();
    var dd = String(today.getDate())
    var mm = String(today.getMonth() + 1)
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    currentTime = moment().format('h:mm a');
    $("#currentDay").html(today);
    $("#currentTime").html(currentTime);
}    

function currentTimeChecker(){
    var currentHour = moment().hour();
    var textarea =  $("textarea");
    
    for(var c = 0; c < textarea.length; c++){
        var plannerTime = textarea[c].dataset.hour;
        if(currentHour > plannerTime){
            $(textarea[c]).addClass("past");
        }else if(currentHour == plannerTime){
            $(textarea[c]).addClass("present");
        }
        else{
            $(textarea[c]).addClass("future");

        }
    }
}
$(".saveBtn").on("click", function(event){
    var userInputsValue = $(this).siblings("textarea").val();
    var dataHour = $(this).siblings("textarea").attr("data-hour");
    localStorage.setItem(dataHour, userInputsValue);
});
function pullLocalStorage(){
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $( "#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
}
pullLocalStorage();

$("#clearSchedule").on("click",function(){
    localStorage.clear();
    location.reload();
});