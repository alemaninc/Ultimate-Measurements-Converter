function format(x) {
  if (isNaN(x)) {
    return ""
  } else if (x==0) {
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
    return NaN
  }
}
function absorbeddoseconverter() {
  absorbeddosenumberinput = document.getElementById("absorbeddosenumberinput").value
  absorbeddoseunitinput = getabsorbeddosecoefficient(document.getElementById("absorbeddoseunitinput").value)
  absorbeddoseunitoutput = getabsorbeddosecoefficient(document.getElementById("absorbeddoseunitoutput").value)
  absorbeddosenumberoutput = absorbeddosenumberinput*absorbeddoseunitinput/absorbeddoseunitoutput
  if ((document.getElementById("absorbeddoseunitinput").value !== "") && (document.getElementById("absorbeddoseunitoutput").value !== "")) {
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
  } else if (x=="kilometers per hour²") {
    return 0.27777777777778
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
  } else if (x=="meters per hour²") {
    return 0.00027777777778
  } else if (x=="meters per second²") {
    return 1
  } else if (x=="micrometers per second²") {
    return 0.000001
  } else if (x=="miles per hour²") {
    return 0.44704
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
  } else {
    return NaN
  }
}
function accelerationconverter() {
  accelerationnumberinput = document.getElementById("accelerationnumberinput").value
  accelerationunitinput = getaccelerationcoefficient(document.getElementById("accelerationunitinput").value)
  accelerationunitoutput = getaccelerationcoefficient(document.getElementById("accelerationunitoutput").value)
  accelerationnumberoutput = accelerationnumberinput*accelerationunitinput/accelerationunitoutput
  if ((document.getElementById("accelerationunitinput").value !== "") && (document.getElementById("accelerationunitoutput").value !== "")) {
    document.getElementById("accelerationnumberoutput").innerHTML = format(accelerationnumberoutput)
  }
}




// Angle starts here
var anglenumberinput = 1
var angleunitinput = document.getElementById("angleunitinput")
var anglenumberoutput = 1
var angleunitoutput = document.getElementById("angleunitoutput")
function getanglecoefficient(x) {
  if (x=="arcminutes") {
    return 1/21600
  } else if (x=="arcseconds") {
    return 1/1296000
  } else if (x=="binary degrees") {
    return 0.00390625
  } else if (x=="compass points") {
    return 0.03125
  } else if (x=="degrees") {
    return 1/360
  } else if (x=="diameter parts") {
    return 1/(Math.PI*120)
  } else if (x=="hexacontades") {
    return 1/60
  } else if (x=="gradians") {
    return 0.0025
  } else if (x=="hour angles") {
    return 1/24
  } else if (x=="milliradians") {
    return 0.0005/Math.PI
  } else if (x=="quadrants") {
    return 0.25
  } else if (x=="quarter-points") {
    return 0.0078125
  } else if (x=="radians") {
    return 0.5/Math.PI
  } else if (x=="sextants") {
    return 1/6
  } else if (x=="turns") {
    return 1
  } else {
    return NaN
  }
}
function angleconverter() {
  anglenumberinput = document.getElementById("anglenumberinput").value
  angleunitinput = getanglecoefficient(document.getElementById("angleunitinput").value)
  angleunitoutput = getanglecoefficient(document.getElementById("angleunitoutput").value)
  anglenumberoutput = anglenumberinput*angleunitinput/angleunitoutput
  if ((document.getElementById("angleunitinput").value !== "") && (document.getElementById("angleunitoutput").value !== "")) {
    document.getElementById("anglenumberoutput").innerHTML = format(anglenumberoutput)
  }
}




// Area starts here
var areanumberinput = 1
var areaunitinput = document.getElementById("areaunitinput")
var areanumberoutput = 1
var areaunitoutput = document.getElementById("areaunitoutput")
function getareacoefficient(x) {
  if (x=="acres") {
    return 4046.8564224
  } else if (x=="angstroms²") {
    return 1e-20
  } else if (x=="ares") {
    return 100
  } else if (x=="attometers²") {
    return 1e-36
  } else if (x=="barns") {
    return 1e-28
  } else if (x=="bigha") {
    return 2529.285264
  } else if (x=="cana²") {
    return 4
  } else if (x=="centimeters²") {
    return 0.0001
  } else if (x=="chains²") {
    return 404.68564224
  } else if (x=="Chinese chi²") {
    return 0.1111111111111
  } else if (x=="cubits²") {
    return 0.20903184
  } else if (x=="decameters²") {
    return 100
  } else if (x=="decimeters²") {
    return 0.01
  } else if (x=="dhur") {
    return 6.32321316
  } else if (x=="dhurki") {
    return 0.316160658
  } else if (x=="exameters²") {
    return 1e36
  } else if (x=="fathoms²") {
    return 3.34450944
  } else if (x=="feet²") {
    return 0.09290304
  } else if (x=="femtometers²") {
    return 1e-30
  } else if (x=="furlongs²") {
    return 40468.564224
  } else if (x=="gigameters²") {
    return 1e18
  } else if (x=="hectads") {
    return 1e8
  } else if (x=="hectares") {
    return 10000
  } else if (x=="Hong Kong chi²") {
    return 0.137993675625
  } else if (x=="inches²") {
    return 0.00064516
  } else if (x=="khata") {
    return 126.4642632
  } else if (x=="kilometers²") {
    return 1000000
  } else if (x=="leagues²") {
    return 30869136
  } else if (x=="li²") {
    return 250000
  } else if (x=="links²") {
    return 0.040468564224
  } else if (x=="megameters²") {
    return 1e12
  } else if (x=="meters²") {
    return 1
  } else if (x=="micrometers²") {
    return 1e-12
  } else if (x=="miles²") {
    return 2589988.110336
  } else if (x=="millimeters²") {
    return 0.000001
  } else if (x=="myriads") {
    return 1e10
  } else if (x=="nanometers²") {
    return 1e-18
  } else if (x=="petameters²") {
    return 1e30
  } else if (x=="picometers²") {
    return 1e-24
  } else if (x=="rods²") {
    return 25.29285264
  } else if (x=="shaku²") {
    return 0.0918273645546373
  } else if (x=="terameters²") {
    return 1e24
  } else if (x=="tetrads") {
    return 4000000
  } else if (x=="yards²") {
    return 0.83612736
  } else if (x=="yoctometers²") {
    return 1e-48
  } else if (x=="yottameters²") {
    return 1e48
  } else if (x=="zeptometers²") {
    return 1e-42
  } else if (x=="zettameters²") {
    return 1e42
  } else {
    return NaN
  }
}
function areaconverter() {
  areanumberinput = document.getElementById("areanumberinput").value
  areaunitinput = getareacoefficient(document.getElementById("areaunitinput").value)
  areaunitoutput = getareacoefficient(document.getElementById("areaunitoutput").value)
  areanumberoutput = areanumberinput*areaunitinput/areaunitoutput
  if ((document.getElementById("areaunitinput").value !== "") && (document.getElementById("areaunitoutput").value !== "")) {
    document.getElementById("areanumberoutput").innerHTML = format(areanumberoutput)
  }
}




// Catalytic activity starts here
var catalyticactivitynumberinput = 1
var catalyticactivityunitinput = document.getElementById("catalyticactivityunitinput")
var catalyticactivitynumberoutput = 1
var catalyticactivityunitoutput = document.getElementById("catalyticactivityunitoutput")
function getcatalyticactivitycoefficient(x) {
  if (x=="attokatals") {
    return 1e-18
  } else if (x=="centikatals") {
    return 0.01
  } else if (x=="decakatals") {
    return 10
  } else if (x=="decikatals") {
    return 0.1
  } else if (x=="enzyme units") {
    return 0.00000001666666666666666666667
  } else if (x=="exakatals") {
    return 1e18
  } else if (x=="femtokatals") {
    return 1e-15
  } else if (x=="gigakatals") {
    return 1e9
  } else if (x=="hectokatals") {
    return 0.01
  } else if (x=="katals") {
    return 1
  } else if (x=="kilokatals") {
    return 1000
  } else if (x=="megakatals") {
    return 1000000
  } else if (x=="microkatals") {
    return 0.000001
  } else if (x=="millikatals") {
    return 0.001
  } else if (x=="nanokatals") {
    return 1e-9
  } else if (x=="petakatals") {
    return 1e15
  } else if (x=="picokatals") {
    return 1e-12
  } else if (x=="terakatals") {
    return 1e12
  } else if (x=="yoctokatals") {
    return 1e-24
  } else if (x=="yottakatals") {
    return 1e24
  } else if (x=="zeptokatals") {
    return 1e-21
  } else if (x=="zettakatals") {
    return 1e21
  } else {
    return NaN
  }
}
function catalyticactivityconverter() {
  catalyticactivitynumberinput = document.getElementById("catalyticactivitynumberinput").value
  catalyticactivityunitinput = getcatalyticactivitycoefficient(document.getElementById("catalyticactivityunitinput").value)
  catalyticactivityunitoutput = getcatalyticactivitycoefficient(document.getElementById("catalyticactivityunitoutput").value)
  catalyticactivitynumberoutput = catalyticactivitynumberinput*catalyticactivityunitinput/catalyticactivityunitoutput
  if ((document.getElementById("catalyticactivityunitinput").value !== "") && (document.getElementById("catalyticactivityunitoutput").value !== "")) {
    document.getElementById("catalyticactivitynumberoutput").innerHTML = format(catalyticactivitynumberoutput)
  }
}




// Density starts here
var densitynumberinput = 1
var densityunitinput = document.getElementById("densityunitinput")
var densitynumberoutput = 1
var densityunitoutput = document.getElementById("densityunitoutput")
function getdensitycoefficient(x) {
  if (x=="actinium densities") {
    return 10070000
  } else if (x=="aluminum densities") {
    return 2698000
  } else if (x=="americium densities") {
    return 13690000
  } else if (x=="antimony densities") {
    return 6685000
  } else if (x=="argon densities") {
    return 1783.7
  } else if (x=="arsenic densities") {
    return 5776000
  } else if (x=="attograms per cubic meter") {
    return 1e-18
  } else if (x=="barium densities") {
    return 3594000
  } else if (x=="berkelium densities") {
    return 14790000
  } else if (x=="beryllium densities") {
    return 1850000
  } else if (x=="bismuth densities") {
    return 9807000
  } else if (x=="boron densities") {
    return 2340000
  } else if (x=="bromine densities") {
    return 3122000
  } else if (x=="cadmium densities") {
    return 8690000
  } else if (x=="caesium densities") {
    return 1873000
  } else if (x=="calcium densities") {
    return 1540000
  } else if (x=="californium densities") {
    return 15100000
  } else if (x=="cerium densities") {
    return 6770000
  } else if (x=="chlorine densities") {
    return 3214
  } else if (x=="chromium densities") {
    return 7150000
  } else if (x=="cobalt densities") {
    return 8860000
  } else if (x=="copper densities") {
    return 8960000
  } else if (x=="curium densities") {
    return 13510000
  } else if (x=="dysprosium densities") {
    return 8550000
  } else if (x=="erbium densities") {
    return 9066000
  } else if (x=="europium densities") {
    return 5243000
  } else if (x=="exatons per cubic meter") {
    return 1e24
  } else if (x=="femtograms per cubic meter") {
    return 1e-15
  } else if (x=="fluorine densities") {
    return 1696
  } else if (x=="francium densities") {
    return 1870000
  } else if (x=="gadolinium densities") {
    return 7895000
  } else if (x=="gallium densities") {
    return 5907000
  } else if (x=="germanium densities") {
    return 5323000
  } else if (x=="gigatons per cubic meter") {
    return 1e15
  } else if (x=="gold densities") {
    return 19282000
  } else if (x=="grams per cubic centimeter") {
    return 1e6
  } else if (x=="grams per cubic meter") {
    return 1
  } else if (x=="hafnium densities") {
    return 13310000
  } else if (x=="helium densities") {
    return 178.5
  } else if (x=="holmium densities") {
    return 8795000
  } else if (x=="hydrogen densities") {
    return 89.88
  } else if (x=="indium densities") {
    return 7310000
  } else if (x=="interstellar media") {
    return 1e-24
  } else if (x=="iodine densities") {
    return 4930000
  } else if (x=="iridium densities") {
    return 22650000
  } else if (x=="iron densities") {
    return 7874000
  } else if (x=="kilograms per cubic meter") {
    return 1000
  } else if (x=="kilotons per cubic meter") {
    return 1e9
  } else if (x=="krypton densities") {
    return 3733
  } else if (x=="lanthanum densities") {
    return 6145000
  } else if (x=="lead densities") {
    return 11342000
  } else if (x=="lithium densities") {
    return 534000
  } else if (x=="lutetium densities") {
    return 9840000
  } else if (x=="magnesium densities") {
    return 1738000
  } else if (x=="manganese densities") {
    return 7440000
  } else if (x=="megatons per cubic meter") {
    return 1e12
  } else if (x=="mercury densities") {
    return 13533600
  } else if (x=="micrograms per cubic meter") {
    return 1e-6
  } else if (x=="milligrams per cubic meter") {
    return 0.001
  } else if (x=="molybdenum densities") {
    return 10220000
  } else if (x=="nanograms per cubic meter") {
    return 1e-9
  } else if (x=="neodymium densities") {
    return 7007000
  } else if (x=="neon densities") {
    return 899.9
  } else if (x=="neptunium densities") {
    return 20450000
  } else if (x=="nickel densities") {
    return 8912000
  } else if (x=="niobium densities") {
    return 8570000
  } else if (x=="nitrogen densities") {
    return 1250.6
  } else if (x=="nuclear densities") {
    return 2.3e20
  } else if (x=="observable universe densities") {
    return 9.9e-24
  } else if (x=="osmium densities") {
    return 22610000
  } else if (x=="oxygen densities") {
    return 1429
  } else if (x=="palladium densities") {
    return 12020000
  } else if (x=="petatons per cubic meter") {
    return 1e21
  } else if (x=="phosphorus densities") {
    return 1820000
  } else if (x=="picograms per cubic meter") {
    return 1e-12
  } else if (x=="platinum densities") {
    return 21460000
  } else if (x=="plutonium densities") {
    return 19816000
  } else if (x=="polonium densities") {
    return 9320000
  } else if (x=="potassium densities") {
    return 862000
  } else if (x=="pounds per cubic inch") {
    return 27679904.7102031211936
  } else if (x=="praseodymium densities") {
    return 6773000
  } else if (x=="promethium densities") {
    return 7260000
  } else if (x=="protactinium densities") {
    return 15370000
  } else if (x=="radium densities") {
    return 5500000
  } else if (x=="radon densities") {
    return 9730
  } else if (x=="rhenium densities") {
    return 21020000
  } else if (x=="rhodium densities") {
    return 12410000
  } else if (x=="rubidium densities") {
    return 1532000
  } else if (x=="ruthenium densities") {
    return 12370000
  } else if (x=="rutherfordium densities") {
    return 18100000
  } else if (x=="samarium densities") {
    return 7520000
  } else if (x=="scandium densities") {
    return 2989000
  } else if (x=="selenium densities") {
    return 4809000
  } else if (x=="silicon densities") {
    return 2329600
  } else if (x=="silver densities") {
    return 10501000
  } else if (x=="slugs per cubic foot") {
    return 515,378.0405937935308358
  } else if (x=="sodium densities") {
    return 971000
  } else if (x=="strontium densities") {
    return 2640000
  } else if (x=="sulfur densities") {
    return 2067000
  } else if (x=="tantalum densities") {
    return 16654000
  } else if (x=="technetium densities") {
    return 11500000
  } else if (x=="tellurium densities") {
    return 6232000
  } else if (x=="teratons per cubic meter") {
    return 1e18
  } else if (x=="terbium densities") {
    return 8229000
  } else if (x=="thallium densities") {
    return 11850000
  } else if (x=="thorium densities") {
    return 11720000
  } else if (x=="thulium densities") {
    return 9321000
  } else if (x=="tin densities") {
    return 7287000
  } else if (x=="titanium densities") {
    return 4540000
  } else if (x=="tons per cubic meter") {
    return 1000000
  } else if (x=="tungsten densities") {
    return 19250000
  } else if (x=="uranium densities") {
    return 18950000
  } else if (x=="vanadium densities") {
    return 6110000
  } else if (x=="xenon densities") {
    return 5887
  } else if (x=="yoctograms per cubic meter") {
    return 1e-24
  } else if (x=="yottatons per cubic meter") {
    return 1e30
  } else if (x=="ytterbium densities") {
    return 6965000
  } else if (x=="yttrium densities") {
    return 4469000
  } else if (x=="zeptograms per cubic meter") {
    return 1e-21
  } else if (x=="zettatons per cubic meter") {
    return 1e27
  } else if (x=="zinc densities") {
    return 7134000
  } else if (x=="zirconium densities") {
    return 6506000
  } else {
    return NaN
  }
}
function densityconverter() {
  densitynumberinput = document.getElementById("densitynumberinput").value
  densityunitinput = getdensitycoefficient(document.getElementById("densityunitinput").value)
  densityunitoutput = getdensitycoefficient(document.getElementById("densityunitoutput").value)
  densitynumberoutput = densitynumberinput*densityunitinput/densityunitoutput
  if ((document.getElementById("densityunitinput").value !== "") && (document.getElementById("densityunitoutput").value !== "")) {
    document.getElementById("densitynumberoutput").innerHTML = format(densitynumberoutput)
  }
}




// Electrical resistance starts here
var electricalresistancenumberinput = 1
var electricalresistanceunitinput = document.getElementById("electricalresistanceunitinput")
var electricalresistancenumberoutput = 1
var electricalresistanceunitoutput = document.getElementById("electricalresistanceunitoutput")
function getelectricalresistancecoefficient(x) {
  if (x=="abohms") {
    return 1e-9
  } else if (x=="absolute feet per second") {
    return 3.048e-8
  } else if (x=="attohms") {
    return 1e-18
  } else if (x=="centiohms") {
    return 0.01
  } else if (x=="decaohms") {
    return 10
  } else if (x=="deciohms") {
    return 0.1
  } else if (x=="exaohms") {
    return 1e18
  } else if (x=="femtohms") {
    return 1e15
  } else if (x=="German miles") {
    return 57.44
  } else if (x=="gigaohms") {
    return 1e9
  } else if (x=="hectaohms") {
    return 100
  } else if (x=="Jacobi copper units") {
    return 0.6367
  } else if (x=="kilohms") {
    return 1000
  } else if (x=="Matthiessens") {
    return 13.59
  } else if (x=="megohms") {
    return 1000000
  } else if (x=="microhms") {
    return 0.000001
  } else if (x=="milliohms") {
    return 0.001
  } else if (x=="nanohms") {
    return 1e-9
  } else if (x=="ohms") {
    return 1
  } else if (x=="petaohms") {
    return 1e15
  } else if (x=="picohms") {
    return 1e-12
  } else if (x=="Siemens mercury units") {
    return 0.9537
  } else if (x=="statohms") {
    return 8.987551787e11
  } else if (x=="teraohms") {
    return 1e12
  } else if (x=="Thomson's units") {
    return 0.3202
  } else if (x=="Varleys") {
    return 25.61
  } else if (x=="Weber's absolute units") {
    return 9.191e-8
  } else if (x=="yoctohms") {
    return 1e-24
  } else if (x=="yottaohms") {
    return 1e24
  } else if (x=="zeptohms") {
    return 1e-21
  } else if (x=="zettaohms") {
    return 1e21
  } else {
    return NaN
  }
}
function electricalresistanceconverter() {
  electricalresistancenumberinput = document.getElementById("electricalresistancenumberinput").value
  electricalresistanceunitinput = getelectricalresistancecoefficient(document.getElementById("electricalresistanceunitinput").value)
  electricalresistanceunitoutput = getelectricalresistancecoefficient(document.getElementById("electricalresistanceunitoutput").value)
  electricalresistancenumberoutput = electricalresistancenumberinput*electricalresistanceunitinput/electricalresistanceunitoutput
  if ((document.getElementById("electricalresistanceunitinput").value !== "") && (document.getElementById("electricalresistanceunitoutput").value !== "")) {
    document.getElementById("electricalresistancenumberoutput").innerHTML = format(electricalresistancenumberoutput)
  }
}




// Electric charge starts here
var electricchargenumberinput = 1
var electricchargeunitinput = document.getElementById("electricchargeunitinput")
var electricchargenumberoutput = 1
var electricchargeunitoutput = document.getElementById("electricchargeunitoutput")
function getelectricchargecoefficient(x) {
  if (x=="ampere hours") {
    return 3600
  } else if (x=="attocoulombs") {
    return 1e-18
  } else if (x=="coulombs") {
    return 1
  } else if (x=="elementary charges") {
    return 1.602176634e-19
  } else if (x=="exacoulombs") {
    return 1e18
  } else if (x=="femtocoulombs") {
    return 1e-15
  } else if (x=="gigacoulombs") {
    return 1e9
  } else if (x=="kilocoulombs") {
    return 1000
  } else if (x=="megacoulombs") {
    return 1000000
  } else if (x=="microcoulombs") {
    return 0.000001
  } else if (x=="millicoulombs") {
    return 0.001
  } else if (x=="nanocoulombs") {
    return 1e-9
  } else if (x=="petacoulombs") {
    return 1e15
  } else if (x=="picocoulombs") {
    return 1e-12
  } else if (x=="statcoulombs") {
    return 3.33564e-10
  } else if (x=="teracoulombs") {
    return 1e12
  } else if (x=="yoctocoulombs") {
    return 1e-24
  } else if (x=="yottacoulombs") {
    return 1e24
  } else if (x=="zeptocoulombs") {
    return 1e-21
  } else if (x=="zettacoulombs") {
    return 1e21
  } else {
    return NaN
  }
}
function electricchargeconverter() {
  electricchargenumberinput = document.getElementById("electricchargenumberinput").value
  electricchargeunitinput = getelectricchargecoefficient(document.getElementById("electricchargeunitinput").value)
  electricchargeunitoutput = getelectricchargecoefficient(document.getElementById("electricchargeunitoutput").value)
  electricchargenumberoutput = electricchargenumberinput*electricchargeunitinput/electricchargeunitoutput
  if ((document.getElementById("electricchargeunitinput").value !== "") && (document.getElementById("electricchargeunitoutput").value !== "")) {
    document.getElementById("electricchargenumberoutput").innerHTML = format(electricchargenumberoutput)
  }
}




// Electric current starts here
var electriccurrentnumberinput = 1
var electriccurrentunitinput = document.getElementById("electriccurrentunitinput")
var electriccurrentnumberoutput = 1
var electriccurrentunitoutput = document.getElementById("electriccurrentunitoutput")
function getelectriccurrentcoefficient(x) {
  if (x=="ampere") {
    return 1
  } else if (x=="attoampere") {
    return 1e-18
  } else if (x=="centiampere") {
    return 0.01
  } else if (x=="decaampere") {
    return 10
  } else if (x=="deciampere") {
    return 0.1
  } else if (x=="exaampere") {
    return 1e18
  } else if (x=="femtoampere") {
    return 1e-15
  } else if (x=="gigaampere") {
    return 1e9
  } else if (x=="hectaampere") {
    return 100
  } else if (x=="kiloampere") {
    return 1000
  } else if (x=="megaampere") {
    return 1000000
  } else if (x=="microampere") {
    return 0.000001
  } else if (x=="milliampere") {
    return 0.001
  } else if (x=="nanoampere") {
    return 1e-9
  } else if (x=="petaampere") {
    return 1e15
  } else if (x=="picoampere") {
    return 1e-12
  } else if (x=="teraampere") {
    return 1e12
  } else if (x=="yoctoampere") {
    return 1e-24
  } else if (x=="yottaampere") {
    return 1e24
  } else if (x=="zeptoampere") {
    return 1e-21
  } else if (x=="zettaampere") {
    return 1e21
  } else {
    return NaN
  }
}
function electriccurrentconverter() {
  electriccurrentnumberinput = document.getElementById("electriccurrentnumberinput").value
  electriccurrentunitinput = getelectriccurrentcoefficient(document.getElementById("electriccurrentunitinput").value)
  electriccurrentunitoutput = getelectriccurrentcoefficient(document.getElementById("electriccurrentunitoutput").value)
  electriccurrentnumberoutput = electriccurrentnumberinput*electriccurrentunitinput/electriccurrentunitoutput
  if ((document.getElementById("electriccurrentunitinput").value !== "") && (document.getElementById("electriccurrentunitoutput").value !== "")) {
    document.getElementById("electriccurrentnumberoutput").innerHTML = format(electriccurrentnumberoutput)
  }
}





// Energy starts here
var energynumberinput = 1
var energyunitinput = document.getElementById("energyunitinput")
var energynumberoutput = 1
var energyunitoutput = document.getElementById("energyunitoutput")
function getenergycoefficient(x) {
  if (x=="attojoules") {
    return 1e-18
  } else if (x=="barrel of oil equivalents") {
    return 6.118e9
  } else if (x=="British thermal units") {
    return 1055.06
  } else if (x=="calories") {
    return 4.184
  } else if (x=="centijoules") {
    return 0.01
  } else if (x=="cubic miles of oil") {
    return 1.60392477979577e20
  } else if (x=="decajoules") {
    return 10
  } else if (x=="decijoules") {
    return 0.1
  } else if (x=="electron volts") {
    return 1.602176565e-19
  } else if (x=="ergs") {
    return 1e-7
  } else if (x=="exajoules") {
    return 1e18
  } else if (x=="femtojoules") {
    return 1e-15
  } else if (x=="foot-pound forces") {
    return 1.355818
  } else if (x=="foot-poundals") {
    return 0.0421401100938048
  } else if (x=="gasoline gallon equivalents") {
    return 1.213e8
  } else if (x=="gigajoules") {
    return 1e9
  } else if (x=="hartrees") {
    return 4.35974e-18
  } else if (x=="hectojoules") {
    return 0.01
  } else if (x=="horsepower-hours") {
    return 2.6845195368856e6
  } else if (x=="joules") {
    return 1
  } else if (x=="kilocalories") {
    return 4184
  } else if (x=="kilojoules") {
    return 1000
  } else if (x=="kilowatt-hours") {
    return 3.6e6
  } else if (x=="megajoules") {
    return 1000000
  } else if (x=="microjoules") {
    return 0.000001
  } else if (x=="millijoules") {
    return 0.001
  } else if (x=="nanojoules") {
    return 1e-9
  } else if (x=="petajoules") {
    return 1e15
  } else if (x=="picojoules") {
    return 1e-12
  } else if (x=="planck energies") {
    return 1.95465540929999e9
  } else if (x=="terajoules") {
    return 1e12
  } else if (x=="ton of oil equivalents") {
    return 4.1868e10
  } else if (x=="universe energies") {
    return 1.84467440737096e83
  } else if (x=="yoctojoules") {
    return 1e-24
  } else if (x=="yottajoules") {
    return 1e24
  } else if (x=="zeptojoules") {
    return 1e-21
  } else if (x=="zettajoules") {
    return 1e21
  } else {
    return NaN
  }
}
function energyconverter() {
  energynumberinput = document.getElementById("energynumberinput").value
  energyunitinput = getenergycoefficient(document.getElementById("energyunitinput").value)
  energyunitoutput = getenergycoefficient(document.getElementById("energyunitoutput").value)
  energynumberoutput = energynumberinput*energyunitinput/energyunitoutput
  if ((document.getElementById("energyunitinput").value !== "") && (document.getElementById("energyunitoutput").value !== "")) {
    document.getElementById("energynumberoutput").innerHTML = format(energynumberoutput)
  }
}




// Equivalent dose starts here
var equivalentdosenumberinput = 1
var equivalentdoseunitinput = document.getElementById("equivalentdoseunitinput")
var equivalentdosenumberoutput = 1
var equivalentdoseunitoutput = document.getElementById("equivalentdoseunitoutput")
function getequivalentdosecoefficient(x) {
  if (x=="attosieverts") {
    return 1e-18
  } else if (x=="banana equivalent doses") {
    return 1e-7
  } else if (x=="centisieverts") {
    return 0.01
  } else if (x=="decasieverts") {
    return 10
  } else if (x=="decisieverts") {
    return 0.1
  } else if (x=="exasieverts") {
    return 1e18
  } else if (x=="femtosieverts") {
    return 1e-15
  } else if (x=="gigasieverts") {
    return 1e9
  } else if (x=="hectosieverts") {
    return 100
  } else if (x=="kilosieverts") {
    return 1000
  } else if (x=="megasieverts") {
    return 1000000
  } else if (x=="microsieverts") {
    return 0.000001
  } else if (x=="millisieverts") {
    return 0.001
  } else if (x=="nanosieverts") {
    return 1e-9
  } else if (x=="petasieverts") {
    return 1e15
  } else if (x=="picosieverts") {
    return 1e-12
  } else if (x=="roentgen equivalent mans") {
    return 0.01
  } else if (x=="sieverts") {
    return 1
  } else if (x=="terasieverts") {
    return 1e12
  } else if (x=="yoctosieverts") {
    return 1e-24
  } else if (x=="yottasieverts") {
    return 1e24
  } else if (x=="zeptosieverts") {
    return 1e-21
  } else if (x=="zettasieverts") {
    return 1e21
  } else {
    return NaN
  }
}
function equivalentdoseconverter() {
  equivalentdosenumberinput = document.getElementById("equivalentdosenumberinput").value
  equivalentdoseunitinput = getequivalentdosecoefficient(document.getElementById("equivalentdoseunitinput").value)
  equivalentdoseunitoutput = getequivalentdosecoefficient(document.getElementById("equivalentdoseunitoutput").value)
  equivalentdosenumberoutput = equivalentdosenumberinput*equivalentdoseunitinput/equivalentdoseunitoutput
  if ((document.getElementById("equivalentdoseunitinput").value !== "") && (document.getElementById("equivalentdoseunitoutput").value !== "")) {
    document.getElementById("equivalentdosenumberoutput").innerHTML = format(equivalentdosenumberoutput)
  }
}




// Flow starts here
var flownumberinput = 1
var flowunitinput = document.getElementById("flowunitinput")
var flownumberoutput = 1
var flowunitoutput = document.getElementById("flowunitoutput")
function getflowcoefficient(x) {
  if (x=="Amazon discharges") {
    return 209000
  } else if (x=="cubic attometers per day") {
    return 1.15740740740741e-59
  } else if (x=="cubic attometers per hour") {
    return 2.77777777777778e-58
  } else if (x=="cubic attometers per minute") {
    return 1.66666666666667e-56
  } else if (x=="cubic attometers per second") {
    return 1e-54
  } else if (x=="Brahmaputra discharges") {
    return 19824
  } else if (x=="cubic centimeters per day") {
    return 1.15740740740741e-11
  } else if (x=="cubic centimeters per hour") {
    return 2.77777777777778e-10
  } else if (x=="cubic centimeters per minute") {
    return 1.66666666666667e-8
  } else if (x=="cubic centimeters per second") {
    return 0.000001
  } else if (x=="Congo/Zaire discharges") {
    return 41200
  } else if (x=="cubic feet per second") {
    return 0.028316846592
  } else if (x=="cubic decameters per day") {
    return 0.0115740740740741
  } else if (x=="cubic decameters per hour") {
    return 0.277777777777778
  } else if (x=="cubic decameters per minute") {
    return 16.6666666666667
  } else if (x=="cubic decameters per second") {
    return 1000
  } else if (x=="cubic decimeters per day") {
    return 1.15740740740741e-8
  } else if (x=="cubic decimeters per hour") {
    return 2.77777777777778e-7
  } else if (x=="cubic decimeters per minute") {
    return 1.66666666666667E-05
  } else if (x=="cubic decimeters per second") {
    return 0.001
  } else if (x=="cubic exameters per day") {
    return 1.15740740740741e49
  } else if (x=="cubic exameters per hour") {
    return 2.77777777777778e50
  } else if (x=="cubic exameters per minute") {
    return 1.66666666666667e52
  } else if (x=="cubic exameters per second") {
    return 1e54
  } else if (x=="cubic femtometers per day") {
    return 1.15740740740741e-50
  } else if (x=="cubic femtometers per hour") {
    return 2.77777777777778e-49
  } else if (x=="cubic femtometers per minute") {
    return 1.66666666666667e-47
  } else if (x=="cubic femtometers per second") {
    return 1e-45
  } else if (x=="Ganges discharges") {
    return 38129
  } else if (x=="cubic gigameters per day") {
    return 1.15740740740741e22
  } else if (x=="cubic gigameters per hour") {
    return 2.77777777777778e23
  } else if (x=="cubic gigameters per minute") {
    return 1.66666666666667e25
  } else if (x=="cubic gigameters per second") {
    return 1e27
  } else if (x=="cubic hectometers per day") {
    return 11.5740740740741
  } else if (x=="cubic hectometers per hour") {
    return 277.777777777778
  } else if (x=="cubic hectometers per minute") {
    return 16666.6666666667
  } else if (x=="cubic hectometers per second") {
    return 1000000
  } else if (x=="imperial gallons per minute") {
    return 0.00007576816667
  } else if (x=="cubic kilometers per day") {
    return 11574.0740740741
  } else if (x=="cubic kilometers per hour") {
    return 277777.777777778
  } else if (x=="cubic kilometers per minute") {
    return 1.66666666666667e7
  } else if (x=="cubic kilometers per second") {
    return 1e9
  } else if (x=="Madeira discharges") {
    return 31200
  } else if (x=="cubic megameters per day") {
    return 1.15740740740741e13
  } else if (x=="cubic megameters per hour") {
    return 2.77777777777778e14
  } else if (x=="cubic megameters per minute") {
    return 1.66666666666667e16
  } else if (x=="cubic megameters per second") {
    return 1e18
  } else if (x=="cubic meters per day") {
    return 1.15740740740741E-05
  } else if (x=="cubic meters per hour") {
    return 0.000277777777777778
  } else if (x=="cubic meters per minute") {
    return 0.0166666666666667
  } else if (x=="cubic meters per second") {
    return 1
  } else if (x=="cubic micrometers per day") {
    return 1.15740740740741e-23
  } else if (x=="cubic micrometers per hour") {
    return 2.77777777777778e-22
  } else if (x=="cubic micrometers per minute") {
    return 1.66666666666667e-20
  } else if (x=="cubic micrometers per second") {
    return 1e-18
  } else if (x=="cubic millimeters per day") {
    return 1.15740740740741e-14
  } else if (x=="cubic millimeters per hour") {
    return 2.77777777777778e-13
  } else if (x=="cubic millimeters per minute") {
    return 1.66666666666667e-11
  } else if (x=="cubic millimeters per second") {
    return 1e-9
  } else if (x=="millions of US gallons per day") {
    return 0.04381263639
  } else if (x=="cubic nanometers per day") {
    return 1.15740740740741e-32
  } else if (x=="cubic nanometers per hour") {
    return 2.77777777777778e-31
  } else if (x=="cubic nanometers per minute") {
    return 1.66666666666667e-29
  } else if (x=="cubic nanometers per second") {
    return 1e-27
  } else if (x=="Orinoco discharges") {
    return 37740
  } else if (x=="cubic petameters per day") {
    return 1.15740740740741e40
  } else if (x=="cubic petameters per hour") {
    return 2.77777777777778e41
  } else if (x=="cubic petameters per minute") {
    return 1.66666666666667e43
  } else if (x=="cubic petameters per second") {
    return 1e45
  } else if (x=="cubic picometers per day") {
    return 1.15740740740741e-41
  } else if (x=="cubic picometers per hour") {
    return 2.77777777777778e-40
  } else if (x=="cubic picometers per minute") {
    return 1.66666666666667e-38
  } else if (x=="cubic picometers per second") {
    return 1e-36
  } else if (x=="Rio de la Plata discharges") {
    return 27225
  } else if (x=="Rio Negro discharges") {
    return 35943
  } else if (x=="sverdrup") {
    return 1000000
  } else if (x=="cubic terameters per day") {
    return 1.15740740740741e31
  } else if (x=="cubic terameters per hour") {
    return 2.77777777777778e32
  } else if (x=="cubic terameters per minute") {
    return 1.66666666666667e34
  } else if (x=="cubic terameters per second") {
    return 1e36
  } else if (x=="US gallons per minute") {
    return 0.0000630901964
  } else if (x=="Yangtze discharges") {
    return 30146
  } else if (x=="Yenisei discharges") {
    return 19800
  } else if (x=="cubic yoctometers per day") {
    return 1.15740740740741e-77
  } else if (x=="cubic yoctometers per hour") {
    return 2.77777777777778e-76
  } else if (x=="cubic yoctometers per minute") {
    return 1.66666666666667e-74
  } else if (x=="cubic yoctometers per second") {
    return 1e-72
  } else if (x=="cubic yottameters per day") {
    return 1.15740740740741e67
  } else if (x=="cubic yottameters per hour") {
    return 2.77777777777778e68
  } else if (x=="cubic yottameters per minute") {
    return 1.66666666666667e70
  } else if (x=="cubic yottameters per second") {
    return 1e72
  } else if (x=="cubic zeptometers per day") {
    return 1.15740740740741e-68
  } else if (x=="cubic zeptometers per hour") {
    return 2.77777777777778e-67
  } else if (x=="cubic zeptometers per minute") {
    return 1.66666666666667e-65
  } else if (x=="cubic zeptometers per second") {
    return 1e-63
  } else if (x=="cubic zettameters per day") {
    return 1.15740740740741e58
  } else if (x=="cubic zettameters per hour") {
    return 2.77777777777778e59
  } else if (x=="cubic zettameters per minute") {
    return 1.66666666666667e61
  } else if (x=="cubic zettameters per second") {
    return 1e63
  } else {
    return NaN
  }
}
function flowconverter() {
  flownumberinput = document.getElementById("flownumberinput").value
  flowunitinput = getflowcoefficient(document.getElementById("flowunitinput").value)
  flowunitoutput = getflowcoefficient(document.getElementById("flowunitoutput").value)
  flownumberoutput = flownumberinput*flowunitinput/flowunitoutput
  if ((document.getElementById("flowunitinput").value !== "") && (document.getElementById("flowunitoutput").value !== "")) {
    document.getElementById("flownumberoutput").innerHTML = format(flownumberoutput)
  }
}




// Force starts here
var forcenumberinput = 1
var forceunitinput = document.getElementById("forceunitinput")
var forcenumberoutput = 1
var forceunitoutput = document.getElementById("forceunitoutput")
function getforcecoefficient(x) {
  if (x=="attonewtons") {
    return 1e-18
  } else if (x=="centinewtons") {
    return 0.01
  } else if (x=="decanewtons") {
    return 10
  } else if (x=="decinewtons") {
    return 0.1
  } else if (x=="dynes") {
    return 0.00001
  } else if (x=="exanewtons") {
    return 1e18
  } else if (x=="femtonewtons") {
    return 1e-15
  } else if (x=="giganewtons") {
    return 1e9
  } else if (x=="hectonewtons") {
    return 100
  } else if (x=="kilogram-forces") {
    return 9.80665
  } else if (x=="kilonewtons") {
    return 1000
  } else if (x=="kip") {
    return 4448.222
  } else if (x=="long ton-forces") {
    return 9964.01641818352
  } else if (x=="meganewtons") {
    return 1000000
  } else if (x=="micronewtons") {
    return 0.000001
  } else if (x=="millinewtons") {
    return 0.001
  } else if (x=="nanonewtons") {
    return 1e-9
  } else if (x=="newtons") {
    return 1
  } else if (x=="petanewtons") {
    return 1e15
  } else if (x=="piconewtons") {
    return 1e-12
  } else if (x=="poundals") {
    return 0.138255
  } else if (x=="pound-forces") {
    return 4.448222
  } else if (x=="short ton-forces") {
    return 8896.443230521
  } else if (x=="sthènes") {
    return 1000
  } else if (x=="teranewtons") {
    return 1e12
  } else if (x=="ton-forces") {
    return 9806.65
  } else if (x=="yoctonewtons") {
    return 1e-24
  } else if (x=="yottanewtons") {
    return 1e24
  } else if (x=="zeptonewtons") {
    return 1e-21
  } else if (x=="zettanewtons") {
    return 1e21
  } else {
    return NaN
  }
}
function forceconverter() {
  forcenumberinput = document.getElementById("forcenumberinput").value
  forceunitinput = getforcecoefficient(document.getElementById("forceunitinput").value)
  forceunitoutput = getforcecoefficient(document.getElementById("forceunitoutput").value)
  forcenumberoutput = forcenumberinput*forceunitinput/forceunitoutput
  if ((document.getElementById("forceunitinput").value !== "") && (document.getElementById("forceunitoutput").value !== "")) {
    document.getElementById("forcenumberoutput").innerHTML = format(forcenumberoutput)
  }
}




// Frequency starts here
var frequencynumberinput = 1
var frequencyunitinput = document.getElementById("frequencyunitinput")
var frequencynumberoutput = 1
var frequencyunitoutput = document.getElementById("frequencyunitoutput")
function getfrequencycoefficient(x) {
  if (x=="A#0 note frequencies") {
    return 29.1352350948806
  } else if (x=="A#1 note frequencies") {
    return 58.2704701897613
  } else if (x=="A#2 note frequencies") {
    return 116.540940379522
  } else if (x=="A#3 note frequencies") {
    return 233.081880759045
  } else if (x=="A#4 note frequencies") {
    return 466.16376151809
  } else if (x=="A#5 note frequencies") {
    return 932.32752303618
  } else if (x=="A#6 note frequencies") {
    return 1864.65504607236
  } else if (x=="A#7 note frequencies") {
    return 3729.31009214472
  } else if (x=="A#8 note frequencies") {
    return 7458.62018428944
  } else if (x=="A0 note frequencies") {
    return 27.5
  } else if (x=="A1 note frequencies") {
    return 55
  } else if (x=="A2 note frequencies") {
    return 110
  } else if (x=="A3 note frequencies") {
    return 220
  } else if (x=="A4 note frequencies") {
    return 440
  } else if (x=="A5 note frequencies") {
    return 880
  } else if (x=="A6 note frequencies") {
    return 1760
  } else if (x=="A7 note frequencies") {
    return 3520
  } else if (x=="A8 note frequencies") {
    return 7040
  } else if (x=="attohertz") {
    return 1e-18
  } else if (x=="B0 note frequencies") {
    return 30.8677063285078
  } else if (x=="B1 note frequencies") {
    return 61.7354126570155
  } else if (x=="B2 note frequencies") {
    return 123.470825314031
  } else if (x=="B3 note frequencies") {
    return 246.941650628062
  } else if (x=="B4 note frequencies") {
    return 493.883301256124
  } else if (x=="B5 note frequencies") {
    return 987.766602512248
  } else if (x=="B6 note frequencies") {
    return 1975.5332050245
  } else if (x=="B7 note frequencies") {
    return 3951.06641004899
  } else if (x=="B8 note frequencies") {
    return 7902.13282009799
  } else if (x=="C#0 note frequencies") {
    return 34.647828872109
  } else if (x=="C#1 note frequencies") {
    return 69.295657744218
  } else if (x=="C#2 note frequencies") {
    return 138.591315488436
  } else if (x=="C#3 note frequencies") {
    return 277.182630976872
  } else if (x=="C#4 note frequencies") {
    return 554.365261953744
  } else if (x=="C#5 note frequencies") {
    return 1108.73052390749
  } else if (x=="C#6 note frequencies") {
    return 2217.46104781498
  } else if (x=="C#7 note frequencies") {
    return 4434.92209562995
  } else if (x=="C0 note frequencies") {
    return 32.7031956625748
  } else if (x=="C1 note frequencies") {
    return 65.4063913251497
  } else if (x=="C2 note frequencies") {
    return 130.812782650299
  } else if (x=="C3 note frequencies") {
    return 261.625565300599
  } else if (x=="C4 note frequencies") {
    return 523.251130601197
  } else if (x=="C5 note frequencies") {
    return 1046.50226120239
  } else if (x=="C6 note frequencies") {
    return 2093.00452240479
  } else if (x=="C7 note frequencies") {
    return 4186.00904480958
  } else if (x=="centihertz") {
    return 0.01
  } else if (x=="cyan light frequencies") {
    return 5.45e14
  } else if (x=="D#0 note frequencies") {
    return 38.8908729652601
  } else if (x=="D#1 note frequencies") {
    return 77.7817459305202
  } else if (x=="D#2 note frequencies") {
    return 155.56349186104
  } else if (x=="D#3 note frequencies") {
    return 311.126983722081
  } else if (x=="D#4 note frequencies") {
    return 622.253967444162
  } else if (x=="D#5 note frequencies") {
    return 1244.50793488832
  } else if (x=="D#6 note frequencies") {
    return 2489.01586977665
  } else if (x=="D#7 note frequencies") {
    return 4978.03173955329
  } else if (x=="D0 note frequencies") {
    return 36.7080959896759
  } else if (x=="D1 note frequencies") {
    return 73.4161919793519
  } else if (x=="D2 note frequencies") {
    return 146.832383958704
  } else if (x=="D3 note frequencies") {
    return 293.664767917408
  } else if (x=="D4 note frequencies") {
    return 587.329535834815
  } else if (x=="D5 note frequencies") {
    return 1174.65907166963
  } else if (x=="D6 note frequencies") {
    return 2349.31814333926
  } else if (x=="D7 note frequencies") {
    return 4698.63628667852
  } else if (x=="decahertz") {
    return 10
  } else if (x=="decihertz") {
    return 0.1
  } else if (x=="E0 note frequencies") {
    return 41.2034446141088
  } else if (x=="E1 note frequencies") {
    return 82.4068892282175
  } else if (x=="E2 note frequencies") {
    return 164.813778456435
  } else if (x=="E3 note frequencies") {
    return 329.62755691287
  } else if (x=="E4 note frequencies") {
    return 659.25511382574
  } else if (x=="E5 note frequencies") {
    return 1318.51022765148
  } else if (x=="E6 note frequencies") {
    return 2637.02045530296
  } else if (x=="E7 note frequencies") {
    return 5274.04091060592
  } else if (x=="exahertz") {
    return 1e18
  } else if (x=="F#0 note frequencies") {
    return 46.2493028389543
  } else if (x=="F#1 note frequencies") {
    return 92.4986056779086
  } else if (x=="F#2 note frequencies") {
    return 184.997211355817
  } else if (x=="F#3 note frequencies") {
    return 369.994422711634
  } else if (x=="F#4 note frequencies") {
    return 739.988845423269
  } else if (x=="F#5 note frequencies") {
    return 1479.97769084654
  } else if (x=="F#6 note frequencies") {
    return 2959.95538169308
  } else if (x=="F#7 note frequencies") {
    return 5919.91076338615
  } else if (x=="F0 note frequencies") {
    return 43.6535289291255
  } else if (x=="F1 note frequencies") {
    return 87.307057858251
  } else if (x=="F2 note frequencies") {
    return 174.614115716502
  } else if (x=="F3 note frequencies") {
    return 349.228231433004
  } else if (x=="F4 note frequencies") {
    return 698.456462866008
  } else if (x=="F5 note frequencies") {
    return 1396.91292573202
  } else if (x=="F6 note frequencies") {
    return 2793.82585146403
  } else if (x=="F7 note frequencies") {
    return 5587.65170292806
  } else if (x=="femtohertz") {
    return 1e-15
  } else if (x=="G#0 note frequencies") {
    return 51.9130871974931
  } else if (x=="G#1 note frequencies") {
    return 103.826174394986
  } else if (x=="G#2 note frequencies") {
    return 207.652348789973
  } else if (x=="G#3 note frequencies") {
    return 415.304697579945
  } else if (x=="G#4 note frequencies") {
    return 830.60939515989
  } else if (x=="G#5 note frequencies") {
    return 1661.21879031978
  } else if (x=="G#6 note frequencies") {
    return 3322.43758063956
  } else if (x=="G#7 note frequencies") {
    return 6644.87516127912
  } else if (x=="G0 note frequencies") {
    return 48.9994294977187
  } else if (x=="G1 note frequencies") {
    return 97.9988589954373
  } else if (x=="G2 note frequencies") {
    return 195.997717990875
  } else if (x=="G3 note frequencies") {
    return 391.995435981749
  } else if (x=="G4 note frequencies") {
    return 783.990871963499
  } else if (x=="G5 note frequencies") {
    return 1567.981743927
  } else if (x=="G6 note frequencies") {
    return 3135.96348785399
  } else if (x=="G7 note frequencies") {
    return 6271.92697570798
  } else if (x=="gigahertz") {
    return 1e9
  } else if (x=="green light frequencies") {
    return 5.16e14
  } else if (x=="hectohertz") {
    return 100
  } else if (x=="hertz") {
    return 1
  } else if (x=="indigo light frequencies") {
    return 5.99e14
  } else if (x=="kilohertz") {
    return 1000
  } else if (x=="megahertz") {
    return 1000000
  } else if (x=="microhertz") {
    return 0.000001
  } else if (x=="millihertz") {
    return 0.001
  } else if (x=="nanohertz") {
    return 1e-9
  } else if (x=="orange light frequencies") {
    return 4.62e14
  } else if (x=="petahertz") {
    return 1e15
  } else if (x=="picohertz") {
    return 1e-12
  } else if (x=="red light frequencies") {
    return 4.29e14
  } else if (x=="terahertz") {
    return 1e12
  } else if (x=="violet light frequencies") {
    return 6.66e14
  } else if (x=="yellow light frequencies") {
    return 5e14
  } else if (x=="yoctohertz") {
    return 1e-24
  } else if (x=="yottahertz") {
    return 1e24
  } else if (x=="zeptohertz") {
    return 1e-21
  } else if (x=="zettahertz") {
    return 1e21
  } else {
    return NaN
  }
}
function frequencyconverter() {
  frequencynumberinput = document.getElementById("frequencynumberinput").value
  frequencyunitinput = getfrequencycoefficient(document.getElementById("frequencyunitinput").value)
  frequencyunitoutput = getfrequencycoefficient(document.getElementById("frequencyunitoutput").value)
  frequencynumberoutput = frequencynumberinput*frequencyunitinput/frequencyunitoutput
  if ((document.getElementById("frequencyunitinput").value !== "") && (document.getElementById("frequencyunitoutput").value !== "")) {
    document.getElementById("frequencynumberoutput").innerHTML = format(frequencynumberoutput)
  }
}




// Illuminance starts here
var illuminancenumberinput = 1
var illuminanceunitinput = document.getElementById("illuminanceunitinput")
var illuminancenumberoutput = 1
var illuminanceunitoutput = document.getElementById("illuminanceunitoutput")
function getilluminancecoefficient(x) {
  if (x=="attolux") {
    return 1e-18
  } else if (x=="centilux") {
    return 0.01
  } else if (x=="decalux") {
    return 10
  } else if (x=="decilux") {
    return 0.1
  } else if (x=="exalux") {
    return 1e18
  } else if (x=="femtolux") {
    return 1e-15
  } else if (x=="foot-candles") {
    return 10.7639
  } else if (x=="gigalux") {
    return 1e9
  } else if (x=="hectolux") {
    return 100
  } else if (x=="kilolux") {
    return 1000
  } else if (x=="lux") {
    return 1
  } else if (x=="megalux") {
    return 1000000
  } else if (x=="microlux") {
    return 0.000001
  } else if (x=="millilux") {
    return 0.001
  } else if (x=="nanolux") {
    return 1e-9
  } else if (x=="petalux") {
    return 1e15
  } else if (x=="phots") {
    return 10000
  } else if (x=="picolux") {
    return 1e-12
  } else if (x=="teralux") {
    return 1e12
  } else if (x=="yoctolux") {
    return 1e-24
  } else if (x=="yottalux") {
    return 1e24
  } else if (x=="zeptolux") {
    return 1e-21
  } else if (x=="zettalux") {
    return 1e21
  } else {
    return NaN
  }
}
function illuminanceconverter() {
  illuminancenumberinput = document.getElementById("illuminancenumberinput").value
  illuminanceunitinput = getilluminancecoefficient(document.getElementById("illuminanceunitinput").value)
  illuminanceunitoutput = getilluminancecoefficient(document.getElementById("illuminanceunitoutput").value)
  illuminancenumberoutput = illuminancenumberinput*illuminanceunitinput/illuminanceunitoutput
  if ((document.getElementById("illuminanceunitinput").value !== "") && (document.getElementById("illuminanceunitoutput").value !== "")) {
    document.getElementById("illuminancenumberoutput").innerHTML = format(illuminancenumberoutput)
  }
}




// Information starts here
var informationnumberinput = 1
var informationunitinput = document.getElementById("informationunitinput")
var informationnumberoutput = 1
var informationunitoutput = document.getElementById("informationunitoutput")
function getinformationcoefficient(x) {
  if (x=="bits") {
    return 1
  } else if (x=="bytes") {
    return 8
  } else if (x=="crumbs") {
    return 2
  } else if (x=="exabits") {
    return 1e18
  } else if (x=="exabytes") {
    return 8e18
  } else if (x=="exbibits") {
    return 1.15292150460685e18
  } else if (x=="exbibytes") {
    return 9.22337203685478e18
  } else if (x=="gibibits") {
    return 1.073741824e9
  } else if (x=="gibibytes") {
    return 8.589934592e9
  } else if (x=="gigabits") {
    return 1e9
  } else if (x=="gigabytes") {
    return 8e9
  } else if (x=="kibibits") {
    return 1024
  } else if (x=="kibibytes") {
    return 8192
  } else if (x=="kilobits") {
    return 1000
  } else if (x=="kilobytes") {
    return 8000
  } else if (x=="mebibits") {
    return 1.048576e6
  } else if (x=="mebibytes") {
    return 8.388608e6
  } else if (x=="megabits") {
    return 1000000
  } else if (x=="megabytes") {
    return 8e6
  } else if (x=="nibbles") {
    return 4
  } else if (x=="pebibits") {
    return 1.12589990684262e15
  } else if (x=="pebibytes") {
    return 9.00719925474099e15
  } else if (x=="petabits") {
    return 1e15
  } else if (x=="petabytes") {
    return 8e15
  } else if (x=="tebibits") {
    return 1.099511627776e12
  } else if (x=="tebibytes") {
    return 8.796093022208e12
  } else if (x=="terabits") {
    return 1e12
  } else if (x=="terabytes") {
    return 8e12
  } else if (x=="trits") {
    return 1.58496250072116
  } else if (x=="yobibits") {
    return 1.20892581961463e24
  } else if (x=="yobibytes") {
    return 9.67140655691703e24
  } else if (x=="yottabits") {
    return 1e24
  } else if (x=="yottabytes") {
    return 8e24
  } else if (x=="zebibits") {
    return 1.18059162071741e21
  } else if (x=="zebibytes") {
    return 9.44473296573929e21
  } else if (x=="zettabits") {
    return 1e21
  } else if (x=="zettabytes") {
    return 8e21
  } else {
    return NaN
  }
}
function informationconverter() {
  informationnumberinput = document.getElementById("informationnumberinput").value
  informationunitinput = getinformationcoefficient(document.getElementById("informationunitinput").value)
  informationunitoutput = getinformationcoefficient(document.getElementById("informationunitoutput").value)
  informationnumberoutput = informationnumberinput*informationunitinput/informationunitoutput
  if ((document.getElementById("informationunitinput").value !== "") && (document.getElementById("informationunitoutput").value !== "")) {
    document.getElementById("informationnumberoutput").innerHTML = format(informationnumberoutput)
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
    return NaN
  }
}
function lengthconverter() {
  lengthnumberinput = document.getElementById("lengthnumberinput").value
  lengthunitinput = getlengthcoefficient(document.getElementById("lengthunitinput").value)
  lengthunitoutput = getlengthcoefficient(document.getElementById("lengthunitoutput").value)
  lengthnumberoutput = lengthnumberinput*lengthunitinput/lengthunitoutput
  if ((document.getElementById("lengthunitinput").value !== "") && (document.getElementById("lengthunitoutput").value !== "")) {
    document.getElementById("lengthnumberoutput").innerHTML = format(lengthnumberoutput)
  }
}




// Luminous flux starts here
var luminousfluxnumberinput = 1
var luminousfluxunitinput = document.getElementById("luminousfluxunitinput")
var luminousfluxnumberoutput = 1
var luminousfluxunitoutput = document.getElementById("luminousfluxunitoutput")
function getluminousfluxcoefficient(x) {
  if (x=="attolumens") {
    return 1e-18
  } else if (x=="centilumens") {
    return 0.01
  } else if (x=="decalumens") {
    return 10
  } else if (x=="decilumens") {
    return 0.1
  } else if (x=="exalumens") {
    return 1e18
  } else if (x=="femtolumens") {
    return 1e-15
  } else if (x=="gigalumens") {
    return 1e9
  } else if (x=="hectalumens") {
    return 100
  } else if (x=="kilolumens") {
    return 1000
  } else if (x=="lumens") {
    return 1
  } else if (x=="megalumens") {
    return 1000000
  } else if (x=="microlumens") {
    return 0.000001
  } else if (x=="millilumens") {
    return 0.001
  } else if (x=="nanolumens") {
    return 1e-9
  } else if (x=="newly manufactured 100 W fluorescent lamps (approximate)") {
    return 8000
  } else if (x=="newly manufactured 100 W incandescent lamps (approximate)") {
    return 1750
  } else if (x=="newly manufactured 127 W low pressure sodium vapor lamps (approximate)") {
    return 25000
  } else if (x=="newly manufactured 15mW green lasers (approximate)") {
    return 8.4
  } else if (x=="newly manufactured 18 W fluorescent lamps (approximate)") {
    return 1250
  } else if (x=="newly manufactured 40 W fluorescent lamps (approximate)") {
    return 2800
  } else if (x=="newly manufactured 400 W metal-halide lamps (approximate)") {
    return 40000
  } else if (x=="newly manufactured 6 W COB filament LED lamps (approximate)") {
    return 600
  } else if (x=="newly manufactured 7 W high-output white LED's (approximate)") {
    return 450
  } else if (x=="newly manufactured kerosene lanterns (approximate)") {
    return 100
  } else if (x=="petalumens") {
    return 1e15
  } else if (x=="picolumens") {
    return 1e-12
  } else if (x=="teralumens") {
    return 1e12
  } else if (x=="yoctolumens") {
    return 1e-24
  } else if (x=="yottalumens") {
    return 1e24
  } else if (x=="zeptolumens") {
    return 1e-21
  } else if (x=="zettalumens") {
    return 1e21
  } else {
    return NaN
  }
}
function luminousfluxconverter() {
  luminousfluxnumberinput = document.getElementById("luminousfluxnumberinput").value
  luminousfluxunitinput = getluminousfluxcoefficient(document.getElementById("luminousfluxunitinput").value)
  luminousfluxunitoutput = getluminousfluxcoefficient(document.getElementById("luminousfluxunitoutput").value)
  luminousfluxnumberoutput = luminousfluxnumberinput*luminousfluxunitinput/luminousfluxunitoutput
  if ((document.getElementById("luminousfluxunitinput").value !== "") && (document.getElementById("luminousfluxunitoutput").value !== "")) {
    document.getElementById("luminousfluxnumberoutput").innerHTML = format(luminousfluxnumberoutput)
  }
}




// Luminous intensity starts here
var luminousintensitynumberinput = 1
var luminousintensityunitinput = document.getElementById("luminousintensityunitinput")
var luminousintensitynumberoutput = 1
var luminousintensityunitoutput = document.getElementById("luminousintensityunitoutput")
function getluminousintensitycoefficient(x) {
  if (x=="attocandela") {
    return 1e-18
  } else if (x=="candela") {
    return 1
  } else if (x=="candlepower") {
    return 1.02
  } else if (x=="centicandela") {
    return 0.01
  } else if (x=="decacandela") {
    return 10
  } else if (x=="decicandela") {
    return 0.1
  } else if (x=="exacandela") {
    return 1e18
  } else if (x=="femtocandela") {
    return 1e-15
  } else if (x=="gigacandela") {
    return 1e9
  } else if (x=="hectacandela") {
    return 100
  } else if (x=="Hefnerkerze") {
    return 0.92
  } else if (x=="kilocandela") {
    return 1000
  } else if (x=="megacandela") {
    return 1000000
  } else if (x=="microcandela") {
    return 0.000001
  } else if (x=="millicandela") {
    return 0.001
  } else if (x=="nanocandela") {
    return 1e-9
  } else if (x=="petacandela") {
    return 1e15
  } else if (x=="picocandela") {
    return 1e-12
  } else if (x=="teracandela") {
    return 1e12
  } else if (x=="yoctocandela") {
    return 1e-24
  } else if (x=="yottacandela") {
    return 1e24
  } else if (x=="zeptocandela") {
    return 1e-21
  } else if (x=="zettacandela") {
    return 1e21
  } else {
    return NaN
  }
}
function luminousintensityconverter() {
  luminousintensitynumberinput = document.getElementById("luminousintensitynumberinput").value
  luminousintensityunitinput = getluminousintensitycoefficient(document.getElementById("luminousintensityunitinput").value)
  luminousintensityunitoutput = getluminousintensitycoefficient(document.getElementById("luminousintensityunitoutput").value)
  luminousintensitynumberoutput = luminousintensitynumberinput*luminousintensityunitinput/luminousintensityunitoutput
  if ((document.getElementById("luminousintensityunitinput").value !== "") && (document.getElementById("luminousintensityunitoutput").value !== "")) {
    document.getElementById("luminousintensitynumberoutput").innerHTML = format(luminousintensitynumberoutput)
  }
}




// Magnetic flux starts here
var magneticfluxnumberinput = 1
var magneticfluxunitinput = document.getElementById("magneticfluxunitinput")
var magneticfluxnumberoutput = 1
var magneticfluxunitoutput = document.getElementById("magneticfluxunitoutput")
function getmagneticfluxcoefficient(x) {
  if (x=="attoweber") {
    return 1e-18
  } else if (x=="centiweber") {
    return 0.01
  } else if (x=="decaweber") {
    return 10
  } else if (x=="deciweber") {
    return 0.1
  } else if (x=="exaweber") {
    return 1e18
  } else if (x=="femtoweber") {
    return 1e-15
  } else if (x=="gigaweber") {
    return 1e9
  } else if (x=="hectaweber") {
    return 100
  } else if (x=="kilolines") {
    return 0.00001
  } else if (x=="kiloweber") {
    return 1000
  } else if (x=="lines") {
    return 1e-8
  } else if (x=="maxwell") {
    return 1e-8
  } else if (x=="megalines") {
    return 0.01
  } else if (x=="megaweber") {
    return 1000000
  } else if (x=="microweber") {
    return 0.000001
  } else if (x=="milliweber") {
    return 0.001
  } else if (x=="nanoweber") {
    return 1e-9
  } else if (x=="petaweber") {
    return 1e15
  } else if (x=="picoweber") {
    return 1e-12
  } else if (x=="teraweber") {
    return 1e12
  } else if (x=="weber") {
    return 1
  } else if (x=="yoctoweber") {
    return 1e-24
  } else if (x=="yottaweber") {
    return 1e24
  } else if (x=="zeptoweber") {
    return 1e-21
  } else if (x=="zettaweber") {
    return 1e21
  } else {
    return NaN
  }
}
function magneticfluxconverter() {
  magneticfluxnumberinput = document.getElementById("magneticfluxnumberinput").value
  magneticfluxunitinput = getmagneticfluxcoefficient(document.getElementById("magneticfluxunitinput").value)
  magneticfluxunitoutput = getmagneticfluxcoefficient(document.getElementById("magneticfluxunitoutput").value)
  magneticfluxnumberoutput = magneticfluxnumberinput*magneticfluxunitinput/magneticfluxunitoutput
  if ((document.getElementById("magneticfluxunitinput").value !== "") && (document.getElementById("magneticfluxunitoutput").value !== "")) {
    document.getElementById("magneticfluxnumberoutput").innerHTML = format(magneticfluxnumberoutput)
  }
}




// Mass starts here
var massnumberinput = 1
var massunitinput = document.getElementById("massunitinput")
var massnumberoutput = 1
var massunitoutput = document.getElementById("massunitoutput")
function getmasscoefficient(x) {
  if (x=="attograms") {
    return 1e-18
  } else if (x=="avoirdupois (regular) ounces") {
    return 28.34952
  } else if (x=="avoirdupois pounds") {
    return 453.59237
  } else if (x=="centigrams") {
    return 0.01
  } else if (x=="daltons") {
    return 1.6605390666e-30
  } else if (x=="decagrams") {
    return 10
  } else if (x=="decigrams") {
    return 0.1
  } else if (x=="Earth masses") {
    return 5.9722e27
  } else if (x=="eighths") {
    return 3.54369
  } else if (x=="electronvolts") {
    return 1.782662e-39
  } else if (x=="exagrams") {
    return 1e18
  } else if (x=="femtograms") {
    return 1e-15
  } else if (x=="gigagrams") {
    return 1e9
  } else if (x=="grains") {
    return 0.06479891
  } else if (x=="grams") {
    return 1
  } else if (x=="hectograms") {
    return 100
  } else if (x=="Jovian masses") {
    return 1.89813e30
  } else if (x=="kilograms") {
    return 1000
  } else if (x=="Lunar masses") {
    return 7.34767309e25
  } else if (x=="Martian masses") {
    return 6.39e26
  } else if (x=="megagrams") {
    return 1000000
  } else if (x=="Mercurian masses") {
    return 3.285e26
  } else if (x=="metric exatons") {
    return 1e24
  } else if (x=="metric gigatons") {
    return 1e15
  } else if (x=="metric kilotons") {
    return 1e9
  } else if (x=="metric megatons") {
    return 1e12
  } else if (x=="metric petatons") {
    return 1e21
  } else if (x=="metric teratons") {
    return 1e18
  } else if (x=="metric tons") {
    return 1000000
  } else if (x=="metric yottatons") {
    return 1e30
  } else if (x=="metric zettatons") {
    return 1e27
  } else if (x=="micrograms") {
    return 0.000001
  } else if (x=="milligrams") {
    return 0.001
  } else if (x=="nanograms") {
    return 1e-9
  } else if (x=="Neptunian masses") {
    return 1.024e29
  } else if (x=="pennyweights") {
    return 1.55517384
  } else if (x=="petagrams") {
    return 1e15
  } else if (x=="picograms") {
    return 1e-12
  } else if (x=="planck masses") {
    return 0.00002176434
  } else if (x=="Plutonian masses") {
    return 1.309e25
  } else if (x=="Sagittarius A masses") {
    return 8.1549e39
  } else if (x=="Saturnian masses") {
    return 5.683e29
  } else if (x=="slugs") {
    return 14593.88091238
  } else if (x=="solar masses") {
    return 1.989e33
  } else if (x=="stone") {
    return 6350.29318
  } else if (x=="teragrams") {
    return 1e12
  } else if (x=="troy ounces") {
    return 31.1034768
  } else if (x=="troy pounds") {
    return 373.2417216
  } else if (x=="UK (long) tons") {
    return 1.0160469088e6
  } else if (x=="universe masses") {
    return 1.5e56
  } else if (x=="Uranian masses") {
    return 8.681e28
  } else if (x=="US (short) tons") {
    return 907184.74
  } else if (x=="Venusian (cytherean) masses") {
    return 4.867e27
  } else if (x=="yoctograms") {
    return 1e-24
  } else if (x=="yottagrams") {
    return 1e24
  } else if (x=="zeptograms") {
    return 1e-21
  } else if (x=="zettagrams") {
    return 1e21
  } else {
    return NaN
  }
}
function massconverter() {
  massnumberinput = document.getElementById("massnumberinput").value
  massunitinput = getmasscoefficient(document.getElementById("massunitinput").value)
  massunitoutput = getmasscoefficient(document.getElementById("massunitoutput").value)
  massnumberoutput = massnumberinput*massunitinput/massunitoutput
  if ((document.getElementById("massunitinput").value !== "") && (document.getElementById("massunitoutput").value !== "")) {
    document.getElementById("massnumberoutput").innerHTML = format(massnumberoutput)
  }
}




// Power starts here
var powernumberinput = 1
var powerunitinput = document.getElementById("powerunitinput")
var powernumberoutput = 1
var powerunitoutput = document.getElementById("powerunitoutput")
function getpowercoefficient(x) {
  if (x=="attowatts") {
    return 1e-18
  } else if (x=="boiler horsepower") {
    return 9810.657
  } else if (x=="british thermal units per hour") {
    return 0.293071070172222
  } else if (x=="british thermal units per minute") {
    return 17.5842642103333
  } else if (x=="british thermal units per second") {
    return 1055.05585262
  } else if (x=="calories per second") {
    return 4.1868
  } else if (x=="centiwatts") {
    return 0.01
  } else if (x=="decawatts") {
    return 10
  } else if (x=="deciwatts") {
    return 0.1
  } else if (x=="electrical horsepower") {
    return 746
  } else if (x=="exawatts") {
    return 1e18
  } else if (x=="femtowatts") {
    return 1e-15
  } else if (x=="foot-pound forces per hour") {
    return 0.000376616096758722
  } else if (x=="foot-pound forces per minute") {
    return 0.0225969658055233
  } else if (x=="foot-pound forces per second") {
    return 1.3558179483314
  } else if (x=="gigawatts") {
    return 1e9
  } else if (x=="hectowatts") {
    return 100
  } else if (x=="kilowatts") {
    return 1000
  } else if (x=="mechanical horsepower") {
    return 745.69987158227
  } else if (x=="megawatts") {
    return 1000000
  } else if (x=="metric horsepower") {
    return 735.49875
  } else if (x=="microwatts") {
    return 0.000001
  } else if (x=="milliwatts") {
    return 0.001
  } else if (x=="nanowatts") {
    return 1e-9
  } else if (x=="petawatts") {
    return 1e15
  } else if (x=="picowatts") {
    return 1e-12
  } else if (x=="poncelets") {
    return 980.665
  } else if (x=="terawatts") {
    return 1e12
  } else if (x=="tons of air conditioning") {
    return 3516.85284206667
  } else if (x=="watts") {
    return 1
  } else if (x=="yoctowatts") {
    return 1e-24
  } else if (x=="yottawatts") {
    return 1e24
  } else if (x=="zeptowatts") {
    return 1e-21
  } else if (x=="zettawatts") {
    return 1e21
  } else {
    return NaN
  }
}
function powerconverter() {
  powernumberinput = document.getElementById("powernumberinput").value
  powerunitinput = getpowercoefficient(document.getElementById("powerunitinput").value)
  powerunitoutput = getpowercoefficient(document.getElementById("powerunitoutput").value)
  powernumberoutput = powernumberinput*powerunitinput/powerunitoutput
  if ((document.getElementById("powerunitinput").value !== "") && (document.getElementById("powerunitoutput").value !== "")) {
    document.getElementById("powernumberoutput").innerHTML = format(powernumberoutput)
  }
}




// Pressure starts here
var pressurenumberinput = 1
var pressureunitinput = document.getElementById("pressureunitinput")
var pressurenumberoutput = 1
var pressureunitoutput = document.getElementById("pressureunitoutput")
function getpressurecoefficient(x) {
  if (x=="attopascals") {
    return 1e-18
  } else if (x=="bars") {
    return 100000
  } else if (x=="baryes") {
    return 0.1
  } else if (x=="centipascals") {
    return 0.01
  } else if (x=="decapascals") {
    return 10
  } else if (x=="decipascals") {
    return 0.1
  } else if (x=="exapascals") {
    return 1e18
  } else if (x=="femtopascals") {
    return 1e-15
  } else if (x=="gigapascals") {
    return 1e9
  } else if (x=="hectopascals") {
    return 100
  } else if (x=="inches of mercury (0°C)") {
    return 3386.38
  } else if (x=="inches of mercury (16°C)") {
    return 3376.85
  } else if (x=="inches of mercury (conventional)") {
    return 3386.388640341
  } else if (x=="kilopascals") {
    return 1000
  } else if (x=="megapascals") {
    return 1000000
  } else if (x=="micropascals") {
    return 0.000001
  } else if (x=="millimetres of mercury") {
    return 133.322387415
  } else if (x=="millipascals") {
    return 0.001
  } else if (x=="nanopascals") {
    return 1e-9
  } else if (x=="pascals") {
    return 1
  } else if (x=="petapascals") {
    return 1e15
  } else if (x=="picopascals") {
    return 1e-12
  } else if (x=="pounds per square inch") {
    return 6894.757
  } else if (x=="standard atmospheres") {
    return 101325
  } else if (x=="terapascals") {
    return 1e12
  } else if (x=="torr") {
    return 133.322368421053
  } else if (x=="yoctopascals") {
    return 1e-24
  } else if (x=="yottapascals") {
    return 1e24
  } else if (x=="zeptopascals") {
    return 1e-21
  } else if (x=="zettapascals") {
    return 1e21
  } else {
    return NaN
  }
}
function pressureconverter() {
  pressurenumberinput = document.getElementById("pressurenumberinput").value
  pressureunitinput = getpressurecoefficient(document.getElementById("pressureunitinput").value)
  pressureunitoutput = getpressurecoefficient(document.getElementById("pressureunitoutput").value)
  pressurenumberoutput = pressurenumberinput*pressureunitinput/pressureunitoutput
  if ((document.getElementById("pressureunitinput").value !== "") && (document.getElementById("pressureunitoutput").value !== "")) {
    document.getElementById("pressurenumberoutput").innerHTML = format(pressurenumberoutput)
  }
}




// Radioactivity starts here
var radioactivitynumberinput = 1
var radioactivityunitinput = document.getElementById("radioactivityunitinput")
var radioactivitynumberoutput = 1
var radioactivityunitoutput = document.getElementById("radioactivityunitoutput")
function getradioactivitycoefficient(x) {
  if (x=="attobecquerels") {
    return 1e-18
  } else if (x=="becquerels") {
    return 1
  } else if (x=="centibecquerels") {
    return 0.01
  } else if (x=="curies") {
    return 3.7e10
  } else if (x=="decabecquerels") {
    return 10
  } else if (x=="decibecquerels") {
    return 0.1
  } else if (x=="exabecquerels") {
    return 1e18
  } else if (x=="femtobecquerels") {
    return 1e-15
  } else if (x=="gigabecquerels") {
    return 1e9
  } else if (x=="hectobecquerels") {
    return 100
  } else if (x=="kilobecquerels") {
    return 1000
  } else if (x=="megabecquerels") {
    return 1000000
  } else if (x=="microbecquerels") {
    return 0.000001
  } else if (x=="millibecquerels") {
    return 0.001
  } else if (x=="nanobecquerels") {
    return 1e-9
  } else if (x=="petabecquerels") {
    return 1e15
  } else if (x=="picobecquerels") {
    return 1e-12
  } else if (x=="rutherfords") {
    return 1000000
  } else if (x=="terabecquerels") {
    return 1e12
  } else if (x=="yoctobecquerels") {
    return 1e-24
  } else if (x=="yottabecquerels") {
    return 1e24
  } else if (x=="zeptobecquerels") {
    return 1e-21
  } else if (x=="zettabecquerels") {
    return 1e21
  } else {
    return NaN
  }
}
function radioactivityconverter() {
  radioactivitynumberinput = document.getElementById("radioactivitynumberinput").value
  radioactivityunitinput = getradioactivitycoefficient(document.getElementById("radioactivityunitinput").value)
  radioactivityunitoutput = getradioactivitycoefficient(document.getElementById("radioactivityunitoutput").value)
  radioactivitynumberoutput = radioactivitynumberinput*radioactivityunitinput/radioactivityunitoutput
  if ((document.getElementById("radioactivityunitinput").value !== "") && (document.getElementById("radioactivityunitoutput").value !== "")) {
    document.getElementById("radioactivitynumberoutput").innerHTML = format(radioactivitynumberoutput)
  }
}




// Solid angle starts here
var solidanglenumberinput = 1
var solidangleunitinput = document.getElementById("solidangleunitinput")
var solidanglenumberoutput = 1
var solidangleunitoutput = document.getElementById("solidangleunitoutput")
function getsolidanglecoefficient(x) {
  if (x=="spats") {
    return 1
  } else if (x=="square degrees") {
    return 2.42406840554768E-05
  } else if (x=="steradians") {
    return 0.0795774715459477
  } else {
    return NaN
  }
}
function solidangleconverter() {
  solidanglenumberinput = document.getElementById("solidanglenumberinput").value
  solidangleunitinput = getsolidanglecoefficient(document.getElementById("solidangleunitinput").value)
  solidangleunitoutput = getsolidanglecoefficient(document.getElementById("solidangleunitoutput").value)
  solidanglenumberoutput = solidanglenumberinput*solidangleunitinput/solidangleunitoutput
  if ((document.getElementById("solidangleunitinput").value !== "") && (document.getElementById("solidangleunitoutput").value !== "")) {
    document.getElementById("solidanglenumberoutput").innerHTML = format(solidanglenumberoutput)
  }
}




// Speed starts here
var speednumberinput = 1
var speedunitinput = document.getElementById("speedunitinput")
var speednumberoutput = 1
var speedunitoutput = document.getElementById("speedunitoutput")
function getspeedcoefficient(x) {
  if (x=="angstroms per second") {
    return 1e-10
  } else if (x=="astronomical units per second") {
    return 149597870700
  } else if (x=="attometers per second") {
    return 1e-18
  } else if (x=="cana per second") {
    return 2
  } else if (x=="centimeters per second") {
    return 0.01
  } else if (x=="chains per second") {
    return 20.1168
  } else if (x=="Chinese chi per second") {
    return 0.33333333333333333
  } else if (x=="cubits per second") {
    return 0.4572
  } else if (x=="decameters per second") {
    return 10
  } else if (x=="decimeters per second") {
    return 0.1
  } else if (x=="Earth radii per second") {
    return 6378100
  } else if (x=="exameters per second") {
    return 1e18
  } else if (x=="fathoms per second") {
    return 1.8288
  } else if (x=="feet per second") {
    return 0.3048
  } else if (x=="femtometers per second") {
    return 1e-15
  } else if (x=="furlongs per second") {
    return 201.168
  } else if (x=="gigameters per second") {
    return 1e9
  } else if (x=="hectometers per second") {
    return 100
  } else if (x=="Hong Kong chi per second") {
    return 0.371475
  } else if (x=="Hubble lengths per second") {
    return 1.3640557e26
  } else if (x=="inches per second") {
    return 0.0254
  } else if (x=="kilometers per hour") {
    return 0.27777777777778
  } else if (x=="kilometers per second") {
    return 1000
  } else if (x=="knots") {
    return 1852/3600
  } else if (x=="leagues per second") {
    return 5556
  } else if (x=="li per second") {
    return 500
  } else if (x=="light years per second") {
    return 9460528412464108
  } else if (x=="links per second") {
    return 0.201168
  } else if (x=="lunar distances per second") {
    return 384399000
  } else if (x=="megameters per second") {
    return 1000000
  } else if (x=="meters per hour") {
    return 0.00027777777778
  } else if (x=="meters per second") {
    return 1
  } else if (x=="micrometers per second") {
    return 0.000001
  } else if (x=="miles per hour") {
    return 0.44704
  } else if (x=="miles per second") {
    return 1609.344
  } else if (x=="millimeters per second") {
    return 0.001
  } else if (x=="nanometers per second") {
    return 1e-9
  } else if (x=="nautical miles per second") {
    return 1852
  } else if (x=="observable universes per second") {
    return 879980510813761469728000000
  } else if (x=="parsecs per second") {
    return 3.0856775815e16
  } else if (x=="petameters per second") {
    return 1e15
  } else if (x=="picometers per second") {
    return 1e-12
  } else if (x=="planck lengths per second") {
    return 1.616255e-35
  } else if (x=="rods per second") {
    return 5.0292
  } else if (x=="shaku per second") {
    return 0.30303030303030303
  } else if (x=="speeds of light") {
    return 299792458
  } else if (x=="terameters per second") {
    return 1e12
  } else if (x=="yards per second") {
    return 0.9144
  } else if (x=="yoctometers per second") {
    return 1e-24
  } else if (x=="yottameters per second") {
    return 1e24
  } else if (x=="zeptometers per second") {
    return 1e-21
  } else if (x=="zettameters per second") {
    return 1e21
  } else {
    return NaN
  }
}
function speedconverter() {
  speednumberinput = document.getElementById("speednumberinput").value
  speedunitinput = getspeedcoefficient(document.getElementById("speedunitinput").value)
  speedunitoutput = getspeedcoefficient(document.getElementById("speedunitoutput").value)
  speednumberoutput = speednumberinput*speedunitinput/speedunitoutput
  if ((document.getElementById("speedunitinput").value !== "") && (document.getElementById("speedunitoutput").value !== "")) {
    document.getElementById("speednumberoutput").innerHTML = format(speednumberoutput)
  }
}




// Substance amount starts here
var substanceamountnumberinput = 1
var substanceamountunitinput = document.getElementById("substanceamountunitinput")
var substanceamountnumberoutput = 1
var substanceamountunitoutput = document.getElementById("substanceamountunitoutput")
function getsubstanceamountcoefficient(x) {
  if (x=="attomoles") {
    return 1e-18
  } else if (x=="centimoles") {
    return 0.01
  } else if (x=="decamoles") {
    return 10
  } else if (x=="decimoles") {
    return 0.1
  } else if (x=="elementary entities") {
    return 1.66053906717385e-24
  } else if (x=="examoles") {
    return 1e18
  } else if (x=="femtomoles") {
    return 1e-15
  } else if (x=="gigamoles") {
    return 1e9
  } else if (x=="hectomoles") {
    return 100
  } else if (x=="kilomoles") {
    return 1000
  } else if (x=="megamoles") {
    return 1000000
  } else if (x=="micromoles") {
    return 0.000001
  } else if (x=="millimoles") {
    return 0.001
  } else if (x=="moles") {
    return 1
  } else if (x=="nanomoles") {
    return 1e-9
  } else if (x=="petamoles") {
    return 1e15
  } else if (x=="picomoles") {
    return 1e-12
  } else if (x=="pound-moles") {
    return 453.59237
  } else if (x=="teramoles") {
    return 1e12
  } else if (x=="yoctomoles") {
    return 1e-24
  } else if (x=="yottamoles") {
    return 1e24
  } else if (x=="zeptomoles") {
    return 1e-21
  } else if (x=="zettamoles") {
    return 1e21
  } else {
    return NaN
  }
}
function substanceamountconverter() {
  substanceamountnumberinput = document.getElementById("substanceamountnumberinput").value
  substanceamountunitinput = getsubstanceamountcoefficient(document.getElementById("substanceamountunitinput").value)
  substanceamountunitoutput = getsubstanceamountcoefficient(document.getElementById("substanceamountunitoutput").value)
  substanceamountnumberoutput = substanceamountnumberinput*substanceamountunitinput/substanceamountunitoutput
  if ((document.getElementById("substanceamountunitinput").value !== "") && (document.getElementById("substanceamountunitoutput").value !== "")) {
    document.getElementById("substanceamountnumberoutput").innerHTML = format(substanceamountnumberoutput)
  }
}




// Temperature starts here
var temperaturenumberinput = 1
var temperatureunitinput = document.getElementById("temperatureunitinput")
var temperaturenumberoutput = 1
var temperatureunitoutput = document.getElementById("temperatureunitoutput")
function fromCto(x,y) {
  y=Number(y)
  if (x=="Celsius degrees") {
    return y
  } else if (x=="Fahrenheit degrees") {
    return 32+1.8*y
  } else if (x=="Kelvin degrees") {
    return 273.15+y
  } else if (x=="Newton degrees") {
    return 0.33*y
  } else if (x=="Rankine degrees") {
    return 1.8*y-459.67
  } else if (x=="Réaumur degrees") {
    return y*0.8
  } else {
    return NaN
  }
}
function toCfrom(x,y) {
  y=Number(y)
  if (x=="Celsius degrees") {
    return y
  } else if (x=="Fahrenheit degrees") {
    return (y-32)/1.8
  } else if (x=="Kelvin degrees") {
    return y-273.15
  } else if (x=="Newton degrees") {
    return y/0.33
  } else if (x=="Rankine degrees") {
    return (y+459.67)/1.8
  } else if (x=="Réaumur degrees") {
    return y*1.25
  } else {
    return NaN
  }
}
function temperatureconverter() {
  temperaturenumberinput = document.getElementById("temperaturenumberinput").value
  temperatureunitinput = document.getElementById("temperatureunitinput").value
  temperatureunitoutput = document.getElementById("temperatureunitoutput").value
  temperaturenumberoutput = fromCto(temperatureunitoutput,toCfrom(temperatureunitinput,temperaturenumberinput))
  if ((document.getElementById("temperatureunitinput").value !== "") && (document.getElementById("temperatureunitoutput").value !== "")) {
    document.getElementById("temperaturenumberoutput").innerHTML = format(temperaturenumberoutput)
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
  } else if (x=="Jovian days") {
    return 35730
  } else if (x=="Jovian years") {
    return 374300334
  } else if (x=="kiloseconds") {
    return 1000
  } else if (x=="leap years") {
    return 31622400
  } else if (x=="Martian days") {
    return 88755.244
  } else if (x=="Martian years") {
    return 59355048.24
  } else if (x=="megaannums") {
    return 3.155692599e13
  } else if (x=="megaseconds") {
    return 1000000
  } else if (x=="Mercurian days") {
    return 5067000
  } else if (x=="Mercurian years") {
    return 7600530.24
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
  } else if (x=="Neptunian days") {
    return 57996
  } else if (x=="Neptunian years") {
    return 5200269936
  } else if (x=="petaseconds") {
    return 1e15
  } else if (x=="picoseconds") {
    return 1e-12
  } else if (x=="planck times") {
    return 5.3912e-44
  } else if (x=="Plutonian days") {
    return 552960
  } else if (x=="Plutonian years") {
    return 7824384000
  } else if (x=="Saturnian days") {
    return 38018
  } else if (x=="Saturnian years") {
    return 929318400
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
  } else if (x=="Uranian days") {
    return 62035.2
  } else if (x=="Uranian years") {
    return 2651356800
  } else if (x=="Venusian (cytherean) days") {
    return 10087200
  } else if (x=="Venusian (cytherean) years") {
    return 20997360
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
    return NaN
  }
}
function timeconverter() {
  timenumberinput = document.getElementById("timenumberinput").value
  timeunitinput = gettimecoefficient(document.getElementById("timeunitinput").value)
  timeunitoutput = gettimecoefficient(document.getElementById("timeunitoutput").value)
  timenumberoutput = timenumberinput*timeunitinput/timeunitoutput
  if ((document.getElementById("timeunitinput").value !== "") && (document.getElementById("timeunitoutput").value !== "")) {
    document.getElementById("timenumberoutput").innerHTML = format(timenumberoutput)
  }
}





function loop() {
  absorbeddoseconverter()
  accelerationconverter()
  angleconverter()
  areaconverter()
  catalyticactivityconverter()
  densityconverter()
  electricalresistanceconverter()
  electricchargeconverter()
  electriccurrentconverter()
  energyconverter()
  equivalentdoseconverter()
  flowconverter()
  forceconverter()
  frequencyconverter()
  illuminanceconverter()
  informationconverter()
  lengthconverter()
  luminousfluxconverter()
  luminousintensityconverter()
  magneticfluxconverter()
  massconverter()
  powerconverter()
  pressureconverter()
  radioactivityconverter()
  solidangleconverter()
  speedconverter()
  substanceamountconverter()
  temperatureconverter()
  timeconverter()
}
setInterval(loop,100); // Makes the page update automatically
