var Bechtoldt.2Info ={
   "usage" : "data(Thurstone)\ndata(Thurstone.33)\ndata(Thurstone.33G)\ndata(Thurstone.9)\ndata(Holzinger)\ndata(Holzinger.9)\ndata(Bechtoldt)\ndata(Bechtoldt.1)\ndata(Bechtoldt.2)\ndata(Reise)",
   "reference" : "Note that these are tests, not items. Thus, it was possible to find the reliabilities of each test.",
   "title" : "Seven data sets showing a bifactor solution.",
   "description" : "Description\nHolzinger-Swineford (1937) introduced the bifactor model of a general factor and uncorrelated group factors. The Holzinger data sets are   original 14 * 14 matrix from their paper as well as a 9 *9 matrix used as an example by Joreskog. The Thurstone correlation matrix is a 9 * 9 matrix of correlations of ability items.  The Reise data set is 16 * 16 correlation matrix of mental health items. The Bechtholdt data sets are both 17 x 17 correlation matrices of ability tests.",
   "parameters" : {
      "Thurstone.33" : " Another 9 x 9 correlation matrix of ability tests, N=4175",
      "Holzinger" : " 14 x 14 correlation matrix of ability tests, N = 355",
      "Holzinger.9" : " 9 x 9 correlation matrix of ability tests, N = 145",
      "Thurstone" : "9",
      "Bechtoldt.2" : " 17 x 17 correlation matrix of ability tests, N = 213.",
      "Bechtoldt.1" : " 17 x 17 correlation matrix of ability tests, N = 212.",
      "Reise" : " 16 x 16 correlation matrix of health satisfaction items.  N = 35,000"
   },
   "format" : "Holzinger and Swineford (1937) introduced the bifactor model (one general factor and several group factors) for mental abilities.  This is a nice demonstration data set of a hierarchical factor structure that can be analyzed using the omega function or using sem. The bifactor model is typically used in measures of cognitive ability."
}

var Bechtoldt.2 = [
   [
      "First_Names",
      "Word_Number",
      "Sentences",
      "Vocabulary",
      "Completion",
      "First_Letters",
      "Four_letter_words",
      "Suffixes",
      "Flags",
      "Figures",
      "Cards",
      "Addition",
      "Multiplication",
      "Three_Higher",
      "Letter_Series",
      "Pedigrees",
      "Letter_Grouping"
   ],
   [
      "1",
      "0.482",
      "0.299",
      "0.331",
      "0.266",
      "0.335",
      "0.342",
      "0.333",
      "0.124",
      "0.032",
      "0.077",
      "0.151",
      "0.259",
      "0.279",
      "0.377",
      "0.447",
      "0.274"
   ],
   [
      "0.482",
      "1",
      "0.275",
      "0.303",
      "0.273",
      "0.273",
      "0.199",
      "0.29",
      "0.169",
      "0.085",
      "0.193",
      "0.287",
      "0.258",
      "0.223",
      "0.26",
      "0.293",
      "0.216"
   ],
   [
      "0.299",
      "0.275",
      "1",
      "0.828",
      "0.776",
      "0.439",
      "0.432",
      "0.447",
      "0.117",
      "0.051",
      "0.151",
      "0.268",
      "0.319",
      "0.359",
      "0.447",
      "0.541",
      "0.38"
   ],
   [
      "0.331",
      "0.303",
      "0.828",
      "1",
      "0.779",
      "0.493",
      "0.464",
      "0.489",
      "0.121",
      "0.077",
      "0.146",
      "0.312",
      "0.344",
      "0.356",
      "0.432",
      "0.537",
      "0.358"
   ],
   [
      "0.266",
      "0.273",
      "0.776",
      "0.779",
      "1",
      "0.46",
      "0.425",
      "0.443",
      "0.193",
      "0.18",
      "0.174",
      "0.263",
      "0.291",
      "0.342",
      "0.401",
      "0.534",
      "0.359"
   ],
   [
      "0.335",
      "0.273",
      "0.439",
      "0.493",
      "0.46",
      "1",
      "0.674",
      "0.59",
      "0.178",
      "0.081",
      "0.158",
      "0.241",
      "0.338",
      "0.29",
      "0.381",
      "0.35",
      "0.424"
   ],
   [
      "0.342",
      "0.199",
      "0.432",
      "0.464",
      "0.425",
      "0.674",
      "1",
      "0.541",
      "0.223",
      "0.192",
      "0.239",
      "0.18",
      "0.295",
      "0.344",
      "0.402",
      "0.367",
      "0.446"
   ],
   [
      "0.333",
      "0.29",
      "0.447",
      "0.489",
      "0.443",
      "0.59",
      "0.541",
      "1",
      "0.118",
      "0.007",
      "0.114",
      "0.181",
      "0.234",
      "0.298",
      "0.288",
      "0.32",
      "0.325"
   ],
   [
      "0.124",
      "0.169",
      "0.117",
      "0.121",
      "0.193",
      "0.178",
      "0.223",
      "0.118",
      "1",
      "0.593",
      "0.651",
      "0.208",
      "0.179",
      "0.362",
      "0.252",
      "0.085",
      "0.27"
   ],
   [
      "0.032",
      "0.085",
      "0.051",
      "0.077",
      "0.18",
      "0.081",
      "0.192",
      "0.007",
      "0.593",
      "1",
      "0.684",
      "0.109",
      "0.144",
      "0.273",
      "0.203",
      "0.129",
      "0.203"
   ],
   [
      "0.077",
      "0.193",
      "0.151",
      "0.146",
      "0.174",
      "0.158",
      "0.239",
      "0.114",
      "0.651",
      "0.684",
      "1",
      "0.21",
      "0.195",
      "0.331",
      "0.257",
      "0.151",
      "0.293"
   ],
   [
      "0.151",
      "0.287",
      "0.268",
      "0.312",
      "0.263",
      "0.241",
      "0.18",
      "0.181",
      "0.208",
      "0.109",
      "0.21",
      "1",
      "0.661",
      "0.536",
      "0.361",
      "0.206",
      "0.311"
   ],
   [
      "0.259",
      "0.258",
      "0.319",
      "0.344",
      "0.291",
      "0.338",
      "0.295",
      "0.234",
      "0.179",
      "0.144",
      "0.195",
      "0.661",
      "1",
      "0.548",
      "0.379",
      "0.298",
      "0.329"
   ],
   [
      "0.279",
      "0.223",
      "0.359",
      "0.356",
      "0.342",
      "0.29",
      "0.344",
      "0.298",
      "0.362",
      "0.273",
      "0.331",
      "0.536",
      "0.548",
      "1",
      "0.44",
      "0.438",
      "0.41"
   ],
   [
      "0.377",
      "0.26",
      "0.447",
      "0.432",
      "0.401",
      "0.381",
      "0.402",
      "0.288",
      "0.252",
      "0.203",
      "0.257",
      "0.361",
      "0.379",
      "0.44",
      "1",
      "0.555",
      "0.598"
   ],
   [
      "0.447",
      "0.293",
      "0.541",
      "0.537",
      "0.534",
      "0.35",
      "0.367",
      "0.32",
      "0.085",
      "0.129",
      "0.151",
      "0.206",
      "0.298",
      "0.438",
      "0.555",
      "1",
      "0.452"
   ],
   [
      "0.274",
      "0.216",
      "0.38",
      "0.358",
      "0.359",
      "0.424",
      "0.446",
      "0.325",
      "0.27",
      "0.203",
      "0.293",
      "0.311",
      "0.329",
      "0.41",
      "0.598",
      "0.452",
      "1"
   ]
]
