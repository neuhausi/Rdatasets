var Virginis.interpInfo ={
   "reference" : "The data in Virginis come from the table on p. 35 of the &ldquo;Micrometrical Measures&rdquo;\npaper.",
   "format" : "Virgins: A data frame with 18 observations on the following 6 variables giving\nthe measurements of position angle and angular distance between the central (brightest)\nstar and its twin, recorded by various observers over more than 100 years.",
   "title" : "John F. W. Herschel's Data on the Orbit of the Twin Stars \\gamma Virginis",
   "parameters" : {
      "posangle" : "recorded position angle between the two stars, a numeric vector",
      "weight" : "a subjective weight attributed to the accuracy of this observation, a numeric vector",
      "distance" : "separation distance between the two stars, a numeric vector",
      "notes" : "Herschel's notes on this observation, a character vector",
      "year" : "year (\"epoch\") of the observation, a decimal numeric vector",
      "authority" : "A simplified version of the notes giving just the attribution of authority of the observation, a character vector"
   },
   "usage" : "data(\"Virginis\")\n\tdata(\"Virginis.interp\")",
   "description" : "Description\nIn 1833 J. F. W. Herschel published two papers in the Memoirs of the Royal Astronomical Society\ndetailing his investigations of calculating the orbits of twin stars from observations of\ntheir relative position angle and angular distance.\nIn the process, he invented the scatterplot, and the use of visual smoothing to obtain a reliable\ncurve that surpassed the accuracy of individual observations (Friendly & Denis, 2005).\nHis data on the recordings of the twin stars \\gamma Virginis provide an\naccessible example of his methods."
}

var Virginis.interp = [
   [
      "year",
      "posangle",
      "distance",
      "velocity"
   ],
   [
      "1720",
      "160",
      "17.2",
      "-0.32"
   ],
   [
      "1730",
      "156.6666667",
      "16.81",
      "-0.354"
   ],
   [
      "1740",
      "153",
      "16.31",
      "-0.376"
   ],
   [
      "1750",
      "148.9166667",
      "15.5",
      "-0.416"
   ],
   [
      "1760",
      "144.4166667",
      "14.46",
      "-0.478"
   ],
   [
      "1770",
      "139.75",
      "13.7",
      "-0.533"
   ],
   [
      "1780",
      "134.5",
      "13.52",
      "-0.547"
   ],
   [
      "1790",
      "128.5833333",
      "12.94",
      "-0.597"
   ],
   [
      "1800",
      "122.4166667",
      "12.58",
      "-0.632"
   ],
   [
      "1810",
      "115.5",
      "11.18",
      "-0.8"
   ],
   [
      "1815",
      "111.3333333",
      "10.37",
      "-0.929"
   ],
   [
      "1820",
      "106.25",
      "9.57",
      "-1.092"
   ],
   [
      "1825",
      "98.33333333",
      "7.09",
      "-1.987"
   ],
   [
      "1830",
      "84.33333333",
      "4.9",
      "-4.165"
   ]
]
