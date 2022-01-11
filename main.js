function format(x) {
  if (x==0) {
    return 0
  } else if ((x>1e9) || (x<1e-6)) {
    return Math.floor(x/10**Math.floor(Math.log10(x)-4))/10000+"e"+Math.floor(Math.log10(x))
  } else {
    return x
  }
}




// Absorbed dose starts here
var absorbeddosenumberinput = 1
var absorbeddoseunitinput = document.getElementById("absorbeddoseunitinput")
var absorbeddosenumberoutput = 1
var absorbeddoseunitoutput = document.getElementById("absorbeddoseunitoutput")
function getabsorbeddosecoefficient(x) {
  if (x=="attoerg per gram") {
    return 1e-22
  } else if (x=="attogray") {
    return 1e-18
  } else if (x=="attorad") {
    return 1e-20
  } else if (x=="erg per gram") {
    return 1e-4
  } else if (x=="exaerg per gram") {
    return 1e14
  } else if (x=="exagray") {
    return 1e18
  } else if (x=="exarad") {
    return 1e16
  } else if (x=="femtoerg per gram") {
    return 1e-19
  } else if (x=="femtogray") {
    return 1e-15
  } else if (x=="femtorad") {
    return 1e-17
  } else if (x=="gigaerg per gram") {
    return 1e5
  } else if (x=="gigagray") {
    return 1e9
  } else if (x=="gigarad") {
    return 1e7
  } else if (x=="gray") {
    return 1
  } else if (x=="kiloerg per gram") {
    return 0.1
  } else if (x=="kilogray") {
    return 1000
  } else if (x=="kilorad") {
    return 10
  } else if (x=="megaerg per gram") {
    return 100
  } else if (x=="megagray") {
    return 1e6
  } else if (x=="megarad") {
    return 10000
  } else if (x=="microerg per gram") {
    return 1e-10
  } else if (x=="microgray") {
    return 1e-6
  } else if (x=="microrad") {
    return 1e-8
  } else if (x=="millierg per gram") {
    return 1e-7
  } else if (x=="milligray") {
    return 1e-3
  } else if (x=="millirad") {
    return 1e-5
  } else if (x=="nanoerg per gram") {
    return 1e-13
  } else if (x=="nanogray") {
    return 1e-9
  } else if (x=="nanorad") {
    return 1e-11
  } else if (x=="petaerg per gram") {
    return 1e11
  } else if (x=="petagray") {
    return 1e15
  } else if (x=="petarad") {
    return 1e13
  } else if (x=="picoerg per gram") {
    return 1e-16
  } else if (x=="picogray") {
    return 1e-12
  } else if (x=="picorad") {
    return 1e-14
  } else if (x=="rad") {
    return 0.01
  } else if (x=="teraerg per gram") {
    return 1e8
  } else if (x=="teragray") {
    return 1e12
  } else if (x=="terarad") {
    return 1e10
  } else if (x=="whole body LD50 for ARS in humans") {
    return 4
  } else if (x=="yoctoerg per gram") {
    return 1e-28
  } else if (x=="yoctogray") {
    return 1e-24
  } else if (x=="yoctorad") {
    return 1e-26
  } else if (x=="yottaerg per gram") {
    return 1e20
  } else if (x=="yottagray") {
    return 1e24
  } else if (x=="yottarad") {
    return 1e22
  } else if (x=="zeptoerg per gram") {
    return 1e-25
  } else if (x=="zeptogray") {
    return 1e-21
  } else if (x=="zeptorad") {
    return 1e-23
  } else if (x="zettaerg per gram") {
    return 1e17
  } else if (x=="zettagray") {
    return 1e21
  } else if (x=="zettarad") {
    return 1e19
  } else {
    return 1
  }
}
function absorbeddoseconverter() {
  absorbeddosenumberinput = document.getElementById("absorbeddosenumberinput").value
  absorbeddoseunitinput = getabsorbeddosecoefficient(document.getElementById("absorbeddoseunitinput").value)
  absorbeddoseunitoutput = getabsorbeddosecoefficient(document.getElementById("absorbeddoseunitoutput").value)
  absorbeddosenumberoutput = absorbeddosenumberinput*absorbeddoseunitinput/absorbeddoseunitoutput
  if ((absorbeddoseunitinput !== "") && (absorbeddoseunitoutput !== "")) {
    document.getElementById("absorbeddosenumberoutput").innerHTML = format(absorbeddosenumberoutput)
  }
}




// Acceleration starts here
var accelerationnumberinput = 1
var accelerationunitinput = document.getElementById("accelerationunitinput")
var accelerationnumberoutput = 1
var accelerationunitoutput = document.getElementById("accelerationunitoutput")
function getaccelerationcoefficient(x) {
  if (x=="angstroms per second²") {
    return 1e-10
  } else if (x=="astronomical units per second²") {
    return 149597870700
  } else if (x=="attometers per second²") {
    return 1e-18
  } else if (x=="cana per second²") {
    return 2
  } else if (x=="centimeters per second²") {
    return 0.01
  } else if (x=="chains per second²") {
    return 20.1168
  } else if (x=="Chinese chi per second²") {
    return 0.33333333333333333
  } else if (x=="cubits per second²") {
    return 0.4572
  } else if (x=="decameters per second²") {
    return 10
  } else if (x=="decimeters per second²") {
    return 0.1
  } else if (x=="Earth radii per second²") {
    return 6378100
  } else if (x=="exameters per second²") {
    return 1e18
  } else if (x=="fathoms per second²") {
    return 1.8288
  } else if (x=="feet per second²") {
    return 0.3048
  } else if (x=="femtometers per second²") {
    return 1e-15
  } else if (x=="furlongs per second²") {
    return 201.168
  } else if (x=="gigameters per second²") {
    return 1e9
  } else if (x=="hectometers per second²") {
    return 100
  } else if (x=="Hong Kong chi per second²") {
    return 0.371475
  } else if (x=="Hubble lengths per second²") {
    return 1.3640557e26
  } else if (x=="inches per second²") {
    return 0.0254
  } else if (x=="kilometers per second²") {
    return 1000
  } else if (x=="leagues per second²") {
    return 5556
  } else if (x=="li per second²") {
    return 500
  } else if (x=="light years per second²") {
    return 9460528412464108
  } else if (x=="links per second²") {
    return 0.201168
  } else if (x=="lunar distances per second²") {
    return 384399000
  } else if (x=="megameters per second²") {
    return 1000000
  } else if (x=="meters per second²") {
    return 1
  } else if (x=="micrometers per second²") {
    return 0.000001
  } else if (x=="miles per second²") {
    return 1609.344
  } else if (x=="millimeters per second²") {
    return 0.001
  } else if (x=="nanometers per second²") {
    return 1e-9
  } else if (x=="nautical miles per second²") {
    return 1852
  } else if (x=="observable universes per second²") {
    return 879980510813761469728000000
  } else if (x=="parsecs per second²") {
    return 3.0856775815e16
  } else if (x=="petameters per second²") {
    return 1e15
  } else if (x=="picometers per second²") {
    return 1e-12
  } else if (x=="planck lengths per second²") {
    return 1.616255e-35
  } else if (x=="rods per second²") {
    return 5.0292
  } else if (x=="shaku per second²") {
    return 0.30303030303030303
  } else if (x=="terameters per second²") {
    return 1e12
  } else if (x=="yards per second²") {
    return 0.9144
  } else if (x=="yoctometers per second²") {
    return 1e-24
  } else if (x=="yottameters per second²") {
    return 1e24
  } else if (x=="zeptometers per second²") {
    return 1e-21
  } else if (x=="zettameters per second²") {
    return 1e21
  } else if (x=="meters per hour²") {
    return 0.00027777777778
  } else if (x=="kilometers per hour²") {
    return 0.27777777777778
  } else if (x=="miles per hour²") {
    return 0.44704
  } else {
    return 1
  }
}
function accelerationconverter() {
  accelerationnumberinput = document.getElementById("accelerationnumberinput").value
  accelerationunitinput = getaccelerationcoefficient(document.getElementById("accelerationunitinput").value)
  accelerationunitoutput = getaccelerationcoefficient(document.getElementById("accelerationunitoutput").value)
  accelerationnumberoutput = accelerationnumberinput*accelerationunitinput/accelerationunitoutput
  if ((accelerationunitinput !== "") && (accelerationunitoutput !== "")) {
    document.getElementById("accelerationnumberoutput").innerHTML = format(accelerationnumberoutput)
  }
}




// Length starts here
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
    return 1
  }
}
function lengthconverter() {
  lengthnumberinput = document.getElementById("lengthnumberinput").value
  lengthunitinput = getlengthcoefficient(document.getElementById("lengthunitinput").value)
  lengthunitoutput = getlengthcoefficient(document.getElementById("lengthunitoutput").value)
  lengthnumberoutput = lengthnumberinput*lengthunitinput/lengthunitoutput
  if ((lengthunitinput !== "") && (lengthunitoutput !== "")) {
    document.getElementById("lengthnumberoutput").innerHTML = format(lengthnumberoutput)
  }
}




// Time starts here
var timenumberinput = 1
var timeunitinput = document.getElementById("lengthunitinput")
var timenumberoutput = 1
var timeunitoutput = document.getElementById("lengthunitoutput")
function gettimecoefficient(x) {
  if (x=="attoseconds") {
    return 1e-18
  } else if (x=="centuries") {
    return 3155692599
  } else if (x=="common years") {
    return 31536000
  } else if (x=="days") {
    return 86400
  } else if (x=="decades") {
    return 315569260
  } else if (x=="exaseconds") {
    return 1e18
  } else if (x=="femtoseconds") {
    return 1e-15
  } else if (x=="fortnights") {
    return 1209600
  } else if (x=="galactic years") {
    return 7.10030835e15
  } else if (x=="gigaannums") {
    return 3.155692599e16
  } else if (x=="gigaseconds") {
    return 1e9
  } else if (x=="Gregorian years") {
    return 31556952
  } else if (x=="hours") {
    return 3600
  } else if (x=="kiloseconds") {
    return 1000
  } else if (x=="leap years") {
    return 31622400
  } else if (x=="megaannums") {
    return 3.155692599e13
  } else if (x=="megaseconds") {
    return 1000000
  } else if (x=="microseconds") {
    return 1e-6
  } else if (x=="millennia") {
    return 31556925990
  } else if (x=="milliseconds") {
    return 0.001
  } else if (x=="minutes") {
    return 60
  } else if (x=="nanoseconds") {
    return 1e-9
  } else if (x=="petaseconds") {
    return 1e15
  } else if (x=="picoseconds") {
    return 1e-12
  } else if (x=="planck times") {
    return 5.3912e-44
  } else if (x=="seconds") {
    return 1
  } else if (x=="sidereal years") {
    return 31558149.7635456
  } else if (x=="Svedbergs") {
    return 1e-13
  } else if (x=="teraseconds") {
    return 1e12
  } else if (x=="thirds") {
    return 0.016666666666667
  } else if (x=="time units") {
    return 0.001024
  } else if (x=="tropical years") {
    return 31556925.216
  } else if (x=="universe ages") {
    return 436117076640000000
  } else if (x=="weeks") {
    return 604800
  } else if (x=="yoctoseconds") {
    return 1e-24
  } else if (x=="yottaseconds") {
    return 1e24
  } else if (x=="zeptoseconds") {
    return 1e-21
  } else if (x=="zettaseconds") {
    return 1e21
  } else {
    return 1
  }
}
function timeconverter() {
  timenumberinput = document.getElementById("timenumberinput").value
  timeunitinput = gettimecoefficient(document.getElementById("timeunitinput").value)
  timeunitoutput = gettimecoefficient(document.getElementById("timeunitoutput").value)
  timenumberoutput = timenumberinput*timeunitinput/timeunitoutput
  if ((timeunitinput !== "") && (timeunitoutput !== "")) {
    document.getElementById("timenumberoutput").innerHTML = format(timenumberoutput)
  }
}





function loop() {
  absorbeddoseconverter()
  accelerationconverter()
  lengthconverter()
  timeconverter()
}
setInterval(loop,100); // Makes the page update automatically
