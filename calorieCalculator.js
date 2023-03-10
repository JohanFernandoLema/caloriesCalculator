function calculateVolume() {
var gender = document.getElementById("gender").value;
var gender2 = document.getElementById("gender2").value;
var age = document.getElementById("age").value;
var pounds = document.getElementById("pounds").value;
var inches = document.getElementById("inches").value;
var centimetres = document.getElementById("centimeters").value;
var kilograms = document.getElementById("kilograms").value;
var activity = document.getElementById("level").value;
var activity2 = document.getElementById("level2").value;

let maleGender = document.getElementById("maleOption");

//Calculate calories in inperial measuresments
	
if (gender == "Male" && activity == "Low") {
	var totalMan = 66 + (6.2 * pounds) + (12.7 * inches) - (6.76 * age) * 1.2;
	document.getElementById("calories").innerHTML = totalMan;
}
if (maleGender.checked == true)
{
 let maleOp = document.getElementById("maleOption").value;
}
else if (gender == "Male" && activity == "Medium"){
	var totalMan2 = 66 + (6.2 * pounds) + (12.7 * inches) - (6.76 * age) * 1.55;
	document.getElementById("calories").innerHTML = totalMan2;
}
else if(gender == "Male" && activity == "High"){
	var totalMan3 = 66 + (6.2 * pounds) + (12.7 * inches) - (6.76 * age) * 1.725;
	document.getElementById("calories").innerHTML = totalMan3;
}
else if (gender == "Female" && activity == "High") {
	var totalWoman3 = 655 + (4.35 * pounds) + (4.7 * inches) - (4.7 * age) * 1.725;
	document.getElementById("calories").innerHTML = totalWoman3;
}
else if (gender == "Female" && activity == "Medium") {
	var totalWoman2 = 655 + (4.35 * pounds) + (4.7 * inches) - (4.7 * age) * 1.55;
	document.getElementById("calories").innerHTML = totalWoman2;	
}
else if (gender == "Female" && activity == "Low") {
	var totalWoman = 655 + (4.35 * pounds) + (4.7 * inches) - (4.7 * age) * 1.2;
	document.getElementById("calories").innerHTML = totalWoman;
}

//Calculate calories in metric measuresments
if (gender2 == "Male" && activity2 == "Low") {
	var totalMetric = 66.5 + (13.76 * kilograms) + (5.003 * centimetres) - (6.755 * age) * 1.2;
	document.getElementById("metricCalories").innerHTML = totalMetric;
}
else if (gender2 == "Male" && activity2 == "Medium"){
	var totalMetric2 = 66.5 + (13.76 * kilograms) + (5.003 * centimetres) - (6.755 * age) * 1.55;
	document.getElementById("metricCalories").innerHTML = totalMetric2;
}
else if(gender2 == "Male" && activity2 == "High"){
	var totalMetric3 = 66.5 + (13.76 * kilograms) + (5.003 * centimetres) - (6.755 * age) * 1.725;
	document.getElementById("metricCalories").innerHTML = totalMetric3;
}
else if (gender2 == "Female" && activity2 == "High") {
	var totalMetricW = 655 + (9.563 * kilograms) + (1.850 * centimetres) - (4.676 * age) * 1.725;
	document.getElementById("metricCalories").innerHTML = totalMetricW;
}
else if (gender2 == "Female" && activity2 == "Medium") {
	var totalMetricW2 = 655 + (9.563 * kilograms) + (1.850 * centimetres) - (4.676 * age) * 1.755;
	document.getElementById("metricCalories").innerHTML = totalMetricW2;
}
else if (gender2 == "Female" && activity2 == "Low") {
	var totalMetricW3 = 655 + (9.563 * kilograms) + (1.850 * centimetres) - (4.676 * age) * 1.2;
	document.getElementById("metricCalories").innerHTML = totalMetricW3;
}
else{alert("It is not a valid data!!")}
}
document.getElementById("calculate").addEventListener("click", calculateVolume, false);
document.getElementById("calculateMetric").addEventListener("click", calculateVolume, false);