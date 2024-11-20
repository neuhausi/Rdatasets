var meteoInfo ={
   "description" : "Description\nSeveral meteorological measurements for a period between 1920 and 1931.",
   "usage" : "data(\"meteo\")",
   "parameters" : {
      "rainNovDec" : "rainfall in November and December (mm).",
      "radiation" : "radiation in July (millilitres of alcohol).",
      "year" : "the years.",
      "rainJuly" : "rainfall in July (mm).",
      "yield" : "average harvest yield (quintals per hectare).",
      "temp" : "average July temperature."
   },
   "title" : "Meteorological Measurements for 11 Years",
   "format" : "A data frame with 11 observations on the following 6 variables.",
   "reference" : "Carry out a principal components analysis of both the covariance\nmatrix and the correlation matrix of the data and compare the\nresults. Which set of components leads to the most meaningful\ninterpretation?"
}

var meteo = [
   [
      "year",
      "rainNovDec",
      "temp",
      "rainJuly",
      "radiation",
      "yield"
   ],
   [
      "1920-21",
      "87.9",
      "19.6",
      "1",
      "1661",
      "28.37"
   ],
   [
      "1921-22",
      "89.9",
      "15.2",
      "90.1",
      "968",
      "23.77"
   ],
   [
      "1922-23",
      "153",
      "19.7",
      "56.6",
      "1353",
      "26.04"
   ],
   [
      "1923-24",
      "132.1",
      "17",
      "91",
      "1293",
      "25.74"
   ],
   [
      "1924-25",
      "88.8",
      "18.3",
      "93.7",
      "1153",
      "26.68"
   ],
   [
      "1925-26",
      "220.9",
      "17.8",
      "106.9",
      "1286",
      "24.29"
   ],
   [
      "1926-27",
      "117.7",
      "17.8",
      "65.5",
      "1104",
      "28"
   ],
   [
      "1927-28",
      "109",
      "18.3",
      "41.8",
      "1574",
      "28.37"
   ],
   [
      "1928-29",
      "156.1",
      "17.8",
      "57.4",
      "1222",
      "24.96"
   ],
   [
      "1929-30",
      "181.5",
      "16.8",
      "140.6",
      "902",
      "21.66"
   ],
   [
      "1930-31",
      "181.4",
      "17",
      "74.3",
      "1150",
      "24.37"
   ]
]
