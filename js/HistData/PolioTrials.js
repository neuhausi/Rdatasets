var PolioTrialsInfo ={
   "usage" : "data(PolioTrials)",
   "description" : "Description\nThe data frame PolioTrials gives the results of the 1954 field trials to test the Salk polio vaccine \n(named for the developer, Jonas Salk), conducted by the National Foundation for Infantile Paralysis (NFIP). \nIt is adapted from data in the article by Francis et al. (1955).  \nThere were actually two clinical trials, corresponding to two statistical designs (Experiment),\ndiscussed by Brownlee (1955).  The comparison of designs and results represented a\nmilestone in the development of randomized clinical trials.",
   "title" : "Polio Field Trials Data",
   "reference" : "The data frame is in the form of a single table, but actually comprises the results of two separate\nfield trials, given by Experiment.  Each should be analyzed separately, because the designs\ndiffer markedly.",
   "format" : "A data frame with 8 observations on the following 6 variables.",
   "parameters" : {
      "Experiment" : "a factor with levels ObservedControl RandomizedControl",
      "FalseReports" : "the number of cases initially reported as polio, but later determined\nnot to be polio in that group",
      "NonParalytic" : "the number of cases of paralytic polio observed in that group",
      "Paralytic" : "the number of cases of paralytic polio observed in that group",
      "Population" : "the size of the population in each group in each experiment",
      "Group" : "a factor with levels Controls Grade2NotInoculated IncompleteVaccinations NotInoculated Placebo Vaccinated"
   }
}

var PolioTrials = [
   [
      "Experiment",
      "Group",
      "Population",
      "Paralytic",
      "NonParalytic",
      "FalseReports"
   ],
   [
      "RandomizedControl",
      "Vaccinated",
      "200745",
      "33",
      "24",
      "25"
   ],
   [
      "RandomizedControl",
      "Placebo",
      "201229",
      "115",
      "27",
      "20"
   ],
   [
      "RandomizedControl",
      "NotInoculated",
      "338778",
      "121",
      "36",
      "25"
   ],
   [
      "RandomizedControl",
      "IncompleteVaccinations",
      "8484",
      "1",
      "1",
      "0"
   ],
   [
      "ObservedControl",
      "Vaccinated",
      "221998",
      "38",
      "18",
      "20"
   ],
   [
      "ObservedControl",
      "Controls",
      "725173",
      "330",
      "61",
      "48"
   ],
   [
      "ObservedControl",
      "Grade2NotInoculated",
      "123605",
      "43",
      "11",
      "12"
   ],
   [
      "ObservedControl",
      "IncompleteVaccinations",
      "9904",
      "4",
      "0",
      "0"
   ]
]
