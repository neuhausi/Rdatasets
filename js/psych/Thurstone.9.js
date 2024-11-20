var Thurstone.9Info ={
   "format" : "Holzinger and Swineford (1937) introduced the bifactor model (one general factor and several group factors) for mental abilities.  This is a nice demonstration data set of a hierarchical factor structure that can be analyzed using the omega function or using sem. The bifactor model is typically used in measures of cognitive ability.",
   "parameters" : {
      "Reise" : " 16 x 16 correlation matrix of health satisfaction items.  N = 35,000",
      "Bechtoldt.2" : " 17 x 17 correlation matrix of ability tests, N = 213.",
      "Bechtoldt.1" : " 17 x 17 correlation matrix of ability tests, N = 212.",
      "Thurstone.33" : " Another 9 x 9 correlation matrix of ability tests, N=4175",
      "Holzinger" : " 14 x 14 correlation matrix of ability tests, N = 355",
      "Holzinger.9" : " 9 x 9 correlation matrix of ability tests, N = 145",
      "Thurstone" : "9"
   },
   "reference" : "Note that these are tests, not items. Thus, it was possible to find the reliabilities of each test.",
   "usage" : "data(Thurstone)\ndata(Thurstone.33)\ndata(Thurstone.33G)\ndata(Thurstone.9)\ndata(Holzinger)\ndata(Holzinger.9)\ndata(Bechtoldt)\ndata(Bechtoldt.1)\ndata(Bechtoldt.2)\ndata(Reise)",
   "description" : "Description\nHolzinger-Swineford (1937) introduced the bifactor model of a general factor and uncorrelated group factors. The Holzinger data sets are   original 14 * 14 matrix from their paper as well as a 9 *9 matrix used as an example by Joreskog. The Thurstone correlation matrix is a 9 * 9 matrix of correlations of ability items.  The Reise data set is 16 * 16 correlation matrix of mental health items. The Bechtholdt data sets are both 17 x 17 correlation matrices of ability tests.",
   "title" : "Seven data sets showing a bifactor solution."
}

var Thurstone.9 = [
   [
      "Prefixes",
      "Suffixes",
      "Vocabulary",
      "Sentences",
      "First.Last",
      "FirstLetters",
      "FourLetters",
      "Completion",
      "SameorOpposite"
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
