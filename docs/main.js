document.getElementById("input-box").addEventListener("click", function(event) {
  event.preventDefault();
});

function myFunction() {
  var hiway_mpg = document.getElementById("field1").value;
  var hiway_rpm = document.getElementById("field2").value;
  var idle_rpm = document.getElementById("field3").value;
  var fuel_cost = document.getElementById("field4").value;
  var mph = 70;

  var gph = mph / hiway_mpg;
  var hiway_load = (gph / hiway_rpm) / .5;
  var full_load_idle = hiway_load * idle_rpm;
  var part_load_idle = full_load_idle * .27;
  var cost_per_hour = fuel_cost * part_load_idle;

  part_load_idle = part_load_idle.toFixed(2);
  cost_per_hour = cost_per_hour.toFixed(2);

  // console.log(gph);
  // console.log(hiway_load);
  // console.log(full_load_idle);
  // console.log(part_load_idle);

  document.getElementById("gph").innerHTML = part_load_idle;
  document.getElementById("cost_per_hour").innerHTML = cost_per_hour;

  ELEMENT.classList.remove("hide-dollar-sign");
  ELEMENT.classList.remove("underline");

}
