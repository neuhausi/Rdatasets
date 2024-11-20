var TuckerInfo ={
   "description" : "Description\nTucker and Lewis (1973) introduced a reliability coefficient for ML factor analysis.  Their example data set was previously reported by Tucker (1958) and taken from Thurstone and Thurstone (1941).  The correlation matrix is a 9 x 9 for 710 subjects and has two correlated factors of ability: Word Fluency and Verbal.",
   "title" : "9 Cognitive variables discussed by Tucker and Lewis (1973)",
   "reference" : "The correlation matrix from Tucker (1958) was used in Tucker and Lewis (1973) for the Tucker-Lewis Index of factoring reliability.",
   "usage" : "data(Tucker)",
   "parameters" : {
      "t46" : "Chicago Reading Test: Sentences",
      "t51" : "Same or Opposite",
      "t54" : "Suffixes",
      "t24" : "First letters",
      "t45" : "Chicago Reading Test: Vocabulary",
      "t10" : "Completion",
      "t27" : "Four letter words",
      "t23" : "First and last letters",
      "t42" : "Prefixes"
   },
   "format" : "A data frame with 9 observations on the following 9 variables."
}

var Tucker = [
   [
      "t42",
      "t54",
      "t45",
      "t46",
      "t23",
      "t24",
      "t27",
      "t10",
      "t51"
   ],
   [
      "1",
      "0.554",
      "0.227",
      "0.189",
      "0.461",
      "0.506",
      "0.408",
      "0.28",
      "0.241"
   ],
   [
      "0.554",
      "1",
      "0.296",
      "0.219",
      "0.479",
      "0.53",
      "0.425",
      "0.311",
      "0.311"
   ],
   [
      "0.227",
      "0.296",
      "1",
      "0.769",
      "0.237",
      "0.243",
      "0.304",
      "0.718",
      "0.73"
   ],
   [
      "0.189",
      "0.219",
      "0.769",
      "1",
      "0.212",
      "0.226",
      "0.291",
      "0.681",
      "0.661"
   ],
   [
      "0.461",
      "0.479",
      "0.237",
      "0.212",
      "1",
      "0.52",
      "0.514",
      "0.313",
      "0.245"
   ],
   [
      "0.506",
      "0.53",
      "0.243",
      "0.226",
      "0.52",
      "1",
      "0.473",
      "0.348",
      "0.29"
   ],
   [
      "0.408",
      "0.425",
      "0.304",
      "0.291",
      "0.514",
      "0.473",
      "1",
      "0.374",
      "0.306"
   ],
   [
      "0.28",
      "0.311",
      "0.718",
      "0.681",
      "0.313",
      "0.348",
      "0.374",
      "1",
      "0.672"
   ],
   [
      "0.241",
      "0.311",
      "0.73",
      "0.661",
      "0.245",
      "0.29",
      "0.306",
      "0.672",
      "1"
   ]
]
