var lbwgrpInfo ={
   "parameters" : {
      "low" : "low birth weight (not valid variable in grouped format)",
      "race1" : "(1/0): Caucasian",
      "race2" : "(1/0): Black",
      "cases" : "Number of observations with same covariate pattern: 30-165",
      "race3" : "(1/0): Other",
      "lowbw" : "Number of low weight babies per covariate pattern: 12-60",
      "smoke" : "1=history of mother smoking; 0=mother nonsmoker"
   },
   "reference" : "lbwgrp is saved as a data frame.\nCount models: count response=lowbt; offset=log(cases); \nBinary: binomial numerator= lowbt; binomial denominator=cases",
   "usage" : "data(lbwgrp)",
   "description" : "Description\ngrouped format of the lbw data. The observation level data come to us form \nHosmer and Lemeshow (2000). Grouping is such that lowbw is the numerator, and \ncases the denominator of a binomial model, or cases may be an offset to the count\nvariable, lowbw.  Birthweights under 2500g classifies a low birthweight baby.",
   "title" : "lbwgrp",
   "format" : "A data frame with 6 observations on the following 7 variables."
}

var lbwgrp = [
   [
      "lowbw",
      "cases",
      "smoke",
      "race1",
      "race2",
      "race3",
      "low"
   ],
   [
      "60",
      "165",
      "0",
      "0",
      "0",
      "1",
      "0"
   ],
   [
      "15",
      "48",
      "0",
      "0",
      "1",
      "0",
      "0"
   ],
   [
      "12",
      "132",
      "0",
      "1",
      "0",
      "0",
      "0"
   ],
   [
      "15",
      "36",
      "1",
      "0",
      "0",
      "1",
      "1"
   ],
   [
      "18",
      "30",
      "1",
      "0",
      "1",
      "0",
      "1"
   ],
   [
      "57",
      "156",
      "1",
      "1",
      "0",
      "0",
      "1"
   ]
]
