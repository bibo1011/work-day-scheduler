// current date
var currentDay= moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);
console.log(currentDay);

// $("<textarea>").click(function() {

// });

$("button").on("click", function(){
    var event = document.querySelector("textarea");
    localStorage.setItem("event", event.value);
    console.log(event.value);
})

// $("<button>").on("click",function(){
//     $()
// })

// var events = {};
// var saveEvents = function() {
//     localStorage.setItem("events", JSON.stringify(events));
//     $("<button>").on("click", "p", function() {
//       var text = $(this)
//         .text()
//         .trim();
//       console.log(text);
//     })
// }

// // create an event
// var createTask = function(taskText, taskDate, taskList) {
//     // create elements that make up a task item
//     var taskLi = $("<li>").addClass("list-group-item");
//     var taskSpan = $("<span>")
//       .addClass("badge badge-primary badge-pill")
//       .text(taskDate);
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(taskText);

// $("time-block").on("blur", "textarea", function(){
//     // get textarea's current value/text
//     var text = $(this)
//       .val()
//       .trim();

//     // get the parent ul's id attribute
//     var status = $(this)
//       .closest(".list-group")
//       .attr("id")
//       .replace("list-", "");

//     // get the task's position in the list of other li elements
//     var index = $(this)
//       .closest(".list-group-item")
//       .index();
//     tasks[status][index].text = text;
//     saveTasks();

//     // recreate p element
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(text);

//     // replace textarea with p element
//     $(this).replaceWith(taskP);
//   });