var Thurstone.33GInfo ={
   "parameters" : {
      "Reise" : " 16 x 16 correlation matrix of health satisfaction items.  N = 35,000",
      "Bechtoldt.2" : " 17 x 17 correlation matrix of ability tests, N = 213.",
      "Holzinger.9" : " 9 x 9 correlation matrix of ability tests, N = 145",
      "Holzinger" : " 14 x 14 correlation matrix of ability tests, N = 355",
      "Bechtoldt.1" : " 17 x 17 correlation matrix of ability tests, N = 212.",
      "Thurstone.33" : " Another 9 x 9 correlation matrix of ability tests, N=4175",
      "Thurstone" : "9"
   },
   "reference" : "Note that these are tests, not items. Thus, it was possible to find the reliabilities of each test.",
   "format" : "Holzinger and Swineford (1937) introduced the bifactor model (one general factor and several group factors) for mental abilities.  This is a nice demonstration data set of a hierarchical factor structure that can be analyzed using the omega function or using sem. The bifactor model is typically used in measures of cognitive ability.",
   "title" : "Seven data sets showing a bifactor solution.",
   "description" : "Description\nHolzinger-Swineford (1937) introduced the bifactor model of a general factor and uncorrelated group factors. The Holzinger data sets are   original 14 * 14 matrix from their paper as well as a 9 *9 matrix used as an example by Joreskog. The Thurstone correlation matrix is a 9 * 9 matrix of correlations of ability items.  The Reise data set is 16 * 16 correlation matrix of mental health items. The Bechtholdt data sets are both 17 x 17 correlation matrices of ability tests.",
   "usage" : "data(Thurstone)\ndata(Thurstone.33)\ndata(Thurstone.33G)\ndata(Thurstone.9)\ndata(Holzinger)\ndata(Holzinger.9)\ndata(Bechtoldt)\ndata(Bechtoldt.1)\ndata(Bechtoldt.2)\ndata(Reise)"
}

var Thurstone.33G = [
   [
      "V1",
      "V2",
      "V3",
      "V4",
      "V5",
      "V6",
      "V7",
      "V8",
      "V9"
   ],
   [
      "1",
      "0.3981",
      "0.5452",
      "0.4298",
      "0.538",
      "0.3429",
      "0.5439",
      "0.4919",
      "0.5298"
   ],
   [
      "0.3981",
      "1",
      "0.3408",
      "0.2849",
      "0.3462",
      "0.4983",
      "0.3593",
      "0.4318",
      "0.4176"
   ],
   [
      "0.5452",
      "0.3408",
      "1",
      "0.4097",
      "0.5615",
      "0.2954",
      "0.542",
      "0.4184",
      "0.488"
   ],
   [
      "0.4298",
      "0.2849",
      "0.4097",
      "1",
      "0.3911",
      "0.3657",
      "0.4803",
      "0.4098",
      "0.3277"
   ],
   [
      "0.538",
      "0.3462",
      "0.5615",
      "0.3911",
      "1",
      "0.2448",
      "0.5759",
      "0.5461",
      "0.7379"
   ],
   [
      "0.3429",
      "0.4983",
      "0.2954",
      "0.3657",
      "0.2448",
      "1",
      "0.2928",
      "0.3504",
      "0.3019"
   ],
   [
      "0.5439",
      "0.3593",
      "0.542",
      "0.4803",
      "0.5759",
      "0.2928",
      "1",
      "0.5495",
      "0.5169"
   ],
   [
      "0.4919",
      "0.4318",
      "0.4184",
      "0.4098",
      "0.5461",
      "0.3504",
      "0.5495",
      "1",
      "0.608"
   ],
   [
      "0.5298",
      "0.4176",
      "0.488",
      "0.3277",
      "0.7379",
      "0.3019",
      "0.5169",
      "0.608",
      "1"
   ]
]
