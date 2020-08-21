// current date
var currentDay = document.getElementById("#currentDay")
currentDay= moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);
console.log(currentDay);
