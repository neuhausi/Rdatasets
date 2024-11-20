var heartInfo ={
   "parameters" : {
      "height" : "Patient's height in inches",
      "weight" : "Patient's weights in pounds",
      "clength" : "Y: Catheter Length (in centimeters)"
   },
   "title" : "Heart Catherization Data",
   "description" : "Description\nThis data set was analyzed by Weisberg (1980) and Chambers et\nal. (1983).  A catheter is passed into a major vein or artery at the\nfemoral region and moved into the heart.  The proper length of the\nintroduced catheter has to be guessed by the physician. The aim of the\ndata set is to describe the relation between the catheter length and\nthe patient's height (X1) and weight (X2).\nThis data sets is used to demonstrate the effects caused by collinearity.\nThe correlation between height and weight is so high that either\nvariable almost completely determines the other.",
   "usage" : "data(heart)",
   "reference" : "There are other heart datasets in other R packages,\nnotably survival, hence considering using\npackage = \"robustbase\", see examples.",
   "format" : "A data frame with 12 observations on the following 3 variables."
}

var heart = [
   [
      "height",
      "weight",
      "clength"
   ],
   [
      "42.8",
      "40",
      "37"
   ],
   [
      "63.5",
      "93.5",
      "50"
   ],
   [
      "37.5",
      "35.5",
      "34"
   ],
   [
      "39.5",
      "30",
      "36"
   ],
   [
      "45.5",
      "52",
      "43"
   ],
   [
      "38.5",
      "17",
      "28"
   ],
   [
      "43",
      "38.5",
      "37"
   ],
   [
      "22.5",
      "8.5",
      "20"
   ],
   [
      "37",
      "33",
      "34"
   ],
   [
      "23.5",
      "9.5",
      "30"
   ],
   [
      "33",
      "21",
      "38"
   ],
   [
      "58",
      "79",
      "47"
   ]
]
