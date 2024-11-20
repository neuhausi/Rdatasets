var ZeaMaysInfo ={
   "format" : "A data frame with 15 observations on the following 4 variables.",
   "title" : "Darwin's Heights of Cross- and Self-fertilized Zea May Pairs",
   "description" : "Description\nDarwin (1876) studied the growth of pairs of zea may (aka corn)\nseedlings, one produced by cross-fertilization and the other\nproduced by self-fertilization, but otherwise grown under identical \nconditions.\nHis goal was to demonstrate the greater vigour of the cross-fertilized plants.\nThe data recorded are the final height (inches, to the nearest 1/8th)  of the plants in each pair.\nIn the Design of Experiments, Fisher (1935) used these data to illustrate\na paired t-test (well, a one-sample test on the mean difference, cross - self).\nLater in the book (section 21), he used this data to illustrate an early example of a non-parametric permutation\ntest, treating each paired difference as having (randomly) either a positive or negative sign.",
   "reference" : "In addition to the standard paired t-test,\nseveral types of non-parametric tests can be contemplated:",
   "usage" : "data(ZeaMays)",
   "parameters" : {
      "cross" : "height of cross fertilized plant, a numeric vector",
      "diff" : "cross - self for each pair",
      "pair" : "pair number, a numeric vector",
      "pot" : "pot, a factor with levels 1 2 3 4",
      "self" : "height of self fertilized plant, a numeric vector"
   }
}

var ZeaMays = [
   [
      "pair",
      "pot",
      "cross",
      "self",
      "diff"
   ],
   [
      "1",
      "1",
      "23.5",
      "17.375",
      "6.125"
   ],
   [
      "2",
      "1",
      "12",
      "20.375",
      "-8.375"
   ],
   [
      "3",
      "1",
      "21",
      "20",
      "1"
   ],
   [
      "4",
      "2",
      "22",
      "20",
      "2"
   ],
   [
      "5",
      "2",
      "19.125",
      "18.375",
      "0.75"
   ],
   [
      "6",
      "2",
      "21.5",
      "18.625",
      "2.875"
   ],
   [
      "7",
      "3",
      "22.125",
      "18.625",
      "3.5"
   ],
   [
      "8",
      "3",
      "20.375",
      "15.25",
      "5.125"
   ],
   [
      "9",
      "3",
      "18.25",
      "16.5",
      "1.75"
   ],
   [
      "10",
      "3",
      "21.625",
      "18",
      "3.625"
   ],
   [
      "11",
      "3",
      "23.25",
      "16.25",
      "7"
   ],
   [
      "12",
      "4",
      "21",
      "18",
      "3"
   ],
   [
      "13",
      "4",
      "22.125",
      "12.75",
      "9.375"
   ],
   [
      "14",
      "4",
      "23",
      "15.5",
      "7.5"
   ],
   [
      "15",
      "4",
      "12",
      "18",
      "-6"
   ]
]
