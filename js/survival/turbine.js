var turbineInfo ={
   "parameters" : {
      "Data set genfan" : " Time to failure of 70 diesel engine fans.\n\n\n\n hours",
      "Data set turbine" : "\nEach of 432 turbine wheels was inspected\nonce to determine whether a crack had developed in the wheel or not.\n\n\n\n hours",
      "capacitor" : "\nData from a factorial experiment on the life of glass capacitors as a\nfunction of voltage and operating temperature.  There were 8 capacitors\nat each combination of temperature and voltage.\nTesting at each combination was terminated after the fourth failure.\n\n\n\n temperature",
      "cracks" : " Data on the time until the development of cracks\nin a set of 167 identical turbine parts.\nThe parts were inspected at 8 selected times.\n\n\n\n day",
      "Data set imotor" : " Breakdown of motor insulation as a function of\ntemperature.\n\n\n\n temp",
      "Data set valveSeat" : "\nTime to replacement of valve seats for 41 diesel engines.  More than\none seat may be replaced at a particular service, leading to duplicate\ntimes in the data set.  The final inspection time for each engine will\nhave status=0.\n\n\n\n id"
   },
   "usage" : "data(reliability, package=\"survival\")",
   "description" : "Description\nA set of data for simple reliablility analyses, taken from the book by\nMeeker and Escobar.",
   "title" : "Reliability data sets",
   "format" : "capacitor:\nData from a factorial experiment on the life of glass capacitors as a\nfunction of voltage and operating temperature.  There were 8 capacitors\nat each combination of temperature and voltage.\nTesting at each combination was terminated after the fourth failure.\n\n\n\n temperature: temperature in degrees celcius\n\n\n voltage: applied voltage\n\n\n time: time to failure\n\n\n status: 1=failed, 0=censored\n\n\n\n\n cracks: Data on the time until the development of cracks\nin a set of 167 identical turbine parts.\nThe parts were inspected at 8 selected times.\n\n\n\n day: time of inspection\n\n\n fail: number of fans found to have cracks, at this inspection\n\n\n\n\n Data set genfan: Time to failure of 70 diesel engine fans.\n\n\n\n hours: hours of service\n\n\n status: 1=failure, 0=censored\n\n\n\nData set ifluid:\nA data frame with two variables describing the time to electrical\nbreakdown of an insulating fluid.\n\n\n\n time: hours to breakdown\n\n\n voltage: test voltage in kV\n\n\n\n\n Data set imotor: Breakdown of motor insulation as a function of\ntemperature.\n\n\n\n temp: temperature of the test\n\n\n time: time to failure or censoring\n\n\n status: 0=censored, 1=failed\n\n\n\n\n Data set turbine:\nEach of 432 turbine wheels was inspected\nonce to determine whether a crack had developed in the wheel or not.\n\n\n\n hours: time of inspection (100s of hours)\n\n\n inspected: number that were inspected\n\n\n failed: number that failed\n\n\n\n\n Data set valveSeat:\nTime to replacement of valve seats for 41 diesel engines.  More than\none seat may be replaced at a particular service, leading to duplicate\ntimes in the data set.  The final inspection time for each engine will\nhave status=0.\n\n\n\n id: engine identifier\n\n\n time: time of the inspection, in days\n\n\n status: 1=replacement occured, 0= not"
}

var turbine = [
   [
      "hours",
      "inspected",
      "failed"
   ],
   [
      "4",
      "39",
      "0"
   ],
   [
      "10",
      "53",
      "4"
   ],
   [
      "14",
      "33",
      "2"
   ],
   [
      "18",
      "73",
      "7"
   ],
   [
      "22",
      "30",
      "5"
   ],
   [
      "26",
      "39",
      "9"
   ],
   [
      "30",
      "42",
      "9"
   ],
   [
      "34",
      "13",
      "6"
   ],
   [
      "38",
      "34",
      "22"
   ],
   [
      "42",
      "40",
      "21"
   ],
   [
      "46",
      "36",
      "21"
   ]
]
