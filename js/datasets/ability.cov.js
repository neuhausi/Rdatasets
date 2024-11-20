var ability.covInfo ={
   "usage" : "ability.cov",
   "description" : "Description\nSix tests were given to 112 individuals. The covariance matrix is\ngiven in this object.",
   "title" : "Ability and Intelligence Tests",
   "format" : "The tests are described as",
   "reference" : "Bartholomew, D. J. (1987).\nLatent Variable Analysis and Factor Analysis.\nGriffin.",
   "parameters" : {
      "picture:" : "a picture-completion test",
      "blocks:" : "block design",
      "general:" : "a non-verbal measure of general intelligence using\nCattell's culture-fair test.",
      "vocab:" : "vocabulary",
      "reading:" : "reading comprehension",
      "maze:" : "mazes"
   }
}

var ability.cov = [
   [
      "cov.general",
      "cov.picture",
      "cov.blocks",
      "cov.maze",
      "cov.reading",
      "cov.vocab",
      "center",
      "n.obs"
   ],
   [
      "24.641",
      "5.991",
      "33.52",
      "6.023",
      "20.755",
      "29.701",
      "0",
      "112"
   ],
   [
      "5.991",
      "6.7",
      "18.137",
      "1.782",
      "4.936",
      "7.204",
      "0",
      "112"
   ],
   [
      "33.52",
      "18.137",
      "149.831",
      "19.424",
      "31.43",
      "50.753",
      "0",
      "112"
   ],
   [
      "6.023",
      "1.782",
      "19.424",
      "12.711",
      "4.757",
      "9.075",
      "0",
      "112"
   ],
   [
      "20.755",
      "4.936",
      "31.43",
      "4.757",
      "52.604",
      "66.762",
      "0",
      "112"
   ],
   [
      "29.701",
      "7.204",
      "50.753",
      "9.075",
      "66.762",
      "135.292",
      "0",
      "112"
   ]
]
