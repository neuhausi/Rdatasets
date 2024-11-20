var CushnyPeeblesNInfo ={
   "description" : "Description\nCushny and Peebles (1905) studied the effects of hydrobromides\nrelated to scopolamine and atropine\nin producing sleep. The sleep of mental patients was\nmeasured without hypnotic (Control) and after treatment \nwith one of three drugs: L. hyoscyamine hydrobromide (L_hyoscyamine),\nL. hyoscine hydrobromide (L_hyoscyine), and\na mixture (racemic) form, DL_hyoscine, called atropine.  \nThe L (levo) and D (detro)\nform of a given molecule are optical isomers (mirror images).\nThe drugs were given on alternate evenings, and the hours\nof sleep were compared with the intervening control night.\nEach of the drugs was tested in this manner a varying number of times in each subject.\nThe average number of hours of sleep for each treatment is the response.\nStudent (1908) used these data to illustrate the paired-sample t-test\nin small samples, testing the hypothesis that the mean difference between\na given drug and the control condition was zero.  \nThis data set became well known when used by Fisher (1925).  Both Student\nand Fisher had problems labeling the drugs correctly (see Senn & Richardson (1994)),\nand consequently came to wrong conclusions.\nBut as well, the sample sizes (number of nights) for each mean differed widely,\nranging from 3-9, and this was not taken into account in their analyses.\nTo allow weighted analyses, the number of observations for each mean\nis contained in the data frame CushnyPeeblesN.",
   "usage" : "data(CushnyPeebles)\ndata(CushnyPeeblesN)",
   "parameters" : {
      "L_hyoscine" : "a numeric vector: mean hours of sleep",
      "Control" : "a numeric vector: mean hours of sleep",
      "L_hyoscyamine" : "a numeric vector: mean hours of sleep",
      "D_hyoscine" : "a numeric vector: mean hours of sleep"
   },
   "reference" : "The last patient (11) has no Control observations, and so is often excluded\nin analyses or other versions of this data set.",
   "title" : "Cushny-Peebles Data: Soporific Effects of Scopolamine Derivatives",
   "format" : "CushnyPeebles: A data frame with 11 observations on the following 4 variables."
}

var CushnyPeeblesN = [
   [
      "Control",
      "L_hyoscyamine",
      "L_hyoscine",
      "DL_hyoscine"
   ],
   [
      "9",
      "6",
      "6",
      "6"
   ],
   [
      "9",
      "6",
      "6",
      "6"
   ],
   [
      "8",
      "6",
      "6",
      "6"
   ],
   [
      "9",
      "3",
      "3",
      "3"
   ],
   [
      "9",
      "3",
      "3",
      "3"
   ],
   [
      "8",
      "4",
      "3",
      "3"
   ],
   [
      "8",
      "3",
      "3",
      "3"
   ],
   [
      "7",
      "6",
      "6",
      "5"
   ],
   [
      "8",
      "5",
      "6",
      "5"
   ],
   [
      "9",
      "5",
      "5",
      "6"
   ],
   [
      "0",
      "2",
      "2",
      "2"
   ]
]
