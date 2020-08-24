// current date
var currentDay= moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);
console.log(currentDay);

let currentHour = parseInt(moment().format('HH'));
console.log(currentHour);
   
function color(){
    var hour = document.getElementsByClassName("hour")
    if (currentHour > 9){
        $("textarea").addClass("future");
        console.log(hour);
    } else if 
        (currentHour < 9){
        $("textarea").addClass("past");
        console.log(hour);
    } else 
        (currentHour === 9)
        $("textarea").addClass("present");
        console.log(hour);
       
    if (currentHour > 10){
        $("textarea").addClass("future");
        console.log(hour);
    } else if 
        (currentHour < 10){
        $("textarea").addClass("past");
        console.log(hour);
    } else 
        (currentHour === 10)
        $("textarea").addClass("present");
        console.log(hour);

    if (currentHour > 11){
        $("textarea").addClass("future");
        console.log(hour);
    } else if 
        (currentHour < 11){
        $("textarea").addClass("past");
        console.log(hour);
    } else 
        (currentHour === 11)
        $("textarea").addClass("present");
        console.log(hour);

    if (currentHour > 12){
        $("textarea").addClass("future");
        console.log(hour);
    } else if 
        (currentHour < 12){
        $("textarea").addClass("past");
        console.log(hour);
    } else 
        (currentHour === 12)
        $("textarea").addClass("present");
        console.log(hour);

    if (currentHour > 1){
        $("textarea").addClass("future");
        console.log(hour);
    } else if 
        (currentHour < 1){
        $("textarea").addClass("past");
        console.log(hour);
    } else 
        (currentHour === 1)
        $("textarea").addClass("present");
        console.log(hour);

    if (currentHour > 2){
        $("textarea").addClass("future");
        console.log(hour);
    } else if 
        (currentHour < 2){
        $("textarea").addClass("past");
        console.log(hour);
    } else 
        (currentHour === 2)
        $("textarea").addClass("present");
        console.log(hour);
        
    if (currentHour > 3){
        $("textarea").addClass("future");
        console.log(hour);
    } else if 
        (currentHour < 3){
        $("textarea").addClass("past");
        console.log(hour);
    } else 
        (currentHour === 3)
        $("textarea").addClass("present");
        console.log(hour);

    if (currentHour > 4){
        $("textarea").addClass("future");
        console.log(hour);
    } else if 
        (currentHour < 4){
        $("textarea").addClass("past");
        console.log(hour);
    } else 
        (currentHour === 4)
        $("textarea").addClass("present");
        console.log(hour);

    if (currentHour > 5){
        $("textarea").addClass("future");
        console.log(hour);
    } else if 
        (currentHour < 5){
        $("textarea").addClass("past");
        console.log(hour);
    } else 
        (currentHour === 5)
        $("textarea").addClass("present");
        console.log(hour);
}


loadEvents = function() {
    localStorage.getItem("event9am");
}

// adding event 
$("#btn9").on("click", function(){
    var event9 = document.getElementById("9am");
    localStorage.setItem("event9am", event9.value);
    console.log(event9.value);
})


$("#btn10").on("click", function(){ 
    var event10 = document.getElementById("10am");
    localStorage.setItem("event10am", event10.value);
    console.log(event10.value);
})    
$("#btn11").on("click", function(){    
    var event11 = document.getElementById("11am");
    localStorage.setItem("event11am", event11.value);
    console.log(event11.value);  
})
$("#btn12").on("click", function(){    
    var event12 = document.getElementById("12am");
    localStorage.setItem("event12am", event12.value);
    console.log(event12.value);
})
$("#btn1").on("click", function(){    
    var event1 = document.getElementById("1pm");
    localStorage.setItem("event1pm", event1.value);
    console.log(event1.value);  
})
$("#btn2").on("click", function(){    
    var event2 = document.getElementById("2pm");
    localStorage.setItem("event2pm", event2.value);
    console.log(event2.value);  
})
$("#btn3").on("click", function(){    
    var event3 = document.getElementById("3pm");
    localStorage.setItem("event3pm", event3.value);
    console.log(event3.value);  
})
$("#btn4").on("click", function(){    
    var event4 = document.getElementById("4pm");
    localStorage.setItem("event4pm", event4.value);
    console.log(event4.value);  
})
$("#btn5").on("click", function(){    
    var event5 = document.getElementById("5pm");
    localStorage.setItem("event5pm", event5.value);
    console.log(event5.value);  
})

color();

loadEvents();






