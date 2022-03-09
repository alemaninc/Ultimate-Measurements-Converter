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
    return 0.0000462962963
  } else if (x=="arcseconds") {
    return 0.0000007716049383
  } else if (x=="binary degrees") {
    return 0.00390625
  } else if (x=="degrees") {
    return 0.002777777777778
  } else if (x=="diameter parts") {
    return 0.00530516477
  } else if (x=="gradians") {
    return 0.0025
  } else if (x=="hour angles") {
    return 0.041666666666667
  } else if (x=="milliradians") {
    return 0.0001591549431
  } else if (x=="points") {
    return 0.03125
  } else if (x=="quadrants") {
    return 0.25
  } else if (x=="quarter-points") {
    return 0.0078125
  } else if (x=="radians") {
    return 0.1591549431
  } else if (x=="sextants") {
    return 0.16666666666667
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
  } else if  (x=="attocoulombs") {
    return 1e-18
  } else if  (x=="coulombs") {
    return 1
  } else if  (x=="elementary charges") {
    return 1.602176634e-19
  } else if  (x=="exacoulombs") {
    return 1e18
  } else if  (x=="femtocoulombs") {
    return 1e-15
  } else if  (x=="gigacoulombs") {
    return 1e9
  } else if  (x=="kilocoulombs") {
    return 1000
  } else if  (x=="megacoulombs") {
    return 1000000
  } else if  (x=="microcoulombs") {
    return 0.000001
  } else if  (x=="millicoulombs") {
    return 0.001
  } else if  (x=="nanocoulombs") {
    return 1e-9
  } else if  (x=="petacoulombs") {
    return 1e15
  } else if  (x=="picocoulombs") {
    return 1e-12
  } else if  (x=="statcoulombs") {
    return 3.33564e-10
  } else if  (x=="teracoulombs") {
    return 1e12
  } else if  (x=="yoctocoulombs") {
    return 1e-24
  } else if  (x=="yottacoulombs") {
    return 1e24
  } else if  (x=="zeptocoulombs") {
    return 1e-21
  } else if  (x=="zettacoulombs") {
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
  } else if  (x=="attoampere") {
    return 1e-18
  } else if  (x=="centiampere") {
    return 0.01
  } else if  (x=="decaampere") {
    return 10
  } else if  (x=="deciampere") {
    return 0.1
  } else if  (x=="exaampere") {
    return 1e18
  } else if  (x=="femtoampere") {
    return 1e-15
  } else if  (x=="gigaampere") {
    return 1e9
  } else if  (x=="hectaampere") {
    return 100
  } else if  (x=="kiloampere") {
    return 1000
  } else if  (x=="megaampere") {
    return 1000000
  } else if  (x=="microampere") {
    return 0.000001
  } else if  (x=="milliampere") {
    return 0.001
  } else if  (x=="nanoampere") {
    return 1e-9
  } else if  (x=="petaampere") {
    return 1e15
  } else if  (x=="picoampere") {
    return 1e-12
  } else if  (x=="teraampere") {
    return 1e12
  } else if  (x=="yoctoampere") {
    return 1e-24
  } else if  (x=="yottaampere") {
    return 1e24
  } else if  (x=="zeptoampere") {
    return 1e-21
  } else if  (x=="zettaampere") {
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
  } else if  (x=="barrel of oil equivalents") {
    return 6.118e9
  } else if  (x=="British thermal units") {
    return 1055.06
  } else if  (x=="calories") {
    return 4.184
  } else if  (x=="centijoules") {
    return 0.01
  } else if  (x=="cubic miles of oil") {
    return 1.60392477979577e20
  } else if  (x=="decajoules") {
    return 10
  } else if  (x=="decijoules") {
    return 0.1
  } else if  (x=="electron volts") {
    return 1.602176565e-19
  } else if  (x=="ergs") {
    return 1e-7
  } else if  (x=="exajoules") {
    return 1e18
  } else if  (x=="femtojoules") {
    return 1e-15
  } else if  (x=="foot-pound forces") {
    return 1.355818
  } else if  (x=="foot-poundals") {
    return 0.0421401100938048
  } else if  (x=="gasoline gallon equivalents") {
    return 1.213e8
  } else if  (x=="gigajoules") {
    return 1e9
  } else if  (x=="hartrees") {
    return 4.35974e-18
  } else if  (x=="hectojoules") {
    return 0.01
  } else if  (x=="horsepower-hours") {
    return 2.6845195368856e6
  } else if  (x=="joules") {
    return 1
  } else if  (x=="kilocalories") {
    return 4184
  } else if  (x=="kilojoules") {
    return 1000
  } else if  (x=="kilowatt-hours") {
    return 3.6e6
  } else if  (x=="megajoules") {
    return 1000000
  } else if  (x=="microjoules") {
    return 0.000001
  } else if  (x=="millijoules") {
    return 0.001
  } else if  (x=="nanojoules") {
    return 1e-9
  } else if  (x=="petajoules") {
    return 1e15
  } else if  (x=="picojoules") {
    return 1e-12
  } else if  (x=="planck energies") {
    return 1.95465540929999e9
  } else if  (x=="terajoules") {
    return 1e12
  } else if  (x=="ton of oil equivalents") {
    return 4.1868e10
  } else if  (x=="universe energies") {
    return 1.84467440737096e83
  } else if  (x=="yoctojoules") {
    return 1e-24
  } else if  (x=="yottajoules") {
    return 1e24
  } else if  (x=="zeptojoules") {
    return 1e-21
  } else if  (x=="zettajoules") {
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
  } else if  (x=="banana equivalent doses") {
    return 1e-7
  } else if  (x=="centisieverts") {
    return 0.01
  } else if  (x=="decasieverts") {
    return 10
  } else if  (x=="decisieverts") {
    return 0.1
  } else if  (x=="exasieverts") {
    return 1e18
  } else if  (x=="femtosieverts") {
    return 1e-15
  } else if  (x=="gigasieverts") {
    return 1e9
  } else if  (x=="hectosieverts") {
    return 100
  } else if  (x=="kilosieverts") {
    return 1000
  } else if  (x=="megasieverts") {
    return 1000000
  } else if  (x=="microsieverts") {
    return 0.000001
  } else if  (x=="millisieverts") {
    return 0.001
  } else if  (x=="nanosieverts") {
    return 1e-9
  } else if  (x=="petasieverts") {
    return 1e15
  } else if  (x=="picosieverts") {
    return 1e-12
  } else if  (x=="roentgen equivalent mans") {
    return 0.01
  } else if  (x=="sieverts") {
    return 1
  } else if  (x=="terasieverts") {
    return 1e12
  } else if  (x=="yoctosieverts") {
    return 1e-24
  } else if  (x=="yottasieverts") {
    return 1e24
  } else if  (x=="zeptosieverts") {
    return 1e-21
  } else if (x=="zettasieverts") {
    return 1e21
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
  lengthconverter()
  timeconverter()
}
setInterval(loop,100); // Makes the page update automatically
