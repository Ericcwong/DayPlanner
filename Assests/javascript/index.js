$(document).ready(function(){
    displayCurrentDate();
    displayTime();
    currentTimeChecker();
});

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
    var times = [
        {time: "9 A.M.", value: "9"},
        {time: "10 A.M.", value: "10"},
        {time: "11 A.M.", value: "11"},
        {time: "12 P.M.", value: "12"},
        {time: "1 P.M.", value: "13"},
        {time: "2 P.M.", value: "14"},
        {time: "3 P.M.", value: "15"},
        {time: "4 P.M.", value: "16"},
        {time: "5 P.M.", value: "17"},
    ]
function displayTime(){

    for (var i=0; i<times.length; i++) {
        userText = ""
        $(".container").append(`
        <div class="row">
        <div class="hour col-sm-2">${times[i].time}</div>
        <textarea class ="col-sm-9" id="time" value="${times[i].value}">${userText}</textarea>
        <div class="saveBtn col-sm-1"><i class="far fa-save"></i></div>
        </div>`)
    }
}
function currentTimeChecker(){
    var textarea =  $(".col-sm-9");
    var currentHour = moment().format("H");
    var plannerTime = $("#time").val();
    for(var c = 0; c < textarea.length; c++){
        if(plannerTime > currentHour){
            $(textarea).addClass("past");
        }else if(currentHour == plannerTime){
            $(textarea).addClass("present");
        }
        else{
            $(textarea).addClass("future");
        }
        
        // $(textarea).addClass("past");
      
    }
    console.log(textarea.length)
    console.log(currentHour);
    console.log(plannerTime);
    console.log(time)
}


