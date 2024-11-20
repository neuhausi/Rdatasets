var BCGInfo ={
   "description" : "Description\nA meta-analysis on the efficacy of BCG vaccination against tuberculosis (TB).",
   "usage" : "data(\"BCG\")",
   "parameters" : {
      "Latitude" : "geographic position of the place the study was\nundertaken.",
      "Year" : "the year the study was undertaken.",
      "NoVacc" : "the total number of subjects without BCG\nvaccination.",
      "BCGVacc" : "the number of subjects with BCG vaccination.",
      "BCGTB" : "the number of subjects suffering from TB after a BCG\nvaccination.",
      "NoVaccTB" : "the number of subjects suffering from TB without\nBCG vaccination.",
      "Study" : "an identifier of the study."
   },
   "reference" : "Bacille Calmette Guerin (BCG) is the most widely used vaccination\nin the world. Developed in the 1930s and made of a live, weakened\nstrain of Mycobacterium bovis, the BCG is the only vaccination\navailable against tuberculosis today. Colditz et al. (1994)\nreport  data from 13 clinical trials of BCG vaccine each investigating   \nits efficacy in the treatment of tuberculosis. The number of subjects \nsuffering from TB with or without BCG vaccination are \ngiven here. \nIn addition, the data contains the values of two other \nvariables for each study, namely, the geographic latitude of\nthe place where the study was undertaken and the year of publication.\nThese two variables will be used to investigate and perhaps explain\nany heterogeneity among the studies.",
   "title" : "BCG Vaccine Data",
   "format" : "A data frame with 13 observations on the following 7 variables."
}

var BCG = [
   [
      "Study",
      "BCGTB",
      "BCGVacc",
      "NoVaccTB",
      "NoVacc",
      "Latitude",
      "Year"
   ],
   [
      "1",
      "4",
      "123",
      "11",
      "139",
      "44",
      "1948"
   ],
   [
      "2",
      "6",
      "306",
      "29",
      "303",
      "55",
      "1949"
   ],
   [
      "3",
      "3",
      "231",
      "11",
      "220",
      "42",
      "1960"
   ],
   [
      "4",
      "62",
      "13598",
      "248",
      "12867",
      "52",
      "1977"
   ],
   [
      "5",
      "33",
      "5069",
      "47",
      "5808",
      "13",
      "1973"
   ],
   [
      "6",
      "180",
      "1541",
      "372",
      "1451",
      "44",
      "1953"
   ],
   [
      "7",
      "8",
      "2545",
      "10",
      "629",
      "19",
      "1973"
   ],
   [
      "8",
      "505",
      "88391",
      "499",
      "88391",
      "13",
      "1980"
   ],
   [
      "9",
      "29",
      "7499",
      "45",
      "7277",
      "27",
      "1968"
   ],
   [
      "10",
      "17",
      "1716",
      "65",
      "1665",
      "42",
      "1961"
   ],
   [
      "11",
      "186",
      "50634",
      "141",
      "27338",
      "18",
      "1974"
   ],
   [
      "12",
      "5",
      "2498",
      "3",
      "2341",
      "33",
      "1969"
   ],
   [
      "13",
      "27",
      "16913",
      "29",
      "17854",
      "33",
      "1976"
   ]
]
