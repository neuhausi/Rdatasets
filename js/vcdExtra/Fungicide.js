var FungicideInfo ={
   "title" : "Carcinogenic Effects of a Fungicide",
   "description" : "Description\nData from Gart (1971) on the carcinogenic effects of a certain fungicide\nin two strains of mice.\nOf interest is how the association between group (Control, Treated)\nand outcome (Tumor, No Tumor) varies with sex and\nstrain of the mice.\nBreslow (1976) used this data to illustrate the application of linear models\nto log odds ratios.",
   "usage" : "data(Fungicide)",
   "format" : "The data comprise a set of four 2 x 2 tables classifying 403 mice, either\nControl or Treated and whether or not a tumor was later observed.  \nThe four groups represent the combinations of sex and strain of mice.\nThe format is:\nnum [1:2, 1:2, 1:2, 1:2] 5 4 74 12 3 2 84 14 10 4 ...\n- attr(*, \"dimnames\")=List of 4\n..$ group  : chr [1:2] \"Control\" \"Treated\"\n..$ outcome: chr [1:2] \"Tumor\" \"NoTumor\"\n..$ sex    : chr [1:2] \"M\" \"F\"\n..$ strain : chr [1:2] \"1\" \"2\""
}

var Fungicide = [
   [
      "Tumor.M.1",
      "NoTumor.M.1",
      "Tumor.F.1",
      "NoTumor.F.1",
      "Tumor.M.2",
      "NoTumor.M.2",
      "Tumor.F.2",
      "NoTumor.F.2"
   ],
   [
      "5",
      "74",
      "3",
      "84",
      "10",
      "80",
      "3",
      "79"
   ],
   [
      "4",
      "12",
      "2",
      "14",
      "4",
      "14",
      "1",
      "14"
   ]
]
