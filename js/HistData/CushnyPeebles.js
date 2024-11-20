var CushnyPeeblesInfo ={
   "format" : "CushnyPeebles: A data frame with 11 observations on the following 4 variables.",
   "usage" : "data(CushnyPeebles)\ndata(CushnyPeeblesN)",
   "reference" : "The last patient (11) has no Control observations, and so is often excluded\nin analyses or other versions of this data set.",
   "description" : "Description\nCushny and Peebles (1905) studied the effects of hydrobromides\nrelated to scopolamine and atropine\nin producing sleep. The sleep of mental patients was\nmeasured without hypnotic (Control) and after treatment \nwith one of three drugs: L. hyoscyamine hydrobromide (L_hyoscyamine),\nL. hyoscine hydrobromide (L_hyoscyine), and\na mixture (racemic) form, DL_hyoscine, called atropine.  \nThe L (levo) and D (detro)\nform of a given molecule are optical isomers (mirror images).\nThe drugs were given on alternate evenings, and the hours\nof sleep were compared with the intervening control night.\nEach of the drugs was tested in this manner a varying number of times in each subject.\nThe average number of hours of sleep for each treatment is the response.\nStudent (1908) used these data to illustrate the paired-sample t-test\nin small samples, testing the hypothesis that the mean difference between\na given drug and the control condition was zero.  \nThis data set became well known when used by Fisher (1925).  Both Student\nand Fisher had problems labeling the drugs correctly (see Senn & Richardson (1994)),\nand consequently came to wrong conclusions.\nBut as well, the sample sizes (number of nights) for each mean differed widely,\nranging from 3-9, and this was not taken into account in their analyses.\nTo allow weighted analyses, the number of observations for each mean\nis contained in the data frame CushnyPeeblesN.",
   "title" : "Cushny-Peebles Data: Soporific Effects of Scopolamine Derivatives",
   "parameters" : {
      "L_hyoscyamine" : "a numeric vector: mean hours of sleep",
      "D_hyoscine" : "a numeric vector: mean hours of sleep",
      "L_hyoscine" : "a numeric vector: mean hours of sleep",
      "Control" : "a numeric vector: mean hours of sleep"
   }
}

var CushnyPeebles = [
   [
      "Control",
      "L_hyoscyamine",
      "L_hyoscine",
      "DL_hyoscine"
   ],
   [
      "0.6",
      "1.3",
      "2.5",
      "2.1"
   ],
   [
      "3",
      "1.4",
      "3.8",
      "4.4"
   ],
   [
      "4.7",
      "4.5",
      "5.8",
      "4.7"
   ],
   [
      "5.5",
      "4.3",
      "5.6",
      "4.8"
   ],
   [
      "6.2",
      "6.1",
      "6.1",
      "6.7"
   ],
   [
      "3.2",
      "6.6",
      "7.6",
      "8.3"
   ],
   [
      "2.5",
      "6.2",
      "8",
      "8.2"
   ],
   [
      "2.8",
      "3.6",
      "4.4",
      "4.3"
   ],
   [
      "1.1",
      "1.1",
      "5.7",
      "5.8"
   ],
   [
      "2.9",
      "4.9",
      "6.3",
      "6.4"
   ],
   [
      "",
      "6.3",
      "6.8",
      "7.3"
   ]
]
