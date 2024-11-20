var helmetInfo ={
   "description" : "Description\nExamining the relationship between socioeconomic status measured as the\npercentage of children in a neighborhood receiving reduced-fee lunches at\nschool (lunch) and the percentage of bike riders in the neighborhood wearing\nhelmets (helmet).",
   "usage" : "helmet",
   "parameters" : {
      "helmet" : "Percent of bike riders wearing helmets.",
      "lunch" : "Percent of students receiving reduced-fee school lunches."
   },
   "title" : "Socioeconomic status and reduced-fee school lunches",
   "format" : "A data frame with 12 observations representing neighborhoods on the\nfollowing 2 variables.",
   "reference" : "library(ggplot2)\n\nggplot(helmet, aes(x = lunch, y = helmet)) +\n  geom_point()"
}

var helmet = [
   [
      "lunch",
      "helmet"
   ],
   [
      "50",
      "22.1"
   ],
   [
      "11",
      "35.9"
   ],
   [
      "2",
      "57.9"
   ],
   [
      "19",
      "22.2"
   ],
   [
      "26",
      "42.4"
   ],
   [
      "73",
      "5.8"
   ],
   [
      "81",
      "3.6"
   ],
   [
      "51",
      "21.4"
   ],
   [
      "11",
      "55.2"
   ],
   [
      "2",
      "33.3"
   ],
   [
      "19",
      "32.4"
   ],
   [
      "25",
      "38.4"
   ]
]
