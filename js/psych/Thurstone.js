var ThurstoneInfo ={
   "usage" : "data(Thurstone)\ndata(Thurstone.33)\ndata(Thurstone.33G)\ndata(Thurstone.9)\ndata(Holzinger)\ndata(Holzinger.9)\ndata(Bechtoldt)\ndata(Bechtoldt.1)\ndata(Bechtoldt.2)\ndata(Reise)",
   "description" : "Description\nHolzinger-Swineford (1937) introduced the bifactor model of a general factor and uncorrelated group factors. The Holzinger data sets are   original 14 * 14 matrix from their paper as well as a 9 *9 matrix used as an example by Joreskog. The Thurstone correlation matrix is a 9 * 9 matrix of correlations of ability items.  The Reise data set is 16 * 16 correlation matrix of mental health items. The Bechtholdt data sets are both 17 x 17 correlation matrices of ability tests.",
   "title" : "Seven data sets showing a bifactor solution.",
   "format" : "Holzinger and Swineford (1937) introduced the bifactor model (one general factor and several group factors) for mental abilities.  This is a nice demonstration data set of a hierarchical factor structure that can be analyzed using the omega function or using sem. The bifactor model is typically used in measures of cognitive ability.",
   "reference" : "Note that these are tests, not items. Thus, it was possible to find the reliabilities of each test.",
   "parameters" : {
      "Holzinger.9" : " 9 x 9 correlation matrix of ability tests, N = 145",
      "Reise" : " 16 x 16 correlation matrix of health satisfaction items.  N = 35,000",
      "Bechtoldt.2" : " 17 x 17 correlation matrix of ability tests, N = 213.",
      "Holzinger" : " 14 x 14 correlation matrix of ability tests, N = 355",
      "Thurstone.33" : " Another 9 x 9 correlation matrix of ability tests, N=4175",
      "Bechtoldt.1" : " 17 x 17 correlation matrix of ability tests, N = 212.",
      "Thurstone" : "9"
   }
}

var Thurstone = [
   [
      "Sentences",
      "Vocabulary",
      "Sent.Completion",
      "First.Letters",
      "Four.Letter.Words",
      "Suffixes",
      "Letter.Series",
      "Pedigrees",
      "Letter.Group"
   ],
   [
      "1",
      "0.828",
      "0.776",
      "0.439",
      "0.432",
      "0.447",
      "0.447",
      "0.541",
      "0.38"
   ],
   [
      "0.828",
      "1",
      "0.779",
      "0.493",
      "0.464",
      "0.489",
      "0.432",
      "0.537",
      "0.358"
   ],
   [
      "0.776",
      "0.779",
      "1",
      "0.46",
      "0.425",
      "0.443",
      "0.401",
      "0.534",
      "0.359"
   ],
   [
      "0.439",
      "0.493",
      "0.46",
      "1",
      "0.674",
      "0.59",
      "0.381",
      "0.35",
      "0.424"
   ],
   [
      "0.432",
      "0.464",
      "0.425",
      "0.674",
      "1",
      "0.541",
      "0.402",
      "0.367",
      "0.446"
   ],
   [
      "0.447",
      "0.489",
      "0.443",
      "0.59",
      "0.541",
      "1",
      "0.288",
      "0.32",
      "0.325"
   ],
   [
      "0.447",
      "0.432",
      "0.401",
      "0.381",
      "0.402",
      "0.288",
      "1",
      "0.555",
      "0.598"
   ],
   [
      "0.541",
      "0.537",
      "0.534",
      "0.35",
      "0.367",
      "0.32",
      "0.555",
      "1",
      "0.452"
   ],
   [
      "0.38",
      "0.358",
      "0.359",
      "0.424",
      "0.446",
      "0.325",
      "0.598",
      "0.452",
      "1"
   ]
]
