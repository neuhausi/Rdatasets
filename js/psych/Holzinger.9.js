var Holzinger.9Info ={
   "format" : "Holzinger and Swineford (1937) introduced the bifactor model (one general factor and several group factors) for mental abilities.  This is a nice demonstration data set of a hierarchical factor structure that can be analyzed using the omega function or using sem. The bifactor model is typically used in measures of cognitive ability.",
   "parameters" : {
      "Holzinger.9" : " 9 x 9 correlation matrix of ability tests, N = 145",
      "Thurstone" : "9",
      "Thurstone.33" : " Another 9 x 9 correlation matrix of ability tests, N=4175",
      "Holzinger" : " 14 x 14 correlation matrix of ability tests, N = 355",
      "Reise" : " 16 x 16 correlation matrix of health satisfaction items.  N = 35,000",
      "Bechtoldt.1" : " 17 x 17 correlation matrix of ability tests, N = 212.",
      "Bechtoldt.2" : " 17 x 17 correlation matrix of ability tests, N = 213."
   },
   "reference" : "Note that these are tests, not items. Thus, it was possible to find the reliabilities of each test.",
   "usage" : "data(Thurstone)\ndata(Thurstone.33)\ndata(Thurstone.33G)\ndata(Thurstone.9)\ndata(Holzinger)\ndata(Holzinger.9)\ndata(Bechtoldt)\ndata(Bechtoldt.1)\ndata(Bechtoldt.2)\ndata(Reise)",
   "description" : "Description\nHolzinger-Swineford (1937) introduced the bifactor model of a general factor and uncorrelated group factors. The Holzinger data sets are   original 14 * 14 matrix from their paper as well as a 9 *9 matrix used as an example by Joreskog. The Thurstone correlation matrix is a 9 * 9 matrix of correlations of ability items.  The Reise data set is 16 * 16 correlation matrix of mental health items. The Bechtholdt data sets are both 17 x 17 correlation matrices of ability tests.",
   "title" : "Seven data sets showing a bifactor solution."
}

var Holzinger.9 = [
   [
      "vis_perc",
      "cubes",
      "lozenges",
      "par_comp",
      "sen_comp",
      "wordmean",
      "addition",
      "count_dot",
      "s_c_caps"
   ],
   [
      "1",
      "0.3258",
      "0.44864",
      "0.34163",
      "0.3091",
      "0.31713",
      "0.10419",
      "0.3076",
      "0.48683"
   ],
   [
      "0.3258",
      "1",
      "0.41701",
      "0.228",
      "0.15948",
      "0.19465",
      "0.066362",
      "0.16796",
      "0.24786"
   ],
   [
      "0.44864",
      "0.41701",
      "1",
      "0.32795",
      "0.28685",
      "0.34727",
      "0.074638",
      "0.23857",
      "0.37258"
   ],
   [
      "0.34163",
      "0.228",
      "0.32795",
      "1",
      "0.71861",
      "0.71447",
      "0.20885",
      "0.10381",
      "0.31444"
   ],
   [
      "0.3091",
      "0.15948",
      "0.28685",
      "0.71861",
      "1",
      "0.68528",
      "0.25386",
      "0.19784",
      "0.3556"
   ],
   [
      "0.31713",
      "0.19465",
      "0.34727",
      "0.71447",
      "0.68528",
      "1",
      "0.17866",
      "0.12114",
      "0.27177"
   ],
   [
      "0.10419",
      "0.066362",
      "0.074638",
      "0.20885",
      "0.25386",
      "0.17866",
      "1",
      "0.58706",
      "0.41831"
   ],
   [
      "0.3076",
      "0.16796",
      "0.23857",
      "0.10381",
      "0.19784",
      "0.12114",
      "0.58706",
      "1",
      "0.52835"
   ],
   [
      "0.48683",
      "0.24786",
      "0.37258",
      "0.31444",
      "0.3556",
      "0.27177",
      "0.41831",
      "0.52835",
      "1"
   ]
]
