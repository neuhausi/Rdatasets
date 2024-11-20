var Thurstone.33Info ={
   "parameters" : {
      "Holzinger" : " 14 x 14 correlation matrix of ability tests, N = 355",
      "Bechtoldt.2" : " 17 x 17 correlation matrix of ability tests, N = 213.",
      "Reise" : " 16 x 16 correlation matrix of health satisfaction items.  N = 35,000",
      "Holzinger.9" : " 9 x 9 correlation matrix of ability tests, N = 145",
      "Thurstone" : "9",
      "Thurstone.33" : " Another 9 x 9 correlation matrix of ability tests, N=4175",
      "Bechtoldt.1" : " 17 x 17 correlation matrix of ability tests, N = 212."
   },
   "title" : "Seven data sets showing a bifactor solution.",
   "format" : "Holzinger and Swineford (1937) introduced the bifactor model (one general factor and several group factors) for mental abilities.  This is a nice demonstration data set of a hierarchical factor structure that can be analyzed using the omega function or using sem. The bifactor model is typically used in measures of cognitive ability.",
   "reference" : "Note that these are tests, not items. Thus, it was possible to find the reliabilities of each test.",
   "description" : "Description\nHolzinger-Swineford (1937) introduced the bifactor model of a general factor and uncorrelated group factors. The Holzinger data sets are   original 14 * 14 matrix from their paper as well as a 9 *9 matrix used as an example by Joreskog. The Thurstone correlation matrix is a 9 * 9 matrix of correlations of ability items.  The Reise data set is 16 * 16 correlation matrix of mental health items. The Bechtholdt data sets are both 17 x 17 correlation matrices of ability tests.",
   "usage" : "data(Thurstone)\ndata(Thurstone.33)\ndata(Thurstone.33G)\ndata(Thurstone.9)\ndata(Holzinger)\ndata(Holzinger.9)\ndata(Bechtoldt)\ndata(Bechtoldt.1)\ndata(Bechtoldt.2)\ndata(Reise)"
}

var Thurstone.33 = [
   [
      "Definitions",
      "Arithmetical_Problems",
      "Classification",
      "Artificial_Languange",
      "Antonyms",
      "Number_Series_Completion",
      "Analogies",
      "Logical_Inference",
      "Paragraph_Reading"
   ],
   [
      "1",
      "0.4819",
      "0.617",
      "0.5177",
      "0.6249",
      "0.4216",
      "0.5835",
      "0.5631",
      "0.5857"
   ],
   [
      "0.4819",
      "1",
      "0.3973",
      "0.3966",
      "0.4105",
      "0.5923",
      "0.3976",
      "0.5049",
      "0.4404"
   ],
   [
      "0.617",
      "0.3973",
      "1",
      "0.4722",
      "0.6262",
      "0.3561",
      "0.5931",
      "0.5003",
      "0.557"
   ],
   [
      "0.5177",
      "0.3966",
      "0.4722",
      "1",
      "0.5197",
      "0.4405",
      "0.5413",
      "0.4797",
      "0.4034"
   ],
   [
      "0.6249",
      "0.4105",
      "0.6262",
      "0.5197",
      "1",
      "0.3221",
      "0.5909",
      "0.5937",
      "0.7628"
   ],
   [
      "0.4216",
      "0.5923",
      "0.3561",
      "0.4405",
      "0.3221",
      "1",
      "0.3634",
      "0.4256",
      "0.3324"
   ],
   [
      "0.5835",
      "0.3976",
      "0.5931",
      "0.5413",
      "0.5909",
      "0.3634",
      "1",
      "0.5921",
      "0.5321"
   ],
   [
      "0.5631",
      "0.5049",
      "0.5003",
      "0.4797",
      "0.5937",
      "0.4256",
      "0.5921",
      "1",
      "0.6328"
   ],
   [
      "0.5857",
      "0.4404",
      "0.557",
      "0.4034",
      "0.7628",
      "0.3324",
      "0.5321",
      "0.6328",
      "1"
   ]
]
