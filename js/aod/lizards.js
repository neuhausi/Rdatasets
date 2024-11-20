var lizardsInfo ={
   "format" : "A data frame with 24 observations on the following 6 variables.",
   "reference" : "The data were originally published in Fienberg (1970).",
   "usage" : "data(lizards)",
   "title" : "A Comparison of Site Preferences of Two Species of Lizard",
   "description" : "Description\n&ldquo;These data describe the daytime habits of two species of lizards, grahami and opalinus. \nThey were collected by observing occupied sites or perches and recording the appropriate description, namely \nspecies involved, time of the day, height and diameter of the perch and whether the site was sunny or shaded. \nTime of the day is recorded as early, mid-day or late.&rdquo; (McCullagh and Nelder, 1989, p.129).",
   "parameters" : {
      "Site" : "A factor with levels Sun and Shade.",
      "opalinus" : "A numeric vector giving the observed sample size for opalinus lizards.",
      "Diameter" : "A factor with levels D <= 2 and D > 2 (inches).",
      "grahami" : "A numeric vector giving the observed sample size for grahami lizards.",
      "Height" : "A factor with levels H < 5 and H >= 5 (feet).",
      "Time" : "A factor with levels Early, Mid-day and Late."
   }
}

var lizards = [
   [
      "Site",
      "Diameter",
      "Height",
      "Time",
      "grahami",
      "opalinus"
   ],
   [
      "Sun",
      "D <= 2",
      "H < 5",
      "Early",
      "20",
      "2"
   ],
   [
      "Sun",
      "D <= 2",
      "H < 5",
      "Mid-day",
      "8",
      "1"
   ],
   [
      "Sun",
      "D <= 2",
      "H < 5",
      "Late",
      "4",
      "4"
   ],
   [
      "Sun",
      "D <= 2",
      "H >= 5",
      "Early",
      "13",
      "0"
   ],
   [
      "Sun",
      "D <= 2",
      "H >= 5",
      "Mid-day",
      "8",
      "0"
   ],
   [
      "Sun",
      "D <= 2",
      "H >= 5",
      "Late",
      "12",
      "0"
   ],
   [
      "Sun",
      "D > 2",
      "H < 5",
      "Early",
      "8",
      "3"
   ],
   [
      "Sun",
      "D > 2",
      "H < 5",
      "Mid-day",
      "4",
      "1"
   ],
   [
      "Sun",
      "D > 2",
      "H < 5",
      "Late",
      "5",
      "3"
   ],
   [
      "Sun",
      "D > 2",
      "H >= 5",
      "Early",
      "6",
      "0"
   ],
   [
      "Sun",
      "D > 2",
      "H >= 5",
      "Mid-day",
      "0",
      "0"
   ],
   [
      "Sun",
      "D > 2",
      "H >= 5",
      "Late",
      "1",
      "1"
   ],
   [
      "Shade",
      "D <= 2",
      "H < 5",
      "Early",
      "34",
      "11"
   ],
   [
      "Shade",
      "D <= 2",
      "H < 5",
      "Mid-day",
      "69",
      "20"
   ],
   [
      "Shade",
      "D <= 2",
      "H < 5",
      "Late",
      "18",
      "10"
   ],
   [
      "Shade",
      "D <= 2",
      "H >= 5",
      "Early",
      "31",
      "5"
   ],
   [
      "Shade",
      "D <= 2",
      "H >= 5",
      "Mid-day",
      "55",
      "4"
   ],
   [
      "Shade",
      "D <= 2",
      "H >= 5",
      "Late",
      "13",
      "3"
   ],
   [
      "Shade",
      "D > 2",
      "H < 5",
      "Early",
      "17",
      "15"
   ],
   [
      "Shade",
      "D > 2",
      "H < 5",
      "Mid-day",
      "60",
      "32"
   ],
   [
      "Shade",
      "D > 2",
      "H < 5",
      "Late",
      "8",
      "8"
   ],
   [
      "Shade",
      "D > 2",
      "H >= 5",
      "Early",
      "12",
      "1"
   ],
   [
      "Shade",
      "D > 2",
      "H >= 5",
      "Mid-day",
      "21",
      "5"
   ],
   [
      "Shade",
      "D > 2",
      "H >= 5",
      "Late",
      "4",
      "4"
   ]
]
