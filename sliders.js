var stiffslider = document.getElementById("stiffness");
var stiffoutput = document.getElementById("stiffvalue");
stiffoutput.innerHTML = stiffslider.value;
stiffslider.oninput = function() {
    stiffoutput.innerHTML = this.value;
}
var massslider = document.getElementById("mass");
var massoutput = document.getElementById("massvalue");
massoutput.innerHTML = massslider.value;
massslider.oninput = function() {
    massoutput.innerHTML = this.value;
}
var dashpotslider = document.getElementById("dashpot");
var dashpotoutput = document.getElementById("dashpotvalue");
dashpotoutput.innerHTML = dashpotslider.value;
dashpotslider.oninput = function() {
    dashpotoutput.innerHTML = this.value;
}
