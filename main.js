function format(x) {
  if ((x>1e9) || (x<1e-6)) {
    return Math.floor(x/10**Math.floor(Math.log10(x)-4))/10000+"e"+Math.floor(Math.log10(x))
  } else {
    return x
  }
}
var lengthnumberinput = 1
var lengthunitinput = document.getElementById("lengthunitinput")
var lengthnumberoutput = 1
var lengthunitoutput = document.getElementById("lengthunitoutput")
function getlengthcoefficient(x) {
  if (x=="angstroms") {
    return 1e-10
  } else if (x=="astronomical units") {
    return 149597870700
  } else if (x=="attometers") {
    return 1e-18
  } else if (x=="cana") {
    return 2
  } else if (x=="centimeters") {
    return 0.01
  } else if (x=="chains") {
    return 20.1168
  } else if (x=="Chinese chi") {
    return 0.33333333333333333
  } else if (x=="cubits") {
    return 0.4572
  } else if (x=="decameters") {
    return 10
  } else if (x=="decimeters") {
    return 0.1
  } else if (x=="Earth radii") {
    return 6378100
  } else if (x=="exameters") {
    return 1e18
  } else if (x=="fathoms") {
    return 1.8288
  } else if (x=="feet") {
    return 0.3048
  } else if (x=="femtometers") {
    return 1e-15
  } else if (x=="furlongs") {
    return 201.168
  } else if (x=="gigameters") {
    return 1e9
  } else if (x=="hectometers") {
    return 100
  } else if (x=="Hong Kong chi") {
    return 0.371475
  } else if (x=="Hubble lengths") {
    return 1.3640557e26
  } else if (x=="inches") {
    return 0.0254
  } else if (x=="kilometers") {
    return 1000
  } else if (x=="leagues") {
    return 5556
  } else if (x=="li") {
    return 500
  } else if (x=="light years") {
    return 9460528412464108
  } else if (x=="links") {
    return 0.201168
  } else if (x=="lunar distances") {
    return 384399000
  } else if (x=="megameters") {
    return 1000000
  } else if (x=="meters") {
    return 1
  } else if (x=="micrometers") {
    return 0.000001
  } else if (x=="miles") {
    return 1609.344
  } else if (x=="millimeters") {
    return 0.001
  } else if (x=="nanometers") {
    return 1e-9
  } else if (x=="nautical miles") {
    return 1852
  } else if (x=="observable universes") {
    return 879980510813761469728000000
  } else if (x=="parsecs") {
    return 3.0856775815e16
  } else if (x=="petameters") {
    return 1e15
  } else if (x=="picometers") {
    return 1e-12
  } else if (x=="planck lengths") {
    return 1.616255e-35
  } else if (x=="rods") {
    return 5.0292
  } else if (x=="shaku") {
    return 0.30303030303030303
  } else if (x=="terameters") {
    return 1e12
  } else if (x=="yards") {
    return 0.9144
  } else if (x=="yoctometers") {
    return 1e-24
  } else if (x=="yottameters") {
    return 1e24
  } else if (x=="zeptometers") {
    return 1e-21
  } else if (x=="zettameters") {
    return 1e21
  } else {
    return 1e-154
  }
} 
function lengthconverter() {
  var lengthnumberinput = document.getElementById("lengthnumberinput")
  var lengthunitinput = getlengthcoefficient(document.getElementById("lengthunitinput"))
  var lengthunitoutput = getlengthcoefficient(document.getElementById("lengthunitoutput"))
  var lengthnumberoutput = lengthnumberinput*lengthunitinput/lengthunitoutput
  document.getElementById("lengthnumberoutput").innerHTML = lengthnumberoutput
}
function loop() {
  lengthconverter()
}
setInterval(loop(),100) // Makes the page update automatically
