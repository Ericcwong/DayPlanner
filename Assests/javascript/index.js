$(document).ready(function(){
    displayCurrentDate();
    displayTime();
});

function displayCurrentDate(){
    /*This displays the date in the jumbotron*/
    var today = new Date();
    var dd = String(today.getDate())
    var mm = String(today.getMonth() + 1)
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    currentTime = moment().format('h:mm:ss a');
    $("#currentDay").html(today);
    $("#currentTime").html(currentTime);
    return currentTime;
    }
function displayTime(){
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
    for (var i=0; i<times.length; i++) {
        userText = ""
        $(".container").append(`
        <div class="row">
        <div class="hour col-sm-2">${times[i].time}</div>
        <textarea class ="col-sm-9" id="${i}" data-value="${times[i].value}">${userText}</textarea>
        <div class="saveBtn col-sm-1"><i class="far fa-save"></i></div>
        </div>`)
    }
}
function currentTimeChecker(){
    var currentHour = moment().format("hour");
    console.log(currentHour);
}

